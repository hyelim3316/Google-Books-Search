import React from "react";
import Jumbotron from "../components/Jumbotron";
const NotMatch = () => {
  return (
    <>
    <Container fluid>
      <Row fluid>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
            <p>Serach for and Save Books of Interest</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    </>
  );
}
export default NotMatch;