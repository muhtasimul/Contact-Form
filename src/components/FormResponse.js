import React, {useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { Context } from '../context/Context'
import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';


function FormResponse() {

    const navigate = useNavigate()
    const {
        validated, 
        setValidated, 
        name, 
        email, 
        subject, 
        setSubject,
        description, 
        setDescription
    } = useContext(Context)

   

    useEffect(()=>{
        if (!validated){
            navigate('/')
        }
    })

    return (
        <Container className='p-4 d-flex justify-content-center align-items-center'>
            <Card>
                <Card.Header>MESSAGE SEND SUCCESSFULLY</Card.Header>
                <Card.Body>
                    <Card.Text>{`Hello ${name}, we have successfully received your message. We shall get back to you promptly.`}</Card.Text>
                    <div className='mb-2'>
                        <Card.Text className='messagePreview'>Message Preview:</Card.Text>
                        <Card.Text className='previewStyle'>{`${description}`}</Card.Text>
                    </div>
                    <Button onClick={()=>setValidated(false)} className="my-2" variant="outline-primary">Report Another Concern</Button>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default FormResponse
