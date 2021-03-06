use wasm_bindgen::prelude::*;

use sha2::{Digest, Sha256};

#[wasm_bindgen]
pub fn sha256(txt: &str) -> String {
    let hash = Sha256::new().chain_update(txt).finalize();
    base16ct::lower::encode_string(&hash)
}

#[cfg(test)]
mod tests {
    #[test]
    fn hash_works() {
        let txt = "Hello World";
        assert_eq!(
            super::sha256(txt),
            "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e".to_string()
        );
    }
}
