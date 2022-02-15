use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn number_base_convert(base_in: u32, base_out: u32, num: &str) -> Option<String> {
    match isize::from_str_radix(num, base_in) {
        Ok(a) => match base_out {
            2 => Some(format!("{:b}", a)),
            8 => Some(format!("{:o}", a)),
            16 => Some(format!("{:X}", a)),
            10 => Some(format!("{}", a)),
            0 | 1 => None, // No base lower than 2
            _ => None,     // Output base not supported
        },
        Err(_) => None, // Could not understand input base
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn decimal_to_binary() {
        let input = "10";
        let output = super::number_base_convert(10, 2, input).unwrap();
        assert_eq!(output, "1010");
    }
    #[test]
    fn decimal_to_octal() {
        let input = "10";
        let output = super::number_base_convert(10, 8, input).unwrap();
        assert_eq!(output, "12");
    }
    #[test]
    fn decimal_to_hexadecimal() {
        let input = "10";
        let output = super::number_base_convert(10, 16, input).unwrap();
        assert_eq!(output, "A");
    }

    #[test]
    fn binary_to_decimal() {
        let input = "101010";
        let output = super::number_base_convert(2, 10, input).unwrap();
        assert_eq!(output, "42");
    }
    #[test]
    fn octal_to_decimal() {
        let input = "52";
        let output = super::number_base_convert(8, 10, input).unwrap();
        assert_eq!(output, "42");
    }
    #[test]
    fn hexadecimal_to_decimal() {
        let input = "2A";
        let output = super::number_base_convert(16, 10, input).unwrap();
        assert_eq!(output, "42");
    }
}
