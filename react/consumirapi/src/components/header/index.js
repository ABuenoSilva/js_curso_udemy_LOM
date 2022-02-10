import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from './styled';

function NavPath(e, path) {
  const navigate = useNavigate();
  e.preventDefault();
  navigate(path);
}

function Header() {
  return (
    <Nav>
      <Link to="/" onClick={(e) => NavPath(e, '/')}>
        <FaHome size={24} />
      </Link>
      <Link to="/register" onClick={(e) => NavPath(e, 'register')}>
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login" onClick={(e) => NavPath(e, 'login')}>
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}

export default Header;
