import React, { useState, useContext } from "react";
import Router from "next/router";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../src/components/userCard";
import Repos from "../src/components/userRepos";
import AuthContext from "../src/context/AuthContext";
import { toast } from "react-toastify";

const Dashboard = () => {

  const Context = useContext(AuthContext);

  //PUt Anypage behind login

  if (!Context.user?.uid) {
    typeof window !== 'undefined' && Router.push("/login");
  }

  const [query, setQuery] = useState("");                //state for searched name
  const [gitUser, setGitUser] = useState(null);                //state for found git user 

  const fetchDetails = async () => {
    try {                                                //wrap your fetch calls in a try-catch block 
      const response = await fetch(`https://api.github.com/users/${query}`);       
      const data = await response.json();
      data.id ? setGitUser(data) : toast("Not able to locate user", { type: "error" });      //catch method not working for github API when user not found 
      console.log({ data });
    } catch (err) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="GitHub Username"
            />
            {/* <InputGroupAddon addonType="append"> */}
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            {/* </InputGroupAddon> */}
          </InputGroup>
          {gitUser ? <UserCard gitUser={gitUser} /> : null}
        </Col>
        <Col md="7">{gitUser ? <Repos repos_url={gitUser.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
