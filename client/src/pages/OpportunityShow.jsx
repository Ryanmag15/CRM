import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const endpoint = "http://localhost:8000/api";
const endpointAccount = "http://localhost:8000/api";

const OpportunityShow = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAllOpportunities();
  }, []);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpointAccount}/accounts`);
    setAccounts(response.data);
    console.log(accounts);
  };

  const getAllOpportunities = async () => {
    const response = await axios.get(`${endpoint}/opportunities`);
    setOpportunities(response.data);
    console.log(opportunities);
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
            <th scope="col">Conta id</th>
            <th scope="col">Conta nome</th>
            <th scope="col">Fase</th>
            <th scope="col">Data Fechamento</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opportunity) => (
            <tr key={opportunity.id}>
              <th>{opportunity.id}</th>
              <td>{opportunity.nome}</td>
              <td>{opportunity.account_id}</td>
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
    </div>
  );
};

export default OpportunityShow;
