import React, { useState, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";

//firebase
import app from '../src/config/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import AuthContext from "../src/context/AuthContext";         

import Router from "next/router";
import {toast} from "react-toastify";

const Login = () => {

  const Context = useContext(AuthContext);        // we use created Context and not context state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

    const auth = getAuth(app);               //In new syntax app from Initialized Firebase must be provided
    
    signInWithEmailAndPassword(auth, email, password)        //for logging in, this method of firebase is used
      .then(res => {                //callback from firebase
        console.log(res);
        Context.setUser({ email: res.user.email, uid: res.user.uid });
        //user authenticated in all pages, using context api
      })
      .catch(error => {
        console.log(error);
        toast(error.message, {
          type: "error"
        });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();       //prevent default submission of form
    handleSignUp();
  };

  if(Context.user?.uid){      //user already authenticated
    Router.push("/dashboard");
  }

  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="text-black bg-warning blockquote">Login here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label  className="text-black" for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label  className="text-black" for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="dark">
                  Login
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;