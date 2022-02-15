use wasm_bindgen::prelude::*;

use percent_encoding::{percent_decode, percent_encode, NON_ALPHANUMERIC};

#[wasm_bindgen]
pub fn url_encode(txt: &str) -> String {
    percent_encode(txt.as_bytes(), NON_ALPHANUMERIC).to_string()
}
#[wasm_bindgen]
pub fn url_decode(txt: &str) -> String {
    let res = percent_decode(txt.as_bytes()).decode_utf8().unwrap();
    res.into_owned()
}

#[cfg(test)]
mod tests {
    #[test]
    fn url_encode_works() {
        let input = "foo bar?";
        let expect = "foo%20bar%3F";
        assert_eq!(super::url_encode(input), expect);
    }
    #[test]
    fn url_decode_works() {
        let input = "foo%20bar%3F";
        let expect = "foo bar?";
        assert_eq!(super::url_decode(input), expect);
    }
    #[test]
    fn url_encode_non_ascii() {
        let input = "こんにちは世界";
        let expect = "%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E4%B8%96%E7%95%8C";
        assert_eq!(super::url_encode(input), expect);
    }
}
