import React,{ useState } from 'react'
import  {Dropdown, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from "./SubNavbar.module.css";


export default function SubNavbar() {

  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleServicesHover = () => {
    setShowServicesMenu(true);
  };

  const handleServicesLeave = () => {
    setShowServicesMenu(false);
  };

  const handleMoreHover = () => {
    setShowMoreMenu(true);
  };

  const handleMoreLeave = () => {
    setShowMoreMenu(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.subNavbar}`}>
    <div className="container-fluid d-flex justify-content-between">
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">

        {/* HOME  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>

        {/* ABOUT */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">About</Link>
        </li>

        {/* SERVICES  */}
        <li className={`nav-item ${styles.navItem}`} onMouseEnter={handleServicesHover}  onMouseLeave={handleServicesLeave}>
                <Dropdown show={showServicesMenu} onMouseEnter={handleServicesHover} onMouseLeave={handleServicesLeave}>
                  <Dropdown.Toggle  id="dropdown-basic" className={`text-secondary border-0 no-arrow-dropdown-toggle ${styles.dropButton}`}>
                    Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`custom-dropdown-menu ${styles.customDropdownMenu}`}>
                    <Dropdown.Item href="#/action-1">Tech Solutions</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Software Sales</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Website Development</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Professional Training</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Tech Support</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cloud & IT Infrastructure</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Web Scraping</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">AI & Data Analytics</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reasearch & Development</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

        {/* SHOP  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">Shop</Link>
        </li>

        {/* BLOGS  */}
        <li className={`nav-item ${styles.navItem}`}  onMouseEnter={handleMoreHover} onMouseLeave={handleMoreLeave}>
                <Dropdown show={showMoreMenu} onMouseEnter={handleMoreHover} onMouseLeave={handleMoreLeave}>
                  <Dropdown.Toggle  id="dropdown-basic" className={`text-secondary border-0 no-arrow-dropdown-toggle ${styles.dropButton}`}>
                    Know More
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`custom-dropdown-menu ${styles.customDropdownMenu}`}>
                    <Dropdown.Item href="#/action-1">Blogs</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Success Stories</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

        {/* CONTACT  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">Contact Us</Link>
        </li>

        {/* REDEEM REWARDS  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">Redeem Rewards</Link>
        </li>

        
        {/* CAREERS  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">Careers</Link>
        </li>

        {/* CART  */}
        <li className={`nav-item ${styles.navItem}`}>
          <Link className="nav-link" aria-current="page" to="#">Cart</Link>
        </li>

        
      </ul>


    </div>
    </div>
  </nav>

  )
}
