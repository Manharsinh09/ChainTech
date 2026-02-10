import { useRef, useState } from "react";
import { signupUser } from "../utils/methods";
import { useNavigate, Link } from "react-router";
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

export const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const result = signupUser(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
        );

        if (result.success) {
            setSuccess("Account created successfully! Redirecting...");
            setTimeout(() => navigate("/login"), 1500);
        } else {
            setError(result.message);
        }
    }

    return (
        <Container fluid className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={7}>
                    <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                        <Row className="g-0">
                            {/* Sidebar */}
                            <Col md={5} className="bg-primary d-none d-md-flex align-items-center justify-content-center p-5">
                                <div className="text-center text-white">
                                    <div className="mb-4">
                                        <div className="rounded-circle bg-white text-primary d-inline-flex align-items-center justify-content-center shadow-lg"
                                            style={{ width: '70px', height: '70px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="fw-bold mb-3">Join Us Today!</h3>
                                    <p className="opacity-75">Create an account to start managing your profile and accessing exclusive features.</p>
                                </div>
                            </Col>

                            {/* Main Content Area */}
                            <Col md={7}>
                                <Card.Body className="p-4 p-lg-5">
                                    <h4 className="fw-bold text-center mb-4 text-primary">Create Account</h4>
                                    {error && <Alert variant="danger" className="text-center small">{error}</Alert>}
                                    {success && <Alert variant="success" className="text-center small">{success}</Alert>}

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="John Doe" ref={nameRef} required className="py-2" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Email</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" ref={emailRef} required className="py-2" />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Password</Form.Label>
                                            <Form.Control type="password" placeholder="Create a password" ref={passwordRef} required className="py-2" />
                                        </Form.Group>

                                        <div className="d-grid gap-2 mb-4">
                                            <Button variant="primary" type="submit" className="py-2 rounded-pill fw-semibold shadow-sm">
                                                Sign Up
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="text-center">
                                        <p className="small text-muted mb-0">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link></p>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}