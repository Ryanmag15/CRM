import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import loginApi from "../services/login";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const initialInput = {
  name: "",
  password: "",
};

const Login = () => {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi(input)
      .then((res) => {
        dispatch(changeUser(res.data.name));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs="auto">
          <h2>Login</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={10} lg="3">
          <form onSubmit={handleSubmit}>
            <Row>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={input.name}
                onChange={handleInputChange}
              />
            </Row>
            <Row className="mt-2">
              <Form.Label>password</Form.Label>
              <Form.Control
                name="password"
                type="Password"
                value={input.password}
                onChange={handleInputChange}
              />
            </Row>
            <Row className="mt-2">
              <Button type="submit" variant="primary">
                Login
              </Button>
            </Row>
            <Row className="text-center mt-2">
              <p>
                Esqueceu sua password <Link to={"/"}>Recuperar password</Link>
              </p>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
