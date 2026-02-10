import { useNavigate } from "react-router";
import { userAuth } from "../context/UserContext"
import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';

export const Home = () => {
    const navigate = useNavigate();
    const { user, logout } = userAuth();

    return (

        <Container fluid className="py-5 " >
            <Row className="justify-content-center ">
                <Col xs={12} md={10} lg={7}>
                    <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                        <Row className="g-0">
                            {/* Sidebar */}
                            <Col md={4} className="bg-primary d-none d-md-flex align-items-center justify-content-center text-white p-4">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <div className="rounded-circle bg-white text-primary d-inline-flex align-items-center justify-content-center shadow"
                                            style={{ width: '80px', height: '80px', fontSize: '2rem', fontWeight: 'bold' }}>
                                            {user ? user.name.charAt(0).toUpperCase() : '?'}
                                        </div>
                                    </div>
                                    <h4>{user ? 'Member' : 'Guest'}</h4>
                                    <p className="small opacity-75">Manage your digital workspace and preferences.</p>
                                </div>
                            </Col>

                            {/* Main Content Area */}
                            <Col md={8}>
                                <Card.Body className="p-4 p-lg-5">
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <div>
                                            <h2 className="fw-bold mb-1">
                                                {user ? `Hello, ${user.name}!` : "Welcome!"}
                                            </h2>
                                            <p className="text-muted">
                                                {user ? "Great to see you again." : "Sign in to access your profile."}
                                            </p>
                                        </div>
                                        {user && <Badge bg="success-soft" className="text-success p-2 px-3">Active Account</Badge>}
                                    </div>

                                    <hr className="my-4 opacity-10" />

                                    {user ? (
                                        <>
                                            <div className="mb-4">
                                                <h6 className="text-uppercase fw-bold text-muted small mb-3">Account Overview</h6>
                                                <div className="p-3 bg-light rounded-3 mb-3 border">
                                                    <div className="small text-muted">Email Address</div>
                                                    <div className="fw-semibold">{user.email}</div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-wrap gap-3">
                                                <Button
                                                    variant="primary"
                                                    className="px-4 py-2 rounded-pill shadow-sm"
                                                    onClick={() => navigate("update")}
                                                >
                                                    Update Profile
                                                </Button>
                                                <Button
                                                    variant="outline-secondary"
                                                    className="px-4 py-2 rounded-pill"
                                                    onClick={() => { logout(); navigate("/login"); }}
                                                >
                                                    Sign Out
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-4">
                                            <p className="mb-4">You need to be authenticated to view this dashboard.</p>
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="px-5 rounded-pill"
                                                onClick={() => navigate("login")}
                                            >
                                                Login to Dashboard
                                            </Button>
                                        </div>
                                    )}
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
        </Container>

    )
}