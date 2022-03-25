import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios'


import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';


function FormEnquiry() {

    const navigate = useNavigate()
    const {
        validated, 
        setValidated, 
        name, 
        setName, 
        email, 
        setEmail,
        subject, 
        setSubject,
        description, 
        setDescription
    } = useContext(Context)

    const handleSubmit = async(event)=>{
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false){
            event.stopPropagation()
        }else{
            setValidated(true)
            axios.post(process.env.REACT_APP_SEND_ENQUIRY,{
                name,
                email,
                subject,
                description
            }).then(res=> console.log(res.data))
        }

       
    }

    useEffect(()=>{
        if (validated){
            axios.get(process.env.REACT_APP_GET_ENQUIRY).then(res=> console.log(res.data))
            navigate('/FormResponse')
        }
    })
    
    return (
        <Container className='p-4 d-flex justify-content-center align-items-center'>
            <Card>
                <Card.Header>
                    Contact Form
                </Card.Header>
                <Card.Body >
                <Form 
                    noValidate 
                    validated={validated} 
                    onSubmit={handleSubmit}
                    className='p-3'>
                    <Row>
                        <Form.Group as={Col} md="4"
                            controlId='name'
                            className='m-3'
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Name'
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4"
                            controlId='email'
                            className='m-3'
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='example@example.com'
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4"
                            controlId='subject'
                            className="m-3"
                            
                        >
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='E.g. Internet not working'
                                onChange={(e)=>setSubject(e.target.value)}
                                value={subject}
                            /> 
                            <Form.Control.Feedback type="invalid">
                                Required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group 
                            as={Col} 
                            md="4"
                            lg="12"
                            controlId='description'
                            className='m-3'
                        >
                            <Form.Label>Description of the Problem</Form.Label>
                            <Form.Control
                                required
                                as='textarea'
                                placeholder='Please give a description of the issue'
                                onChange={(e)=>setDescription(e.target.value)}
                                value={description}
                                maxLength="200"
                            />
                            <Form.Control.Feedback type="invalid">
                                Required
                            </Form.Control.Feedback>
                        </Form.Group>
                    
                    </Row>
            
                <Button className='m-3' type="submit">Submit Form</Button>
            </Form>
                </Card.Body>
            </Card>
           
        </Container>
    )
}

export default FormEnquiry
