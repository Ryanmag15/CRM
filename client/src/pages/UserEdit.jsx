import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/user/";

function UserEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      name: name,
      email: email,
      password: password,
    });
    navigate("/user");
  };

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
    };
    getUserById();
  }, []);

  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">UserEdit</h5>
        <div className="card-body">
          <form onSubmit={update}>
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
