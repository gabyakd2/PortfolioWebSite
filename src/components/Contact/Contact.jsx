import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgForm1 from '../../assets/img/imgForm.png'

function Contact() {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        //phone: '',
        message: ''
    }

    const [ formDetails, setFormDetails ] = useState(formInitialDetails)
    const [ buttonText, setButtonText ] = useState('Enviar')
    const [ status, setStatus ] = useState({})

    function handleFormUpdate (category, value){
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    function handleSubmit (){

    }

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={imgForm1} alt="imagen form" />
                </Col>
                <Col md={6}>
                    <h2>Contactame</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='Nombre' onChange={(e) => handleFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder='Apellido' onChange={(e) => handleFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => handleFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row='6' value={formDetails.message} placeholder='Mensaje' onChange={(e) => handleFormUpdate('message', e.target.value)}></textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? 'danger' : 'success'}>
                                        {status.message}
                                    </p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact