use wasm_bindgen::prelude::*;

use std::io::BufWriter;

#[wasm_bindgen]
pub fn format_json(txt: &str) -> String {
    let buf = BufWriter::new(Vec::new());

    let formatter = serde_json::ser::PrettyFormatter::with_indent("  ".as_bytes());

    // Input format Serde Deserializer
    let mut deserializer = serde_json::Deserializer::from_str(txt);

    // Output format Serde Serializer
    let mut serializer = serde_json::Serializer::with_formatter(buf, formatter);

    // Any self-describing Deserializer and any Serializer.
    serde_transcode::transcode(&mut deserializer, &mut serializer).unwrap();

    let bytes = serializer.into_inner().into_inner().unwrap();
    String::from_utf8(bytes).unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn format_forks() {
        // A JSON input with plenty of whitespace.
        let input = r#"
        {
            "a boolean": true,
            "an array": [3, 2, 1]
        }
        "#;
        let expect = r#"{
  "a boolean": true,
  "an array": [
    3,
    2,
    1
  ]
}"#;
        let output = format_json(input);
        assert_eq!(expect.to_string(), output);
    }
}
