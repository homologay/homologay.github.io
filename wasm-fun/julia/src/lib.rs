mod utils;


//kjidea: 
//
//     - get ip address in javascript
//     - pass it to program
//     - use `ipinfo` crate to get location, ASN, company data, carrier details
//     - pass back to js and present in pretty html to client

use wasm_bindgen;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("hello");
}

#[wasm_bindgen]
pub fn get_ip_addr_of_request() {
    todo!();
}

#[wasm_bindgen]
pub fn ping_ip_addr() {
    todo!();
}

//! idea: 
//
//     - get ip address in javascript
//     - pass it to program
//     - use `ipinfo` crate to get location, ASN, company data, carrier details
//     - pass back to js and present in pretty html to client