use wasm_bindgen::prelude::*;

use convert_case::{Case, Casing};

#[wasm_bindgen]
#[derive(Eq, PartialEq, Hash, Clone, Copy, Debug)]
pub enum TextCase {
    Upper,
    Lower,
    Title,
    Toggle,
    Camel,
    Pascal,
    UpperCamel,
    Snake,
    UpperSnake,
    ScreamingSnake,
    Kebab,
    Cobol,
    UpperKebab,
    Train,
    Flat,
    UpperFlat,
    Alternating,
}
impl TextCase {
    // Reference: https://doc.rust-jp.rs/rust-by-example-ja/custom_types/enum.html#型エイリアス
    fn into_case(&self) -> Case {
        match self {
            Self::Upper => Case::Upper,
            Self::Lower => Case::Lower,
            Self::Title => Case::Title,
            Self::Toggle => Case::Toggle,
            Self::Camel => Case::Camel,
            Self::Pascal => Case::Pascal,
            Self::UpperCamel => Case::UpperCamel,
            Self::Snake => Case::Snake,
            Self::ScreamingSnake => Case::ScreamingSnake,
            Self::Kebab => Case::Kebab,
            Self::Cobol => Case::Cobol,
            Self::UpperKebab => Case::UpperKebab,
            Self::Train => Case::Train,
            Self::Flat => Case::Flat,
            Self::UpperFlat => Case::UpperFlat,
            Self::Alternating => Case::Alternating,
            _ => Case::Alternating,
        }
    }
}

#[wasm_bindgen]
pub fn text_case_convert(txt: &str, to_case: TextCase) -> String {
    txt.to_case(to_case.into_case())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn text_case_snake() {
        let input = "__weird--var _name-";
        let expect = "weird_var_name";
        let output = text_case_convert(input, TextCase::Snake);
        assert_eq!(expect, output);
    }
}
