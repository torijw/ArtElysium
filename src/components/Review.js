import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import "./review.css";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <section id="background-md">
      <Container fluid className="p-0">
        <div className="text-center" id="box-md">
          <h2 className="fw-bold">{t("review.title")}</h2>
          <p>{t("review.subtitle")}</p>
        </div>
      </Container>
    </section>
  );
}

function ReviewForm() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section id="review-form" className="my-5">
      <Form id="review" onSubmit={(e) => handleOpen(e)}>
        <Form.Group className="mb-3" controlId="commission-type">
          <Form.Label>{t("review.form.commission.label")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("review.form.commission.placeholder")}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>{t("review.form.name.label")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("review.form.name.placeholder")}
            autoComplete="on"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>{t("review.form.email.label")}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t("review.form.email.placeholder")}
            autoComplete="on"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="review-comments">
          <Form.Label>{t("review.form.comments.label")}</Form.Label>
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>
        <div className="text-center">
          <button className="btn dark" type="submit">
            {t("review.form.submitBtn")}
          </button>
        </div>
      </Form>

      <Modal show={open} onHide={handleClose}>
        <Modal.Body>{t("review.modal.body")}</Modal.Body>
        <Modal.Footer>
          <Button className="dark" onClick={handleClose}>
            {t("review.modal.btn")}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

function Review() {
  return (
    <>
      <Banner />
      <ReviewForm />
    </>
  );
}

export default Review;
