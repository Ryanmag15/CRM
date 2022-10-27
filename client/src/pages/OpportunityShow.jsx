import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const endpoint = "http://localhost:8000/api";

const OpportunityShow = () => {
  const [opportunities, setOpportunities] = useState([]);
  const keys = ["nome", "opportunity.account.nome", "estagioNome"];
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [opportunitiesPerPage] = useState(30);
  const indexOfLastOpportunity = currentPage * opportunitiesPerPage;
  const indexOfFirstOpportunity = indexOfLastOpportunity - opportunitiesPerPage;
  let currentOpportunities = opportunities.slice(
    indexOfFirstOpportunity,
    indexOfLastOpportunity
  );

  if (query == "") {
    currentOpportunities = opportunities.slice(
      indexOfFirstOpportunity,
      indexOfLastOpportunity
    );
  } else {
    currentOpportunities = Search(opportunities, query, keys);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllOpportunities();
  }, []);

  const getAllOpportunities = async () => {
    const response = await axios.get(`${endpoint}/opportunities`);
    setOpportunities(response.data);
  };

  const deleteOpportunity = async (id) => {
    await axios.delete(`${endpoint}/opportunity/${id}`);
    getAllOpportunities();
  };

  return (
    <div className="d-grid gap-2">
      <div className="row">
        <div className="col-8">
          <Form className="d-flex m-1">
            <Form.Control
              type="text"
              placeholder="Filtro"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </div>
        <div className="col-4">
          <Link
            to="/opportunity/create"
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
            <th scope="col">Nome</th>
            <th scope="col">Conta nome</th>
            <th scope="col">Fase</th>
            <th scope="col">Data Fechamento</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {Search(currentOpportunities, query, keys).map((opportunity) => (
            <tr key={opportunity.id}>
              <th>{opportunity.id}</th>
              <td>{opportunity.nome}</td>
              <td>{opportunity.account.nome}</td>
              <td>{opportunity.estagioNome}</td>
              <td>{opportunity.dataApresentacao}</td>
              <td className="text-center">
                <Link
                  to={`edit/${opportunity.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteOpportunity(opportunity.id)}
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
        dadosPorPagina={opportunitiesPerPage}
        totalDados={opportunities.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </div>
  );
};

export default OpportunityShow;
