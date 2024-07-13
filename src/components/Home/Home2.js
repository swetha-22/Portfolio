import React from "react";
import '../../style.css'
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/female-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { CiMemoPad } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a dedicated <b className="purple"> Salesforce Developer/CRM Customization Specialist and Full stack developer </b> with over two and half years of experience in the industry. 
              <br />
              <br />
              I am currently pursuing  Master's in <b className="purple"> Computer Science </b> at Texas A&M University-Commerce.
              <br />
              <br />
              Throughout my career, I have honed my skills in designing and implementing scalable 
              <b className="purple"> Salesforce solutions </b> that improve system performance and operational efficiency. 
              <br />
              <br />
              My technical expertise includes 
                <b className="purple"> Salesforce Administration, </b>
                <b style={{color:"#e996e9"}}> Customization, </b>
                <b className="purple"> Apex, </b>
                <b style={{color:"#e996e9"}}> Visualforce, </b>
                <b className="purple"> Lightning Components and </b>
                <b style={{color:"#e996e9"}}> Salesforce Velocity Omnistudio </b>
              components. I am also a certified Salesforce Platform Developer I and Vlocity Developer
              <br />
              <br />
              I have a strong background in full-stack web development, particularly with the MERN stack <b className="purple">(MongoDB, Express.js, React.js, Node.js) </b>.
              <br />
              <br />
              I have contributed to projects such as 
                <br />
                &ensp; &ensp; &ensp; <CiMemoPad/><b className="purple">  SmartPad, </b>
                <span style={{color:"rgb(237 204 237)"}}> a user-friendly text editor, </span>
                <br />
                &ensp; &ensp; &ensp; <IoNewspaperOutline/><b className="purple"> NewsWave, </b>
                <span style={{color:"rgb(237 204 237)"}}> a dynamic news aggregation application, </span>
                <br />
                &ensp; &ensp; &ensp; <FaCar/><b className="purple"> Autonexus, </b>
                <span style={{color:"rgb(237 204 237)"}}> a smart vehicle care ,management system </span>
                <br />
              all of which have enhanced user engagement and operational efficiency.
              <br />
              <br />
              I am passionate about continuous improvement and am always seeking to expand my knowledge.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{marginTop:"150px", width:"500px", marginLeft:'50px'}} />
            </Tilt>
          </Col>
        </Row>
        <Row style={{marginBottom:"-60px", marginTop:"-10px"}}>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/swetha-22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/swetha-paspunuri-955739169/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swetha_paspunuri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons mail-icon" >
                <div style={{display:"flex"}}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillMail />
                    </a>
                    <p className="gmail">swetha.p2k@gmail.com</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
