//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use arms;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
pub fn hash_works_on_web() {
    let txt = "Hello World";
    assert_eq!(
        arms::sha256(txt),
        "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e".to_string()
    );
}

#[wasm_bindgen_test]
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
    let res = arms::json_to_yaml(input);
    assert_eq!(res, output.to_string());
}
