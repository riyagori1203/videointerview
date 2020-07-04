import React from 'react'
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap'

export default function Home() {

    const backgroundStyle = {
        backgroundColor: "#39bcf0",
        color: "white",
        boxShadow: "0 2px 20px 0px #3abcf0"
    }

    return (
        <div>
            <Jumbotron style={backgroundStyle} fluid>
                <Container>
                    <h1 className="display-3">VidInterview</h1>
                    <p>
                        Velit fugiat voluptate nostrud nisi labore ut enim. Laborum velit ullamco adipisicing est reprehenderit qui mollit sint laborum nostrud ut est ad esse.
                    </p>
                </Container>
            </Jumbotron>

            <Container>
                <h2>A new way of conducting interviews</h2>
                <p>
                    There will be two phases in your interview. You will be answering some preliminery questions about yourself in Phase 1.
                    In Phase 2, you will be having a video call with your interviewer.
                </p>

                <Row className="mt-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h2>Phase 1</h2></Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quibusdam adipisci modi impedit et optio sint accusantium qui fugiat illum laboriosam blanditiis atque, repellat placeat minus distinctio perferendis tempora. Quisquam.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h2>Phase 2</h2></Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quibusdam adipisci modi impedit et optio sint accusantium qui fugiat illum laboriosam blanditiis atque, repellat placeat minus distinctio perferendis tempora. Quisquam.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
