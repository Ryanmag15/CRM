import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const UserShow = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/users`);
    setUsers(response.data);
    console.log(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${endpoint}/user/${id}`);
    getAllUsers();
  };

  // console.log(users);

  return (
    <div className="d-grid gap-2">
      <Link to="/user/create" className="btn btn-outline-primary m-1">
        Create
      </Link>

      <Table hover className="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Senha</th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td className="text-center">
                <Link
                  to={`edit/${user.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
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

export default UserShow;
