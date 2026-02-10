import { Outlet } from "react-router";
import { AppNavbar } from "../components/AppNavbar";
import Container from 'react-bootstrap/Container';

export const UMS = () => {
    return (
        <>
            <AppNavbar />
            <Container fluid className="mt-4">
                <Outlet />
            </Container>
        </>
    )
}