import { useRef, useState, useEffect } from "react";
import { updateUser } from "../utils/methods";
import { useNavigate } from "react-router";
import { userAuth } from "../context/UserContext";
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

export const Update = () => {
    const { user, updateUserContext } = userAuth();
    const navigate = useNavigate();

    const nameRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        const newName = nameRef.current.value;
        const newPassword = passwordRef.current.value;

        if (!newName || !newPassword) {
            setError("All fields are required.");
            return;
        }

        const isUpdated = updateUser(user.email, { name: newName, password: newPassword });

        if (isUpdated) {
            updateUserContext({ name: newName, password: newPassword });
            setSuccess("Profile updated successfully!");
        } else {
            setError("Failed to update profile.");
        }
    }

    if (!user) return null;

    return (
        <Container fluid className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={7}>
                    <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                        <Row className="g-0">
                            {/* Sidebar */}
                            <Col md={4} className="bg-primary d-none d-md-flex align-items-center justify-content-center text-white p-4">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <div className="rounded-circle bg-white text-primary d-inline-flex align-items-center justify-content-center shadow"
                                            style={{ width: '80px', height: '80px', fontSize: '2rem', fontWeight: 'bold' }}>
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>
                                    <h4 className="mb-1">{user.name}</h4>
                                    <p className="small opacity-75 mb-0">{user.email}</p>
                                </div>
                            </Col>

                            {/* Main Content Area */}
                            <Col md={8}>
                                <Card.Body className="p-4 p-lg-5">
                                    <h4 className="fw-bold mb-4 text-primary">Update Profile</h4>

                                    {error && <Alert variant="danger" className="text-center small">{error}</Alert>}
                                    {success && <Alert variant="success" className="text-center small">{success}</Alert>}

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Email</Form.Label>
                                            <Form.Control type="email" value={user.email} disabled className="py-2 bg-light" />
                                            <Form.Text className="text-muted small">
                                                Email cannot be changed.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={user.name}
                                                ref={nameRef}
                                                required
                                                className="py-2"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label className="small text-muted text-uppercase fw-bold">New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter new password"
                                                ref={passwordRef}
                                                required
                                                defaultValue={user.password || ""}
                                                className="py-2"
                                            />
                                        </Form.Group>

                                        <div className="d-flex gap-3">
                                            <Button variant="primary" type="submit" className="px-4 py-2 rounded-pill shadow-sm flex-grow-1">
                                                Save Changes
                                            </Button>
                                            <Button variant="outline-secondary" onClick={() => navigate("/")} className="px-4 py-2 rounded-pill">
                                                Cancel
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}