import React, { useState } from 'react';

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { username, email, profilePicture });
      alert('Settings saved successfully');
    }



//   if (Object.keys(newErrors).length === 0) {
//     try {
//       const formData = new FormData();
//       formData.append('username', username);
//       formData.append('email', email);
//       if (profilePicture) {
//         formData.append('profilePicture', profilePicture);
//       }

//       const response = await fetch('', {
//         method: 'POST', 
//         body: formData
//       });

//       if (response.ok) {
//         alert('Settings saved successfully!');
//         console.log('Form submitted:', { username, email, profilePicture });
//       } else {
//         alert('Failed to save settings');
//       }
//     } catch (error) {
//       console.error('Error saving settings:', error);
//       alert('An error occurred');
//     }
//   }

  };


  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="bg-white p-4 rounded shadow-sm"
        style={{
          width: '100%',
          maxWidth: '450px',
          minHeight: '450px'
        }}
      >
        <h2
          className="fw-bold mb-5 text-center"
          style={{ color: '#004d40' }}
        >
          Settings
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              type="text"
              className={`form-control bg-secondary bg-opacity-25 fw-bold py-2 ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Change Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              className={`form-control bg-secondary bg-opacity-25 fw-bold py-2 ${
                errors.email ? 'is-invalid' : ''
              }`}
              placeholder="Change Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-5">
            <input
              type="file"
              className="form-control bg-secondary bg-opacity-25 fw-bold py-2"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="btn text-white fw-bold w-100 py-2"
            style={{ backgroundColor: '#004d40', borderColor: '#004d40' }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
