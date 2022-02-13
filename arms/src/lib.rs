extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

// Thanks: https://github.com/RustCrypto/hashes
// use base64ct::{Base64, Encoding};
use sha2::{Digest, Sha256};

#[wasm_bindgen]
pub fn sha256(txt: &str) -> String {
    let hash = Sha256::new().chain_update(txt).finalize();
    // Base64::encode_string(&hash)
    base16ct::lower::encode_string(&hash)
}

use std::io::BufWriter;
pub fn json_to_yaml(txt: &str) -> String {
    let buf = BufWriter::new(Vec::new());

    // Input format Serde Deserializer
    let mut deserializer = serde_json::Deserializer::from_str(txt);

    // Output format Serde Serializer
    let mut serializer = serde_yaml::Serializer::new(buf);

    // Any self-describing Deserializer and any Serializer.
    serde_transcode::transcode(&mut deserializer, &mut serializer).unwrap();

    let bytes = serializer.into_inner().into_inner().unwrap();
    String::from_utf8(bytes).unwrap()
}

#[cfg(test)]
mod tests {
    #[test]
    fn hash_works() {
        let txt = "Hello World";
        assert_eq!(
            crate::sha256(txt),
            "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e".to_string()
        );
    }

    #[test]
    fn format_forks() {
        // A JSON input with plenty of whitespace.
        let input = r#"
        {
            "a boolean": true,
            "an array": [3, 2, 1]
        }
        "#;
        let output = r#"---
a boolean: true
an array:
  - 3
  - 2
  - 1
"#;
        let res = crate::json_to_yaml(input);
        assert_eq!(res, output.to_string());
    }
}
