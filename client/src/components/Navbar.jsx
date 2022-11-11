import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { authStore } from "../redux/stores/authStore";

const handleLogout = () => {
  authStore.dispatch(logout());
};

const Navbar = () => {
  const usuario = useSelector((state) => state.auth.user);
  const logged = useSelector((state) => state.auth.logged);

  return (
    <BSNavbar bg="warning" variant="warning" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          CRM - CCBA
        </Link>
        <BSNavbar.Toggle aria-controls="myNav" />
        <BSNavbar.Collapse id="myNav">
          <Nav className="me-auto">
            {logged && (
              <>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/lead" className="nav-link">
                  Leads
                </Link>
                <Link to="/account" className="nav-link">
                  Account
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/opportunity" className="nav-link">
                  Opportunity
                </Link>
                <Link to="/task" className="nav-link">
                  Task
                </Link>
                <Link to="/panel" className="nav-link">
                  Panel
                </Link>
                <Link to="/report" className="nav-link">
                  Report
                </Link>
                <Link to="/calendar" className="nav-link">
                  Calendar
                </Link>
                <Link to="/product" className="nav-link">
                  Product
                </Link>
                <Link to="/activity" className="nav-link">
                  Activity
                </Link>
                <Link to="/user" className="nav-link">
                  User
                </Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {logged && (
              <>
                <Link to="/perfil" className="nav-link">
                  {usuario.nome}
                </Link>
                <Link onClick={handleLogout} className="nav-link" to="/login">
                  Sair
                </Link>
              </>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};
export default Navbar;
