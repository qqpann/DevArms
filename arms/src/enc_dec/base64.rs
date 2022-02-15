use wasm_bindgen::prelude::*;

use base64::{decode, encode};

#[wasm_bindgen]
pub fn base64enc(txt: &str) -> String {
    let bytes = txt.as_bytes();
    encode(bytes)
}
#[wasm_bindgen]
pub fn base64dec(txt: &str) -> String {
    let res = decode(txt).unwrap();
    String::from_utf8(res).unwrap()
}

#[cfg(test)]
mod tests {
    #[test]
    fn base64enc_works() {
        let a = "hello world";
        let b = "aGVsbG8gd29ybGQ=";
        assert_eq!(super::base64enc(a), b);
    }
    #[test]
    fn base64dec_works() {
        let a = "hello world";
        let b = "aGVsbG8gd29ybGQ=";
        assert_eq!(a, super::base64dec(b));
    }
}
