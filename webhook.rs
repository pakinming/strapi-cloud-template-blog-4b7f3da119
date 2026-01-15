#!/usr/bin/env rust-script
//! ```cargo
//! [dependencies]
//! axum = "0.7"
//! tokio = { version = "1", features = ["full"] }
//! ```

use axum::{routing::post, Router};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", post(|method: axum::http::Method, headers: axum::http::HeaderMap, body: String| async move {
 
            println!("Method: {method}");
            println!("Headers: {headers:?}");
            println!("Body: {body} \n\n");

            "OK"
        }));

    let listener = TcpListener::bind("0.0.0.0:8800")
        .await
        .unwrap();

    println!("Listening on http://0.0.0.0:8800");

    axum::serve(listener, app)
        .await
        .unwrap();
}