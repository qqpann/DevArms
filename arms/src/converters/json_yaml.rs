use wasm_bindgen::prelude::*;

use std::io::BufWriter;

#[wasm_bindgen]
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
        let res = super::json_to_yaml(input);
        assert_eq!(res, output.to_string());
    }
}
