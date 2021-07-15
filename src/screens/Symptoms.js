import React from "react";
import { Form, Button } from "react-bootstrap";
import fetchPrev from "../utils/fetchPrev";
import { useHistory } from "react-router-dom";
import styles from "../styles/travel.module.css";
const Symptoms = ({ history }) => {
  const { goBack } = useHistory();
  const [data, setData] = React.useState({});
  const [isSymptoms, setIsSymptoms] = React.useState(false);
  const [symptoms, setSymptoms] = React.useState({
    cough: false,
    drycough: false,
    tiredness: false,
    over60: false,
    healthworker: false,
    none: false,
  });

  React.useEffect(() => {
    setData(fetchPrev());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem("covid", JSON.stringify({ ...data, ...symptoms }));
  };

  const handleNext = (next) => {
    handleSubmit();

    history.push(`/${next}`);
  };

  const handlePrev = () => {
    handleSubmit();
    goBack();
  };
  return (
    <div>
      <Form>
        Showing any symptoms?
        <Form.Group>
          <label htmlFor="yes" className="py-2 mb-1 mr-2">
            Yes
          </label>
          <Form.Check
            type="radio"
            name="contact"
            className="mr-2"
            value={true}
            onChange={() => setIsSymptoms(true)}
            required
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="no" className="py-2 mb-1 mr-2">
            No
          </label>
          <Form.Check
            type="radio"
            name="contact"
            value={false}
            onChange={() => setIsSymptoms(false)}
            required
          />
        </Form.Group>
        {isSymptoms && (
          <div className="symptoms-wrapper">
            <h1>Select all that apply</h1>
            <Form.Group>
              <Form.Check
                type="radio"
                name="over60"
                label="Age >= 60"
                value={true}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                name="fever"
                label="Fever"
                value={true}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                name="cough"
                label="Cough"
                value={true}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                name="tiredness"
                label="Tiredness"
                value={true}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
        )}
        <div className={styles.buttons}>
          <Button className="mr-4 next" onClick={handlePrev}>
            Previous
          </Button>
          <Button className="next" onClick={() => handleNext("symptoms")}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Symptoms;
