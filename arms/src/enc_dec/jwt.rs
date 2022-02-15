use wasm_bindgen::prelude::*;

use hmac::{Hmac, Mac};
use jwt::{Header, Token, VerifyWithKey};
use sha2::Sha384;
use std::collections::BTreeMap;

// Reference: https://jwt.io

#[wasm_bindgen]
#[derive(Debug)]
pub struct DecodedJWT {
    header: String,
    payload: String,
}
#[wasm_bindgen]
impl DecodedJWT {
    #[wasm_bindgen(getter)]
    pub fn header(&self) -> String {
        self.header.clone()
    }
    #[wasm_bindgen(getter)]
    pub fn payload(&self) -> String {
        self.payload.clone()
    }
}

#[wasm_bindgen]
pub fn jwt_decode(secret: &str, token_str: &str) -> DecodedJWT {
    let key: Hmac<Sha384> = Hmac::new_from_slice(secret.as_bytes()).unwrap();

    let token: Token<Header, BTreeMap<String, String>, _> =
        VerifyWithKey::verify_with_key(token_str, &key).unwrap();
    let header = token.header();
    let claims = token.claims();

    let decoded = DecodedJWT {
        header: serde_json::to_string(&header).unwrap(),
        payload: serde_json::to_string(&claims).unwrap(),
    };
    decoded
}

#[cfg(test)]
mod tests {
    use super::*;
    const SECRET: &str = "some-secret";
    const JWT: &str = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzb21lb25lIn0.WM_WnPUkHK6zm6Wz7zk1kmIxz990Te7nlDjQ3vzcye29szZ-Sj47rLNSTJNzpQd_";

    #[test]
    fn test_jwt() {
        let key: Hmac<Sha384> = Hmac::new_from_slice(b"some-secret").unwrap();

        let token: Token<Header, BTreeMap<String, String>, _> =
            VerifyWithKey::verify_with_key(JWT, &key).unwrap();
        let header = token.header();
        let claims = token.claims();

        assert_eq!(header.algorithm, jwt::AlgorithmType::Hs384);
        assert_eq!(claims["sub"], "someone");
    }

    #[test]
    fn test_jwt_decode() {
        let decoded = jwt_decode(SECRET, JWT);
        println!("{:?}", decoded);
        assert_eq!(decoded.header(), "{\"alg\":\"HS384\"}");
        assert_eq!(decoded.payload, "{\"sub\":\"someone\"}");
    }
}
