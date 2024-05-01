import React from 'react'
import {Link} from 'react-router-dom';
import  { Button} from 'react-bootstrap';
import Search from '../Search/Search';
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   

   <Search />

    <div className="d-flex"> 

            {/* LOGIN  */}
            <Button variant="outline" className={styles.login}>
            <Link to="/login" className={styles.navLink}>
            <FontAwesomeIcon icon={faUser} style={{color: "#212529",}} className='me-2'/>Login
            </Link>
            </Button>

            <div className="ms-2"></div> {/* Added space between buttons */}

            {/* SIGNUP  */}
            <Button variant="outline-dark" className={styles.signup}>
           <Link to="/createuser" className={styles.navLink}>
            SignUp
            </Link>
            </Button>
          </div>
  </div>
</nav>
    </div>
  )
}
