import React from 'react';
import {ListGroup, } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu=()=>{
    return (
        <ListGroup>
        <Link className="list-grop-item list-group-item-action" tag="a" to="/" action >home</Link>
        <Link className="list-grop-item list-group-item-action" tag="a" to="/add-course" action >add course</Link>
        <Link className="list-grop-item list-group-item-action" tag="a" to="/view-course" action >view course</Link>
        <Link className="list-grop-item list-group-item-action" tag="a" to="/aboutus" action >aboutus</Link>
        <Link className="list-grop-item list-group-item-action" tag="a" to="/contactus" action >contactus</Link>
      </ListGroup>
        
        
        

    )

}
export default Menu;