import React from "react";
import { Accordion, AccordionBody, Container } from "react-bootstrap";
import { faqs, faqsFR } from "../data/faq";
import "./faq.css";
import { useTranslation } from "react-i18next";

function Title() {
  const { t } = useTranslation();

  return (
    <section id="explore-title">
      <Container fluid className="p-0 mt-5">
        <div className="text-center">
          <h2 className="fw-bold">{t("faq.title")}</h2>
          <p>
            {t("faq.subtitle.first")}{" "}
            <a
              href={process.env.PUBLIC_URL + "/feedback"}
              style={{ textDecoration: "underline" }}
            >
              {t("faq.subtitle.contact")}
            </a>{" "}
            {t("faq.subtitle.last")}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Help() {
  const { i18n } = useTranslation();
  const faqList = i18n.language.toLowerCase() === "en" ? faqs : faqsFR;

  return (
    <section style={{ margin: "auto", maxWidth: "1200px" }} className="my-5">
      <Container fluid className="p-0">
        <Accordion defaultActiveKey={[]} alwaysOpen>
          {faqList.map((item, index) => (
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
