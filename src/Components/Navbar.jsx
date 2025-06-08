import React from 'react';
import zenoreboot from "../assets/zenoreboot.png";
import pembahero from '../assets/pembahero.JPG';
import { FaBell, FaSearch } from 'react-icons/fa';

const Navbar = () => {

//       const [user, setUser] = useState({ name: '', email: '' });

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

  return (
    <nav className="navbar py-3 px-4 bg-light d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img src={zenoreboot} alt="Zeno Logo" style={{ width: '160px', height: 'auto' }} />
      </div>
      
      <div className="flex-grow-1 mx-4">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <span className="input-group-text bg-transparent border-secondary">
            <FaSearch className="text-secondary" />
          </span>
          <input
            type="text"
            className="form-control border-secondary"
            placeholder="Search"
            style={{ fontSize: '1rem', fontWeight: '500' }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center">
        <FaBell className="fs-4 me-4 text-secondary" style={{ cursor: 'pointer' }} />

        <div className="d-flex align-items-center">
          <img
            src={pembahero}
            alt="User"
            className="rounded-circle me-2"
            style={{ width: '50px', height: '50px', objectFit: 'cover', border: '1px solid #ccc', padding: '2px' }}
          />
          <div className="text-start">
            <div className="fw-bold text-dark">Pemba Sherpa</div> 
            {/* {user.name} */}
            <div className="text-muted" style={{ fontSize: '0.9rem' }}>Pemba@gmail.com</div>
            {/* {user.email} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
