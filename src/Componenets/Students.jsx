// import { Button } from 'bootstrap';
import { Modal } from 'react-bootstrap';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Students = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="shadow my-5">
                        <Card.Body>
                            <Card.Img src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="shadow my-5">
                    <Card.Body>
                        <h2>Heelo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti nihil iusto eos mollitia</p>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>

        <Modal show={ true }>
            <Modal.Header>Hello</Modal.Header>
            <Modal.Body>lorem5 
            </Modal.Body>
            <Modal.Footer>dsfds</Modal.Footer>
         </Modal>
    </>
  )
};

export default Students;