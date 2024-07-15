import React, { useEffect } from "react";
import "./home.css";
import { Container, Carousel } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdDraw } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <section id="background">
      <Container fluid className="p-0">
        <div className="text-center" id="box">
          <h1>{t("common.siteName")}</h1>
          <p className="mb-4">{t("home.subtitle")}</p>
          <a href="#about" className="btn light fw-bold mt-4 shadow">
            {t("common.aboutUs")}
          </a>
        </div>
      </Container>
    </section>
  );
}

function GetStarted() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="mt-5">
      <Container fluid id="getstarted">
        <h3 className="mb-3">{t("home.subheadings.getstarted")}</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("home.entry.explore.title")}</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  {t("home.entry.explore.subtitle")}
                </h6>
                <p className="card-text">{t("home.entry.explore.content")}</p>
                <div className="text-center">
                  <button
                    onClick={() => navigate("/explore")}
                    className="btn dark mt-3"
                  >
                    <BsSearch className="mb-1" /> {t("home.exploreBtn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("home.entry.design.title")}</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  {t("home.entry.design.subtitle")}
                </h6>
                <p className="card-text">{t("home.entry.design.content")}</p>
                <div className="text-center">
                  <button
                    onClick={() => navigate("/design")}
                    className="btn dark mt-3"
                  >
                    <MdDraw className="mb-1" /> {t("home.designBtn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="mt-5">
      <h3 className="text-center">{t("home.subheadings.examples")}</h3>
      <Carousel className="mt-4 portfolio">
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-1.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-2.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-3.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-4.webp")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="my-5">
      <Container fluid id="reviews" className="my-5">
        <h3 className="my-3">{t("home.subheadings.reviews")}</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("home.reviews.1.heading")}</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  {t("home.reviews.1.author")}
                </h6>
                <p className="card-text">{t("home.reviews.1.comment")}</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("home.reviews.2.heading")}</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  {t("home.reviews.2.author")}
                </h6>
                <p className="card-text">{t("home.reviews.2.comment")}</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("home.reviews.3.heading")}</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  {t("home.reviews.3.author")}
                </h6>
                <p className="card-text">{t("home.reviews.3.comment")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  const { t } = useTranslation();

  return (
    <section className="my-5">
      <Container fluid id="about">
        <h3>{t("common.aboutUs")}</h3>
        <div className="d-flex flex-row mt-4">
          <div className="p-2 left-image" />
          <div className="p-2 right-section">
            <p>{t("home.aboutUs.description")}</p>
            <br />
            <br />
            <Container fluid className="p-0" id="contacts">
              <h5>{t("home.aboutUs.contactInfo.heading")}</h5>
              <div className="d-flex flex-row">
                <div className="p-2 right">
                  <p>
                    <span className="text-muted">
                      {t("home.aboutUs.contactInfo.customerService.name")}
                    </span>
                    <br /> 75 Laurier Ave E
                    <br /> Ottawa, ON Canada
                    <br /> K1N 6N5
                  </p>
                </div>
                <div className="p-2 left">
                  <p>
                    <span></span>
                    <br />
                    {t("home.aboutUs.contactInfo.customerService.phone")}
                    <br />
                    {t("home.aboutUs.contactInfo.customerService.email")}
                    <br />
                    {t("home.aboutUs.contactInfo.customerService.fax")}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <Banner />
      <GetStarted />
      <Portfolio />
      <Reviews />
      <About />
    </>
  );
}

export default Home;
