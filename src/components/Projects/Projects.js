import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import faceatt from "../../Assets/Projects/faceatt.png";
import autonexus from "../../Assets/Projects/autonexus.png";
import eoAdmin from "../../Assets/Projects/effortlessOps-admin.png";
import eoEmp from "../../Assets/Projects/effortlessOps-employee.png";
import newsWave from "../../Assets/Projects/news-wave.png";



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
              imgPath={faceatt}
              isBlog={false}
              title="Smart Attendance System"
              description="Developed Face Attendance System, an ML model that uses OpenCV-based face recognition. It captures input image, detects face, encodes data and marks attendance in spreadsheet. Generates weekly/monthly attendance reports in graphical format."
              ghLink="https://github.com/swetha-22/Smart-Attendance-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsWave}
              isBlog={false}
              title="News Wave"
              description="Explore the world with our React-based news application powered by the News API. Stay informed with daily updates across diverse categories, ensuring you're always up-to-date with the latest global news trends and developments."
              ghLink="https://github.com/swetha-22/News-Wave"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autonexus}
              isBlog={false}
              title="AutoNexus"
              description="Auto Nexus is a Full Stack Vehicle Care Management System providing a one-stop solution for vehicle management. Features include service, insurance, and pollution check notifications, predictive maintenance alerts, weather condition handling tips, and a comprehensive vehicle parts database."
              ghLink="https://github.com/swetha-22/Auto-nexus"
              // demoLink="""         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eoAdmin}
              isBlog={false}
              title="EffortlessOps-Admin"
              description="EffortlessOps developed using the MERN stack, revolutionizing employee monitoring processes. It is integrated with face-api.js for secure employee monitoring and also include features like payroll management, real-time attendance monitoring via randomized image captures, collaborative suite with calendars, task management, and video calls."
              ghLink="https://github.com/swetha-22/EffortlessOps"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eoEmp}
              isBlog={false}
              title="EffortlessOps-Employee"
              description="EffortlessOps developed using the MERN stack, revolutionizing employee monitoring processes. It is integrated with face-api.js for secure employee monitoring and also include features like payroll management, real-time attendance monitoring via randomized image captures, collaborative suite with calendars, task management, and video calls."
              ghLink="https://github.com/swetha-22/EffortlessOps"
              // demoLink="" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
