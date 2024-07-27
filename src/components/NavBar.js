import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; 

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleBarHeight = document.querySelector('.title-bar').offsetHeight;
      if (window.scrollY > titleBarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="title-bar">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
           
            <span className="title-text ms-2">Cropify</span>
          </Link>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg navbar-custom ${isSticky ? 'sticky-top' : ''}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
