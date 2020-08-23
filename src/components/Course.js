import React from 'react';

import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
  } from 'reactstrap';
  const Course = ({course}) => {
    return (
      <div >

        <Card>
          <CardBody>
            <CardTitle>{course.title}</CardTitle>
            <CardSubtitle className="font-weight-bold">
            RS.4000 only</CardSubtitle>
            <CardText>{course.description}</CardText>
            
            <Button color="primary">join</Button>
            <Button color="danger" className="ml-1">add to cart</Button>
            
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Course;