import React from 'react'
import {Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
export default function Header(props) {
    return (
        <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">{props.tittle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About</Nav.Link>
    
    </Nav>
    {props.SearchBar?<Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>:""}
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
Header.defaultProps ={
  title : "your tittle here",
  SearchBar: false
}
Header.propTypes = {
    Title : PropTypes.string,
    SearchBar:PropTypes.bool
}