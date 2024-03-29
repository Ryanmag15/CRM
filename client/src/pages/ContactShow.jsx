import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const endpoint = "http://localhost:8000/api";
const ContactShow = () => {
  const [contacts, setContacts] = useState([]);
  const keys = [
    "primeiroNome",
    "ultimoNome",
    "nomeDoMeio",
    "departamento",
    "estado",
  ];
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(30);
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  let currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (query == "") {
    currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
  } else {
    currentContacts = Search(contacts, query, keys);
  }

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
              onChange={(e) => setQuery(e.target.value)}
            />
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
          {Search(currentContacts, query, keys).map((contact) => (
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
      <Pagination
        dadosPorPagina={contactsPerPage}
        totalDados={contacts.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </div>
  );
};

export default ContactShow;
