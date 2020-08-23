import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';


const Updatecourse=()=>{
    return (
        <Fragment>
        <h1 className="text-center my-3">fill course detail</h1>
        <Form>
        <FormGroup>
        <lebel for="userId">CourseId</lebel>
        <Input type="text" placeholder="Enter here" name="userId" id="userId"/>
        </FormGroup>
        <FormGroup>
        <lebel for="title">CourseId</lebel>
        <Input type="text" placeholder="Enter title" name="title" id="title"/>
        </FormGroup>
        <FormGroup>
        <lebel for="description">course description</lebel>
        <Input type="text" placeholder="Enter description here" name="description" id="description"/>
        </FormGroup>
        <Container className="text-center">
        <Button color='success'>update course</Button>
        <Button color="warning">clear</Button>
        </Container>
        </Form>
        </Fragment>
    )
}
export default Updatecourse;