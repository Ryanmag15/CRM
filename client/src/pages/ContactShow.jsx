import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const endpoint = "http://localhost:8000/api";
const ContactShow = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    const response = await axios.get(`${endpoint}/contacts`);
    setContacts(response.data);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${endpoint}/contact/${id}`);
    getAllContacts();
  };

  return (
    <div className="d-grid gap-2">
      <div className="row">
        <div className="col-8">
          <Form className="d-flex m-1">
            <Form.Control
              type="search"
              placeholder="Filtro"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </div>
        <div className="col-4">
          <Link
            to="/contact/create"
            className="col-11 btn btn-outline-primary m-1 "
          >
            Create
          </Link>
        </div>
      </div>
      <Table hover className="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tratamento</th>
            <th scope="col">Primeiro Nome</th>
            <th scope="col">Último Nome</th>
            <th scope="col">Nome Do Meio</th>
            <th scope="col">Estado</th>
            <th scope="col">Departamento</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <th>{contact.id}</th>
              <td>{contact.tratamento}</td>
              <td>{contact.primeiroNome}</td>
              <td>{contact.ultimoNome}</td>
              <td>{contact.nomeDoMeio}</td>
              <td>{contact.estado}</td>
              <td>{contact.departamento}</td>
              <td className="text-center">
                <Link
                  to={`edit/${contact.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="btn btn-outline-danger m-1"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactShow;
