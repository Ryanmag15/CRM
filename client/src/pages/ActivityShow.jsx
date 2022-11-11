import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const endpoint = "http://localhost:8000/api";

const ActivityShow = () => {
  const [activities, setActivities] = useState([]);
  const keys = ["assunto", "descricao", "activity.account.nome", ""];
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(30);
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  let currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  if (query == "") {
    currentActivities = activities.slice(
      indexOfFirstActivity,
      indexOfLastActivity
    );
  } else {
    currentActivities = Search(activities, query, keys);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllActivities();
  }, []);

  const getAllActivities = async () => {
    const response = await axios.get(`${endpoint}/activities`);
    setActivities(response.data);
  };

  // console.log(activities);
  console.log(currentActivities);

  const deleteActivity = async (id) => {
    await axios.delete(`${endpoint}/activity/${id}`);
    getAllActivities();
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
            to="/activity/create"
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
            <th scope="col">Nome da Conta</th>
            <th scope="col">Nome do Usuário</th>
            <th scope="col">Assunto</th>
            <th scope="col">Descrição</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {Search(currentActivities, query, keys).map((activity) => (
            <tr key={activity.id}>
              <th>{activity.id}</th>
              <td>{activity.account.nome}</td>
              <td>{activity.user.name}</td>
              <td>{activity.assunto}</td>
              <td>{activity.descricao}</td>
              <td className="text-center">
                <Link
                  to={`edit/${activity.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteActivity(activity.id)}
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
        dadosPorPagina={activitiesPerPage}
        totalDados={activities.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </div>
  );
};

export default ActivityShow;
