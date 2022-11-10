import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const endpoint = "http://localhost:8000/api";
const LeadShow = () => {
  const [leads, setLeads] = useState([]);
  const keys = ["primeiroNome", "ultimoNome", "nomeDoMeio", "nomeConta"];
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(30);
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  let currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (query == "") {
    currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  } else {
    currentLeads = Search(leads, query, keys);
  }

  useEffect(() => {
    getAllLeads();
  }, []);

  const getAllLeads = async () => {
    const response = await axios.get(`${endpoint}/leads`);
    setLeads(response.data);
  };

  console.log(leads);

  const deleteLead = async (id) => {
    await axios.delete(`${endpoint}/lead/${id}`);
    getAllLeads();
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
            to="/lead/create"
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
            <th scope="col">Nome Da Conta</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {Search(currentLeads, query, keys).map((lead) => (
            <tr key={lead.id}>
              <th>{lead.id}</th>
              <td>{lead.tratamento}</td>
              <td>{lead.primeiroNome}</td>
              <td>{lead.ultimoNome}</td>
              <td>{lead.nomeConta}</td>
              <td className="text-center">
                <Link
                  to={`edit/${lead.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteLead(lead.id)}
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
        dadosPorPagina={leadsPerPage}
        totalDados={leads.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </div>
  );
};

export default LeadShow;
