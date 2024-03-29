import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const endpoint = "http://localhost:8000/api";
const AccountShow = () => {
  const [accounts, setAccounts] = useState([]);

  const keys = [
    "nome",
    "razaoSocial",
    "statusConta",
    "setor",
    "segmentoAtuacao",
    "naturezaJuridica",
  ];
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(20);
  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOFirstAccount = indexOfLastAccount - accountsPerPage;
  let currentAccounts = accounts.slice(indexOFirstAccount, indexOfLastAccount);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpoint}/accounts`);
    setAccounts(response.data);
  };

  if (query == "") {
    currentAccounts = accounts.slice(indexOFirstAccount, indexOfLastAccount);
  } else {
    currentAccounts = Search(accounts, query, keys);
  }

  const deleteAccount = async (id) => {
    await axios.delete(`${endpoint}/account/${id}`);
    getAllAccounts();
  };

  return (
    <div className="d-grid gap-2">
      <div className="row col-12">
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
        <div className="col-4 p-0">
          <Link
            to="/account/create"
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
            <th className="col-2" scope="col">
              Nome
            </th>
            <th className="col-2" scope="col">
              Razão Social
            </th>
            <th scope="col">Status da Conta</th>
            <th scope="col">Setor</th>
            <th scope="col">Segmento Atuacao</th>
            <th scope="col">Natureza Juridica</th>
            <th scope="col">Capital</th>
            <th scope="col">Funcionarios</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {Search(currentAccounts, query, keys).map((account) => (
            <tr key={account.id}>
              <th>{account.id}</th>
              <td>{account.nome}</td>
              <td>{account.razaoSocial}</td>
              <td>{account.statusConta}</td>
              <td>{account.setor}</td>
              <td>{account.segmentoAtuacao}</td>
              <td>{account.naturezaJuridica}</td>
              <td>{account.capital}</td>
              <td>{account.funcionarios}</td>
              <td className="text-center">
                <Link
                  to={`edit/${account.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteAccount(account.id)}
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
        dadosPorPagina={accountsPerPage}
        totalDados={accounts.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </div>
  );
};

export default AccountShow;
