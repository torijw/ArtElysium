import React from "react";
import { Accordion, AccordionBody, Container } from "react-bootstrap";
import { faqs } from "../data/faq";
import "./faq.css";

function Title() {
  return (
    <section id="explore-title">
      <Container fluid className="p-0 mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Frequently Asked Questions (FAQ)</h2>
          <p>
            Need help? We might have the answer for you here or{" "}
            <a
              href={process.env.PUBLIC_URL + "/feedback"}
              style={{ textDecoration: "underline" }}
            >
              contact us
            </a>{" "}
            for specific questions.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Help() {
  return (
    <section style={{ margin: "auto", maxWidth: "1200px" }} className="my-5">
      <Container fluid className="p-0">
        <Accordion defaultActiveKey={[]} alwaysOpen>
          {faqs.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <AccordionBody>{item.answer}</AccordionBody>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <div>
      <Title />
      <Help />
    </div>
  );
}

export default FAQ;
