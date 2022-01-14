import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const Home = () => (
    <Container>
        <Form>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Form.Label>
                        Enter airport/airline code
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="e.g. SIN, SQ"
                    />
                </Col>
            </Row>
            <div style={{ 'text-align': 'center' }}>
                <Row className="justify-content-center">
                    <Col>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Row>
            </div>

        </Form>
    </Container >
)

export default Home