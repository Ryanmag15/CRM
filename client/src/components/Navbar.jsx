import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">CRM - CCBA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/inicio">Início</Nav.Link>
            <Nav.Link href="/leads">Leads</Nav.Link>
            <Nav.Link href="/account">Contas</Nav.Link>
            <Nav.Link href="/contact">Contatos</Nav.Link>
            <Nav.Link href="/opportunity">Oportunidades</Nav.Link>
            <Nav.Link href="/tarefas">Tarefas</Nav.Link>
            <Nav.Link href="/paineis">Painéis</Nav.Link>
            <Nav.Link href="/relatorios">Relatórios</Nav.Link>
            <Nav.Link href="/calendario">Calendário</Nav.Link>
            <Nav.Link href="/teses">Teses</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
