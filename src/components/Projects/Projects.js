import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import booki from "../../Assets/Projects/booki.png";
import ninacarducci from "../../Assets/Projects/ninacarducci.png";
import sophiebluel from "../../Assets/Projects/sophiebluel.png";
import kasa from "../../Assets/Projects/kasa.png";
import monvieuxgrimoire from "../../Assets/Projects/monvieuxgrimoire.png";

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
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Creation of the home page of a travel agency. This project aims to integrate in HTML/ CSS, the mock-up of the home page of the fictitious agency Booki. I carried out this project, used the agile methodology via the Jira tool."
              ghLink="https://github.com/OnixTakeSama/OC-Booki"
              demoLink="https://onixtakesama.github.io/OC-Booki/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophiebluel}
              isBlog={false}
              title="Sophie Bluel Portfolio"
              description="Creation of a dynamic portfolio website for a fictitious interior designer. The goal was to create a dynamic website that would allow the user to add, modify and delete projects."
              ghLink="https://github.com/OnixTakeSama/OC-Portfolio-Sophie-Bluel-P3"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninacarducci}
              isBlog={false}
              title="Nina Carducci Portfolio"
              description="Optimization of a portfolio website for a fictitious photograph. The goal was to optimize the website to make it more accessible, reduce load times and improve the SEO. I used Lighthouse to audit the website and then implemented the necessary changes."
              ghLink="https://github.com/OnixTakeSama/OC-Debugger-Optimiser-P5"
              demoLink="https://onixtakesama.github.io/OC-Debugger-Optimiser-P5/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Creation of the website of a fictitious real estate agency. The goal was to implement the front-end of a website that would allow the user to search for properties and view the details of each property. I used React and SASS to create the website."
              ghLink="https://github.com/OnixTakeSama/OC-Kasa-P6"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monvieuxgrimoire}
              isBlog={false}
              title="Mon Vieux Grimoire"
              description="Development of the back-end of a book rating website. The goal was to create a REST API that would allow users to rate, add, modify and delete books. I used Node.js and Express to create the API and MongoDB to store the data."
              ghLink="https://github.com/OnixTakeSama/OC-Mon-Vieux-Grimoire-P7/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
