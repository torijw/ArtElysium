import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { questions } from "./Questions";
import FormItem from "./FormItem";
import "./forms.css";
import { GetCountries, GetState } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function CommDetails({ updateAnswers, stepAnswers }) {
  return (
    <Form.Group className="px-5 d-flex flex-wrap">
      {questions[0].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={stepAnswers[1] ? stepAnswers[1][item.value] : null}
          />
        );
      })}
    </Form.Group>
  );
}

function PersonalInfo({ updateAnswers, stepAnswers }) {
  const [countryId, setCountryId] = useState(
    stepAnswers[2] ? stepAnswers[2]["country"] : null
  );
  const [stateId, setStateId] = useState(
    stepAnswers[2] ? stepAnswers[2]["state"] : null
  );
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState(
    stepAnswers[2]["stateList"] ? stepAnswers[2]["stateList"] : []
  );

  useEffect(() => {
    GetCountries().then((result) => {
      setCountryList(result);
    });
  }, []);

  return (
    <Form.Group className="px-5 d-flex flex-wrap">
      {questions[1].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={stepAnswers[2] ? stepAnswers[2][item.value] : null}
          />
        );
      })}
      <div className="form-item">
        <Form.Label>Country</Form.Label>
        <Form.Select
          aria-label="country-select"
          onChange={(e) => {
            updateAnswers(e.target.value, "country");
            const country = countryList[e.target.value];
            setCountryId(e.target.value);
            GetState(country.id).then((result) => {
              setStateList(result);
            });
          }}
          value={countryId}
          required
        >
          <option></option>
          {countryList.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className="form-item">
        <Form.Label>State</Form.Label>
        <Form.Select
          aria-label="state-select"
          onChange={(e) => {
            updateAnswers(e.target.value, "state");
            setStateId(e.target.value);
          }}
          value={stateId}
        >
          <option></option>
          {stateList.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      </div>
    </Form.Group>
  );
}

function PaymentInfo({ updateAnswers, stepAnswers }) {
  return (
    <Form.Group className="px-5 d-flex flex-wrap">
      {questions[2].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={stepAnswers[3] ? stepAnswers[3][item.value] : null}
          />
        );
      })}
    </Form.Group>
  );
}

function FormPages({ step, onStepUpdate, stepAnswers }) {
  const [answers, setAnswers] = useState(stepAnswers[step]);

  useEffect(() => {
    onStepUpdate(answers.index, answers);
    setAnswers(stepAnswers[step]);
  }, [step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
    if (category === "country") {
      GetState(parseInt(value) + 1).then((result) => {
        setAnswers({ ...answers, [category]: value, stateList: result });
      });
    }
  };

  switch (step) {
    case 1:
      return (
        <CommDetails updateAnswers={updateAnswers} stepAnswers={stepAnswers} />
      );
    case 2:
      return (
        <PersonalInfo updateAnswers={updateAnswers} stepAnswers={stepAnswers} />
      );
    case 3:
      return (
        <PaymentInfo updateAnswers={updateAnswers} stepAnswers={stepAnswers} />
      );
    default:
      return (
        <CommDetails updateAnswers={updateAnswers} stepAnswers={stepAnswers} />
      );
  }
}

export default FormPages;
