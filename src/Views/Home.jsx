import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Container>
                <h1>Home Page</h1>
                <ButtonGroup>
                {
                    [
                        'primary',
                        'success',
                        'warning',
                        'info',
                        'light',
                        'secondary',
                        'dark',
                        'danger'
                    ].map(variant => (
                        <Button variant={variant}>Yes this works</Button>
                    ))
                }
                </ButtonGroup>
            </Container>
        </div>
    )
}
