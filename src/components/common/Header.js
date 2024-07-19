import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const locales = {
    en: { title: "English" },
    fr: { title: "French" },
  };

  const { t, i18n } = useTranslation();

  return (
    <header className="sticky-top">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand className="mx-3" href={process.env.PUBLIC_URL + "/"} aria-label="go to home page">
            {/* <img
                alt=""
                src="./logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> */}{" "}
            {t("common.siteName")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" role="navigation">
            <Nav className="ms-auto">
              {" "}
              {/*m-auto for center align*/}
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/"}
                aria-label="go to home page"
              >
                {t("common.home")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/#about"}
                aria-label="go to about us"
              >
                {t("common.aboutUs")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/explore"}
                aria-label="go to explore page"
              >
                {t("common.explore")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/design"}
                aria-label="go to design page"
              >
                {t("common.design")}
              </Nav.Link>
              <NavDropdown
                className="mx-3"
                align="end"
                title={t("common.help")}
                role="listbox"
                aria-label="Help dropdown"
              >
                <NavDropdown.Item
                  href={process.env.PUBLIC_URL + "/faq"}
                  aria-label="go to FAQ page"
                >
                  {t("common.faq")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={process.env.PUBLIC_URL + "/feedback"}
                  aria-label="go to feedback and contact page"
                >
                  {t("common.feedback")}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="mx-3"
                align="end"
                title={
                  <>
                    <i className="bi bi-globe2"></i>{" "}
                    {i18n.language.toUpperCase()}
                  </>
                }
                aria-label="Language Selector"
                role="listbox"
              >
                {Object.keys(locales).map((locale) => (
                  <NavDropdown.Item
                    key={locale}
                    onClick={() => {
                      i18n.changeLanguage(locale);
                    }}
                    aria-label={`change language to ${locales[locale].title}`}
                  >
                    {locales[locale].title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
