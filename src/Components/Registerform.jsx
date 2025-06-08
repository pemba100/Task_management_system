import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Registerform = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Signing up with", username, email, password);
      alert("Registration successful!");
      // API call  yesmaaaaa
    }
  };




  //       if (Object.keys(newErrors).length === 0) {
  //     try {
  //       setLoading(true); 
  //       const response = await fetch("", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: username,
  //           email: email,
  //           password: password,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to register user");
  //       }

  //       const data = await response.json();
  //       console.log("Registration successful:", data);

  //       alert("Registration successful!");
  //       setUsername("");
  //       setEmail("");
  //       setPassword("");
  //     } catch (error) {
  //       console.error("Error during registration:", error);
  //       alert("Something went wrong during registration.");
  //     } finally {
  //       setLoading(false); 
  //     }
  //   }
  // };

  
  return (
    <form onSubmit={handleSignup} className="d-flex flex-column gap-2">

      <div>
        <input
          type="text"
          placeholder="Enter your username"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div
          className="invalid-feedback d-block"
          style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}
        >
          {errors.username || "\u00A0"}
        </div>
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter your email address"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="invalid-feedback d-block"
          style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}
        >
          {errors.email || "\u00A0"}
        </div>
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter your password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className="invalid-feedback d-block"
          style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}
        >
          {errors.password || "\u00A0"}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-success w-100"
      >
        Sign up
      </button>

      <div className="d-flex align-items-center my-1">
        <hr className="flex-grow-1" />
        <span className="mx-3 text-muted">or</span>
        <hr className="flex-grow-1" />
      </div>

      <button
        type="button"
        className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-1 w-100"
      >
        <FaGoogle />
        <span>Sign in with Google</span>
      </button>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default Registerform;
