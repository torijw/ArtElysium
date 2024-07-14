import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <Container className="border-top">  
        <div className="d-flex justify-content-center py-4">
          <a href={process.env.PUBLIC_URL + "/"} className="mx-4">
            {t("common.home")}
          </a>
          <a href={process.env.PUBLIC_URL + "/#about"} className="mx-4">
            {t("common.aboutUs")}
          </a>
          <a href={process.env.PUBLIC_URL + "/explore"} className="mx-4">
            {t("common.explore")}  
          </a>
          <a href={process.env.PUBLIC_URL + "/faq"} className="mx-4">
            {t("common.faq")}
          </a>
          <a href={process.env.PUBLIC_URL + "/feedback"} className="mx-4">
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
