import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import proj1 from "../1.png";
import proj2 from "../2.png";
import proj3 from "../3.png";



function projects() {
    return (
        <div>
            <br></br>
            <h1 id="Projects"> My Projects</h1>
            <br></br>
    <Container>
        <Row>
          <Col className="Projecting" xs>Work Day Scheduler Project</Col>
            <img id="proj1" src={proj1} />

          <Col className="Projecting" xs={{ order: 12 }}>SunShine Health and Wellness Center, </Col>
          <img id="proj2" src={proj2} />

          <Col className="Projecting" xs={{ order: 12 }}>Piano Plugin</Col>
          <img id="proj3" src={proj3} />

        </Row>
      </Container>
        </div>

    );
  }

  export default projects;
