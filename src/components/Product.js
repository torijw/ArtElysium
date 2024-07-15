import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { productList } from "../data/data";
import "./product.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Product() {
  const navigate = useNavigate();
  let back = "/explore";
  let requestPath = "/request";
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));

  function Features() {
    const features = product.features.map((feat, index) => (
      <li key={"f-" + index}>{feat}</li>
    ));
    return (
      <>
        <h6>Features</h6>
        <ul>{features}</ul>
      </>
    );
  }

  function Examples() {
    const examples = product.examples.map((ex, index) => (
      <Carousel.Item key={"ex-" + index}>
        <img src={"../" + ex} className="d-block h-100" alt="..." />
      </Carousel.Item>
    ));

    return <Carousel className="mt-4 examples">{examples}</Carousel>;
  }

  return (
    <section id="details">
      <Container fluid className="p-0 my-5">
        <div>
          <button onClick={() => navigate(back)} className="btn dark">
            &lt; Back
          </button>
        </div>

        <section className="d-flex flex-row" id="product-details">
          <div className="right text-center">
            <Examples />
          </div>
          <div className="px-5 left" id="detail-section">
            <div className="top-90">
              <h2 className="fw-bold text-center title mb-4">
                {product.title}
              </h2>
              <h6 className="mb-4">
                By: {product.artist}
                <span className="float-end">Base Price: ${product.price}</span>
              </h6>
              <p className="mb-4">{product.description}</p>
              <Features className="mb-4" />
            </div>
            <div className="text-center">
              <button
                className="btn dark"
                onClick={() =>
                  navigate(requestPath, {
                    state: { prevUrl: `/explore/${id}` },
                  })
                }
              >
                Request Now
              </button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}

export default Product;
