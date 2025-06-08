import React, { useState } from "react";

const Forgotpasswordform = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleReset = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Resetting password for", email, "with new password:", newPassword);
      alert("Password reset successful!");
      // Call API yetaa
    }
  };

// if (Object.keys(newErrors).length === 0) {
//   fetch('https://yourapi.com/reset-password', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//       newPassword: newPassword,
//     }),
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to reset password');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Password reset success:', data);
//       alert('Password reset successful!');
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Failed to reset password. Please try again.');
//     });
// }


  return (
    <form onSubmit={handleReset} className="d-flex flex-column gap-2">

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
          placeholder="Enter your new password"
          className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <div
          className="invalid-feedback d-block"
          style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}
        >
          {errors.newPassword || "\u00A0"}
        </div>
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm your new password"
          className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div
          className="invalid-feedback d-block"
          style={{ minHeight: "0.8rem", fontSize: "0.875rem" }}
        >
          {errors.confirmPassword || "\u00A0"}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-success w-100"
      >
        Reset Password
      </button>
    </form>
  );
};

export default Forgotpasswordform;
