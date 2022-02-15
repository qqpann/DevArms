use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn html_encode(txt: &str) -> String {
    let mut out = String::new();
    html_escape::encode_text_to_string(txt, &mut out);
    out
}
#[wasm_bindgen]
pub fn html_decode(txt: &str) -> String {
    let mut out = String::new();
    html_escape::decode_html_entities_to_string(txt, &mut out);
    out
}

#[cfg(test)]
mod tests {
    #[test]
    fn html_encode_works() {
        let input = "a > b && a < c";
        let expect = "a &gt; b &amp;&amp; a &lt; c";
        assert_eq!(super::html_encode(input), expect);
    }
    #[test]
    fn html_decode_works() {
        let input = "a &gt; b &amp;&amp; a &lt; c";
        let expect = "a > b && a < c";
        assert_eq!(super::html_decode(input), expect);
    }
    #[test]
    fn html_decode_named_entries() {
        // TODO: opposite should work as well
        let input = "&lt;&gt;&amp;&quot;&apos;&copy;&reg;";
        let expect = "<>&\"'©®";
        assert_eq!(super::html_decode(input), expect);
    }
}
