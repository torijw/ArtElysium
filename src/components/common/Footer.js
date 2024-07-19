import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <Container className="border-top">
        <div className="d-flex justify-content-center py-4" role="navigation">
          <a href={process.env.PUBLIC_URL + "/"} className="mx-4" aria-label="go to home page">
            {t("common.home")}
          </a>
          <a href={process.env.PUBLIC_URL + "/#about"} className="mx-4" aria-label="go to about us">
            {t("common.aboutUs")}
          </a>
          <a href={process.env.PUBLIC_URL + "/explore"} className="mx-4" aria-label="go to explore page">
            {t("common.explore")}
          </a>
          <a href={process.env.PUBLIC_URL + "/design"} className="mx-4" aria-label="go to design page">
            {t("common.design")}
          </a>
          <a href={process.env.PUBLIC_URL + "/faq"} className="mx-4" aria-label="go to FAQ page">
            {t("common.faq")}
          </a>
          <a href={process.env.PUBLIC_URL + "/feedback"} className="mx-4" aria-label="go to feedback and contact page">
            {t("common.feedback")}
          </a>
        </div>
        <div>
          <h5 className="text-center">{t("common.siteName")}</h5>
          <p className="text-muted text-center">&copy; 2024</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
