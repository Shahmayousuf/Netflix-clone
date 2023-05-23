import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
const Login = () => {
  return (
    <div className="banner">
      <div className="form">
        <h2 className="head">Login</h2>
        <Form className="form-items">
          <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
            <Form.Label className="formlabel">Email address</Form.Label>
            <Form.Control
              style={{ backgroundColor: "rgba(159, 158, 158, 0.112)" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group  className="formGroup mb-5" controlId="formBasicEmail">
            <Form.Label  className="formlabel">Password</Form.Label>
            <Form.Control
              style={{ backgroundColor: "rgba(159, 158, 158, 0.112)" }}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button className="loginBtn btn-danger mb-4">Log In</Button>
          <div className="text">
       
            <p> need help?</p>
          </div>
          <div className="sugnup">
            <p>
              New Here? <a href="#">SignUp</a>{" "}
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
