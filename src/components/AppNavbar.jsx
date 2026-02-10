import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from "react-router";
import { userAuth } from '../context/UserContext';
import { Button } from 'react-bootstrap';

export const AppNavbar = () => {
    const { user, logout } = userAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Navbar expand="lg" className="mb-4 py-3 sticky-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center gap-2">
                    <div className="bg-primary text-white rounded p-1 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-layers-fill" viewBox="0 0 16 16">
                            <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
                            <path d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
                        </svg>
                    </div>
                    UserManagement
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-2 mt-3 mt-lg-0">
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/" className="px-3 fw-medium">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/update" className="px-3 fw-medium">Profile</Nav.Link>
                                <div className="vr d-none d-lg-block mx-2 opacity-25"></div>
                                <span className="text-muted small fw-semibold me-2 d-none d-lg-block">
                                    {user.name}
                                </span>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="rounded-pill px-3"
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="px-3 fw-medium">Login</Nav.Link>
                                <Button
                                    as={Link}
                                    to="/signup"
                                    variant="primary"
                                    size="sm"
                                    className="rounded-pill px-4 fw-semibold shadow-sm"
                                >
                                    Get Started
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
