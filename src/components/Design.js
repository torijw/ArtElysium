import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Container, Form } from "react-bootstrap";
import { productList } from "../data/data";
import { useNavigate } from "react-router-dom";

function Banner() {
  return (
    <section id="background-md">
      <Container fluid className="p-0">
        <div className="text-center" id="box-md">
          <h2 className="fw-bold">Sketch Your Own Design</h2>
          <p>
            If you want to be creative, let us see your ideas and we will do our
            best to match your vision!
          </p>
        </div>
      </Container>
    </section>
  );
}

function Canvas() {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("#ffffff");

  const handleStrokeColorChange = (e) => {
    setStrokeColor(e.target.value);
  };

  const handleCanvasColorChange = (e) => {
    setCanvasColor(e.target.value);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleStrokeWidthChange = (e) => {
    setStrokeWidth(e.target.value);
    setEraserWidth(e.target.value);
  };

  return (
    <Container fluid className="mb-5">
      <Card className="justify-content-center">
        <Card.Body>
          <div id="canvas">
            <h5>Tools</h5>
            <div className="d-flex gap-2 align-items-center">
              <button
                type="button"
                className="btn btn-sm light"
                disabled={!eraseMode}
                onClick={handlePenClick}
              >
                <i className="bi bi-pencil-fill"></i>
              </button>
              <button
                type="button"
                className="btn btn-sm light"
                disabled={eraseMode}
                onClick={handleEraserClick}
              >
                <i className="bi bi-eraser-fill"></i>
              </button>
              <div className="me-3">
                <label htmlFor="strokeWidth">Stroke width</label>
                <input
                  type="range"
                  className="form-range"
                  min="1"
                  max="30"
                  step="1"
                  id="strokeWidth"
                  value={strokeWidth}
                  onChange={handleStrokeWidthChange}
                />
              </div>
              <div className="d-flex flex-column me-3">
                <label htmlFor="color">Stroke color</label>
                <input
                  type="color"
                  value={strokeColor}
                  onChange={handleStrokeColorChange}
                />
              </div>
              <div className="d-flex flex-column me-3">
                <label htmlFor="color">Canvas color</label>
                <input
                  type="color"
                  value={canvasColor}
                  onChange={handleCanvasColorChange}
                />
              </div>
              <div className="vr" />
              <button
                type="button"
                className="btn btn-sm light"
                onClick={handleUndoClick}
              >
                <i className="bi bi-arrow-90deg-left"></i> Undo
              </button>
              <button
                type="button"
                className="btn btn-sm light"
                onClick={handleRedoClick}
              >
                Redo <i className="bi bi-arrow-90deg-right"></i>
              </button>
              <button
                type="button"
                className="btn btn-sm light"
                onClick={handleClearClick}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => {
                  canvasRef.current
                    .exportImage("png")
                    .then((data) => {
                      sessionStorage.setItem("canvas", data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  window.alert(
                    "Drawing saved! Choose the type of artwork you want and submit to order"
                  );
                }}
              >
                Save
              </button>
            </div>
            <div className="d-flex gap-2 align-items-center"></div>
            <hr></hr>
            <h5>Canvas</h5>
            <ReactSketchCanvas
              height="500px"
              ref={canvasRef}
              strokeWidth={strokeWidth}
              eraserWidth={eraserWidth}
              strokeColor={strokeColor}
              canvasColor={canvasColor}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Design() {
  const navigate = useNavigate();
  let requestPath = "/request";

  return (
    <section>
      <Banner />
      <section id="details">
        <Container fluid className="p-4">
          <div className="my-4">
            <h4
              style={{ color: "#424C7F", fontWeight: "bold" }}
              className="mb-3"
            >
              Select Type of Artwork:
            </h4>
            <Form className="d-flex flex-row">
              <Form.Select>
                {productList.map((item, index) => (
                  <option key={index}>{item.title}</option>
                ))}
              </Form.Select>
              <button
                className="btn dark"
                style={{ minWidth: "fit-content" }}
                onClick={() => {
                  if (
                    window.confirm(
                      "Request now? If you leave this page, your drawing will not be saved here so make sure this is the final version."
                    )
                  ) {
                    navigate(requestPath, { state: { prevUrl: "/design" } });
                  }
                }}
              >
                Request Now
              </button>
            </Form>
          </div>
          <div className="my-4">
            <h4 style={{ color: "#424C7F", fontWeight: "bold" }}>
              Create Design:
            </h4>
            <p className="text-muted">
              *note: 'Save' does not save your design on this page, rather it
              saves a png version that will be automatically sent to us when you
              submit a request (i.e. you cannot return here to make changes)
            </p>
            <Canvas />
          </div>
        </Container>
      </section>
    </section>
  );
}

export default Design;
