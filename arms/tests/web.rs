//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

use arms;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
pub fn hash_works_on_web() {
    let txt = "Hello World";
    assert_eq!(
        arms::generators::hash::sha256(txt),
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
    let res = arms::converters::json_yaml::json_to_yaml(input);
    assert_eq!(res, output.to_string());
}

#[wasm_bindgen_test]
fn base64enc_works() {
    let a = "hello world";
    let b = "aGVsbG8gd29ybGQ=";
    assert_eq!(arms::enc_dec::base64::base64enc(a), b);
}
#[wasm_bindgen_test]
fn base64dec_works() {
    let a = "hello world";
    let b = "aGVsbG8gd29ybGQ=";
    assert_eq!(a, arms::enc_dec::base64::base64dec(b));
}

#[wasm_bindgen_test]
fn decimal_to_binary() {
    let input = "10";
    let output = arms::converters::number_base::number_base_convert(10, 2, input).unwrap();
    assert_eq!(output, "1010");
}

#[wasm_bindgen_test]
fn url_encode_non_ascii() {
    let input = "こんにちは世界";
    let expect = "%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E4%B8%96%E7%95%8C";
    assert_eq!(arms::enc_dec::url::url_encode(input), expect);
}

#[wasm_bindgen_test]
fn html_decode_works() {
    let input = "a &gt; b &amp;&amp; a &lt; c";
    let expect = "a > b && a < c";
    assert_eq!(arms::enc_dec::html::html_decode(input), expect);
}
