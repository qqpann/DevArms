use wasm_bindgen::prelude::*;

use uuid::Uuid;

#[wasm_bindgen]
pub fn uuid_gen() -> String {
    Uuid::new_v4().to_string()
}

pub fn uuid_batch_gen(num: usize) -> Vec<String> {
    let mut uuids = Vec::new();
    for _ in 0..num {
        uuids.push(Uuid::new_v4().to_string());
    }
    uuids
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn uuid_works() {
        let id1 = uuid_gen();
        let id2 = uuid_gen();
        assert_ne!(id1, id2);
    }
    #[test]
    fn uuid_batch_works() {
        let uuids = uuid_batch_gen(3);
        assert_eq!(uuids.len(), 3);
        assert_ne!(uuids[0], uuids[1]);
    }
}
