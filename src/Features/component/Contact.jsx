import React, { useState } from 'react';
import zenoreboot from '../../assets/zenoreboot.png';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sending message:", { email, username, message });
      alert("Message sent successfully!");
      // api call yeta

      setEmail("");
      setUsername("");
      setMessage("");
    }
  };

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         setSubmitStatus("Sending...");

//         const response = await fetch('', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email,
//             username,
//             message,
//           }),
//         });

//         if (response.ok) {
//           setSubmitStatus("Message sent successfully!");
//           setEmail("");
//           setUsername("");
//           setMessage("");
//           setErrors({});
//         } else {
//           setSubmitStatus("Failed to send message. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error sending message:", error);
//         setSubmitStatus("An error occurred. Please try again.");
//       }
//     } else {
//       setSubmitStatus(""); 
//     }
//   };

  return (
    <div className="Contact">

      <section className="py-5 text-center bg-light" id="contact">
        <div className="container">
          <h2 className="mb-3 fw-bold fs-3">“Need Help or Have Questions?”</h2>
          <p className="mb-5 fs-5">We’re here to help — reach out anytime.</p>

          <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control bg-secondary bg-opacity-25 fs-5 py-2 ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback d-block" style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}>
                {errors.email || "\u00A0"}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control bg-secondary bg-opacity-25 fs-5 py-2 ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="invalid-feedback d-block" style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}>
                {errors.username || "\u00A0"}
              </div>
            </div>
            <div className="mb-3">
              <textarea
                rows="4"
                className={`form-control bg-secondary bg-opacity-25 fs-5 py-2 ${errors.message ? 'is-invalid' : ''}`}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="invalid-feedback d-block" style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}>
                {errors.message || "\u00A0"}
              </div>
            </div>
            <button type="submit" className="btn btn-dark w-100 fs-5 py-2">Send Message</button>
          </form>
        </div>
      </section>

      <section className="py-5 text-center bg-dark text-white">
        <div className="container">
          <div className="mb-5">
            <button className="btn btn-outline-light px-5 py-3 fs-4 fw-bold">Discover the full scale of Zeno capabilities</button>
          </div>

          <div className="row text-center align-items-center gy-4">
            <div className="col-12 col-md-3">
              <img src={zenoreboot} alt="Zeno Logo" className="img-fluid mb-2" />
            </div>

            <div className="col-12 col-md-3 text-start d-flex flex-column align-items-center fs-5">
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-2 fs-3" />
                <span>zeno112@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-2 fs-3" />
                <span>+01 22339812</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaInstagram className="me-2 fs-3" />
                <span>zeno09</span>
              </div>
            </div>

            <div className="col-12 col-md-3 text-start d-flex flex-column align-items-center fs-5">
              <div className="d-flex align-items-center mb-3">
                <FaLinkedin className="me-2 fs-3" />
                <span>zenotecch</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaTwitter className="me-2 fs-3" />
                <span>@zenotecch0</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaFacebook className="me-2 fs-3" />
                <span>Zeno_tech</span>
              </div>
            </div>
          </div>

          <div className="mt-5 fs-4">
            © 2025 Zeno. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
