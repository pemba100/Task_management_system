import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

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
      console.log("Logging in with", email, password);
      // login logic yetaaa
    }


  //   if (Object.keys(newErrors).length === 0) {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //           password: password,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Invalid email or password");
  //       }

  //       const data = await response.json();
  //       console.log("Login successful:", data);

  //       localStorage.setItem("authToken", data.token);
  //       localStorage.setItem("user", JSON.stringify(data.user));

  //       navigate("/Dashboard");
  //     } catch (error) {
  //       console.error("Error during login:", error);
  //       alert(error.message || "Something went wrong during login.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };


  };

  return (
    <form onSubmit={handleLogin} className="d-flex flex-column gap-2">

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

      <div className="text-end">
        <Link to="/Forgotpassword" className="text-muted text-decoration-none">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="btn btn-success w-100"
      >
        Sign in
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
        Don't have an account?{" "}
        <Link to="/register" className="text-primary">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
