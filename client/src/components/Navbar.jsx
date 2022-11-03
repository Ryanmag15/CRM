// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function NavComponente() {
//   return (
//     <Navbar bg="warning" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="/">CRM - CCBA</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="/inicio">Início</Nav.Link>
//             <Nav.Link href="/leads">Leads</Nav.Link>
//             <Nav.Link href="/account">Contas</Nav.Link>
//             <Nav.Link href="/contact">Contatos</Nav.Link>
//             <Nav.Link href="/opportunity">Oportunidades</Nav.Link>
//             <Nav.Link href="/tarefas">Tarefas</Nav.Link>
//             <Nav.Link href="/paineis">Painéis</Nav.Link>
//             <Nav.Link href="/relatorios">Relatórios</Nav.Link>
//             <Nav.Link href="/calendario">Calendário</Nav.Link>
//             <Nav.Link href="/product">Produtos/Teses</Nav.Link>
//             <Nav.Link href="/user">User</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavComponente;

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
                <Link to="/leads" className="nav-link">
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
                  Panels
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
