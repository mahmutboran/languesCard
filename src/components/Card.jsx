import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Langues from './Langues'
import {data} from "../helpers/data"
import { Col, Row } from 'react-bootstrap'

const Card = () => {
    console.log(data)
    return (
    <Container className='rounded-4 mt-4 p-4' style={{background:"#f48b29"}} >
        <h1 className='text-white my-2' >Langues</h1>
        <Row className='g-3 justify-content-center' >
        {data.map((lang,index)=>{ 
            return (
            <Col sm={6} md={4} lg={3} key={index}>
                <Langues {...lang} />
            </Col>
            );
        })}
        </Row>
       
    </Container>
  )
}

export default Card