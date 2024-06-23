import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swetha Paspunuri </span>
            <br />
            I am currently pursuing Masters in <span className="purple"> Computer Science and Informatio Technology </span> at Texas A&M university.
            <br />
            I have 2.5 years of experience in <span className="purple"> Saleforce development </span> and excel in designing and implementing tailored <span className="purple"> CRM </span> solutions.
            <br />
            <br />
            Besides coding, I have a passion for other activities that I truly enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focused on creating change through innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Swetha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
