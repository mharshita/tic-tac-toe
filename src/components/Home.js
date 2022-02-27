import React from "react";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <Container className="p-5">
      <h1 className="heading">Tic Tac Toe</h1>
      <a
        href="/game"
        className="button button-elevated-long icon"
        style={{ margin: "auto" }}
      >
        Play with a Bot
      </a>
      <br />
      <br />
      <a
        href="/game"
        className="button button-elevated-long icon"
        style={{ margin: "auto" }}
      >
        Play with a Friend
      </a>
    </Container>
  );
};

export default Home;
