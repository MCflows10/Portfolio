import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Click from "../../Assets/Projects/Clickgame.png";
import HTML from "../../Assets/Projects/HTML.png";
import parallax from "../../Assets/Projects/parallax.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HTML}
              
              title="5+ Web Development"
              description="I have created 5+ Web Application that are simple and it can be used to learn web development in a Practical ways."
              ghLink="https://github.com/parimalarangan/Web-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Click}
              
              title="Click The Button Game"
              description="Online game where we can Spend a Little time So That You Can Relax and Enjoy"
              ghLink="https://github.com/parimalarangan/Click-Button-Game"
              demoLink="https://parimalarangan.github.io/Click-Button-Game/click.html"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallax}
              
              title="Parallax-Website"
              description="I created a Website That can have multiple images in a Web And it Changes as you scroll."
              ghLink="https://github.com/parimalarangan/Parallax-Website-Expressjs"
                 
            />
          </Col>


         

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
