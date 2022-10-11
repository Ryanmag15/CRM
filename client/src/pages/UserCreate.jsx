import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/user";

function UserCreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      name: name,
      email: email,
      password: password,
    });
    navigate("/user");
  };

  return (
    <div>
      <div class="card m-1">
        <h5 class="card-header">Criar Usuário</h5>
        <div class="card-body">
          <form onSubmit={store}>
            <div className="form-label">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="form-label">
              <label className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="form-label">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>

            <button type="submit" className="btn btn-primary">
              Criar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
