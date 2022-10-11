import { useEffect } from "react";
import { useState } from "react";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import api from "../services/api";
import React from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const deletarUsuario = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("você clicou no elemento");
  };

  console.log(users);
  return (
    <Table hover className="mt-3">
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
              <Button variant="outline-warning" size="sm" className="m-1">
                <BsFillPencilFill></BsFillPencilFill>
              </Button>
              <Button variant="outline-primary" size="sm" className="m-1">
                <BsFillPencilFill></BsFillPencilFill>
              </Button>
              <Button variant="outline-secondary" size="sm" className="m-1">
                <AiOutlineEye></AiOutlineEye>
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="m-1"
                onClick={deletarUsuario}
              >
                <BsTrash></BsTrash>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
