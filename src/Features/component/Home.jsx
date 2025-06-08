import React from "react";
import zenoreboot from '../../assets/zenoreboot.png';
import suman from '../../assets/suman.JPG';
import pembahero from '../../assets/pembahero.JPG';
import sushmitaa from '../../assets/sushmitaa.JPG';
import { Container, Button, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const users = [
  { img: suman, style: { top: "80%", left: "15%" } },
  { img: pembahero, style: { top: "30%", left: "5%" } },
  { img: sushmitaa, style: { top: "10%", right: "5%" } },
  { img: suman, style: { top: "50%", right: "15%" } },
];

const Home = () => {
  return (
    <div className="landing-page position-relative" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      
      <Nav className="position-fixed top-0 start-0 end-0 bg-white shadow-sm justify-content-end p-3 z-3">
        <Nav.Item className="me-auto ms-3 fs-4 fw-bold text-success">
          <img src={zenoreboot} alt="Logo" style={{ width: "120px" }} />
        </Nav.Item>

        <Link to="/" className="mx-4 fs-5 text-dark text-decoration-none">Home</Link>
        {/* <a href="#features" className="mx-4 fs-5 text-dark text-decoration-none">Features</a>
        <a href="#contact" className="mx-4 fs-5 text-dark text-decoration-none">Contact</a> */}
                {/* <ScrollLink to="home" smooth={true} duration={500} className="mx-4 fs-5 text-dark text-decoration-none" offset={-70}>
              Home
        </ScrollLink> */}
        <ScrollLink to="features" smooth={true} duration={500} className="mx-4 fs-5 text-dark text-decoration-none " offset={-70} style={{ cursor: 'pointer' }}
>
              Features
        </ScrollLink>

         <ScrollLink to="contact" smooth={true} duration={500} className="mx-4 fs-5 text-dark text-decoration-none" offset={-70} style={{ cursor: 'pointer' }}
>
                  Contact
          </ScrollLink>

        <Link to="/login" className="mx-4  fs-5  text-dark text-decoration-none">Login</Link>
        <Link to="/register" className="mx-4  fs-5 ">
          <Button variant="dark">Register</Button>
        </Link>
      </Nav>

      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{ height: "100vh", paddingTop: "100px" }}
      >
        {users.map((user, index) => (
          <img
            key={index}
            src={user.img}
            alt={`User ${index}`}
            style={{
              ...user.style,
              position: "absolute",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "4px solid white",
              objectFit: "cover",
            }}
          />
        ))}

        <div className="text-center">
          <h2 className="fw-bold fs-3">
            “Your Tasks. One Place.
            <br />
            Zero Hassle.”
          </h2>
          <Button variant="dark" className="mt-4 px-4 py-2">
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
