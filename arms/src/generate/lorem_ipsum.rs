use wasm_bindgen::prelude::*;

use lipsum::lipsum_words;

#[wasm_bindgen]
pub fn lorem_gen(num: usize) -> String {
    lipsum_words(num)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn lorem_works() {
        let res = lorem_gen(3);
        assert!(res.len() > 0);
    }
}
