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
          <Navbar.Brand className="mx-3" href={process.env.PUBLIC_URL + "/"}>
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
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              {" "}
              {/*m-auto for center align*/}
              <Nav.Link className="mx-3" href={process.env.PUBLIC_URL + "/"}>
                {t("common.home")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/#about"}
              >
                {t("common.aboutUs")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/explore"}
              >
                {t("common.explore")}
              </Nav.Link>
              <Nav.Link className="mx-3" href={process.env.PUBLIC_URL + "/faq"}>
                {t("common.faq")}
              </Nav.Link>
              <Nav.Link
                className="mx-3"
                href={process.env.PUBLIC_URL + "/feedback"}
              >
                {t("common.feedback")}
              </Nav.Link>
              <NavDropdown
                align="end"
                title={
                  <>
                    <i class="bi bi-globe2"></i> {i18n.language.toUpperCase()}
                  </>
                }
              >
                {Object.keys(locales).map((locale) => (
                  <NavDropdown.Item
                    key={locale}
                    onClick={() => {
                      i18n.changeLanguage(locale);
                    }}
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
