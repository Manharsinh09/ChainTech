import { useRef, useState } from "react";
import { validateLogin } from "../utils/methods";
import { useNavigate, Link } from "react-router";
import { userAuth } from "../context/UserContext";
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

export const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const { login } = userAuth();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        const user = validateLogin(emailRef.current.value, passwordRef.current.value);

        if (user) {
            login(user);
            navigate("/");
        } else {
            setError("Invalid email or password.");
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="fw-bold mb-3">Welcome Back!</h3>
                                    <p className="opacity-75">Sign in to continue to your digital workspace and manage your account.</p>
                                </div>
                            </Col>

                            {/* Main Content Area */}
                            <Col md={7}>
                                <Card.Body className="p-4 p-lg-5">
                                    <h4 className="fw-bold text-center mb-4 text-primary">Member Login</h4>
                                    {error && <Alert variant="danger" className="text-center small">{error}</Alert>}

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                ref={emailRef}
                                                required
                                                className="py-2"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter your password"
                                                ref={passwordRef}
                                                required
                                                className="py-2"
                                            />
                                        </Form.Group>

                                        <div className="d-grid gap-2 mb-4">
                                            <Button variant="primary" type="submit" className="py-2 rounded-pill fw-semibold shadow-sm">
                                                Sign In
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="text-center">
                                        <p className="small text-muted mb-0">Don't have an account? <Link to="/signup" className="text-primary fw-bold text-decoration-none">Create Account</Link></p>
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