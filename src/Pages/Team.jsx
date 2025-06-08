// import React from 'react';
// import sushmitaa from '../assets/sushmitaa.JPG'
// import suman from '../assets/suman.JPG'
// import pembahero from '../assets/pembahero.JPG'
// const members = [
//   {
//     name: 'Sushmita Magar',
//     role: 'Designer',
//     image: sushmitaa,
//   },
//   {
//     name: 'Pemba Norbu Sherpa',
//     role: ' Front Developer',
//     image: pembahero,
//   },
//   {
//     name: 'Suman katuwal',
//     role: 'Front Developer',
//     image: suman,
//   },
//   {
//     name: 'Binayak kafle',
//     role: 'Back Developer',
//     image:  suman,
//   },
// ];

// const Team = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="fw-bold mb-4" style={{ color: '#2f4f4f' }}>
//         Members
//       </h2>
//       <div className="row gy-4">
//         {members.map((member, index) => (
//           <div key={index} className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
//             <div
//               className="card text-center shadow-sm"
//               style={{ borderRadius: '15px', width: '180px' }}
//             >
//               <div className="card-body">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="rounded-circle mb-3"
//                   style={{ width: '80px', height: '80px', objectFit: 'cover' }}
//                 />
//                 <h5 className="card-title mb-1 fw-bold">{member.name}</h5>
//                 <p className="card-text text-muted mb-0">{member.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;
















import React, { useState, useEffect } from "react";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("image", image);

    fetch("", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers((prev) => [...prev, data]);
        setName("");
        setRole("");
        setImage(null);
        alert("Team member added!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Team Members</h2>

      <form onSubmit={handleSubmit} className="mb-5 mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add Member
        </button>
      </form>

      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="card shadow-sm text-center" style={{ borderRadius: "12px", padding: "10px" }}>
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "10px auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
