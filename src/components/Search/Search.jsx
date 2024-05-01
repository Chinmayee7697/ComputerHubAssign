import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./Search.module.css";
export default function Search() {
  return (

    <div className="d-flex mw-100"> 
            <Form className={`d-flex ${styles.customSearch}`}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-dark" className={`ms-1 ${styles.searchIcon}`}><FontAwesomeIcon icon={faSearch} /></Button>
            </Form>
            </div>
  )
}
