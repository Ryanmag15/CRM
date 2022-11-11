import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/activity/";
const endpointRelacionamentos = "http://localhost:8000/api";

function ActivityEdit() {
  const [accounts, setAccounts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpointRelacionamentos}/accounts`);
    setAccounts(response.data);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    const response = await axios.get(`${endpointRelacionamentos}/contacts`);
    setContacts(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpointRelacionamentos}/users`);
    setUsers(response.data);
  };

  const [account_id, setAccountId] = useState("");
  const [contact_id, setContactId] = useState("");
  const [user_id, setUserId] = useState("");
  const [dataAtividade, setDataAtividade] = useState("");
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      account_id: account_id,
      descricao: descricao,
      contact_id: contact_id,
      user_id: user_id,
      dataAtividade: dataAtividade,
      assunto: assunto,
    });
    navigate("/activity");
  };

  useEffect(() => {
    const getAccountById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setAccountId(response.data.account_id);
      setContactId(response.data.contact_id);
      setDescricao(response.data.descricao);
      setUserId(response.data.user_id);
      setDataAtividade(response.data.dataAtividade);
      setAssunto(response.data.assunto);
    };
    getAccountById();
  }, []);

  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Opportunity Edit</h5>
        <div className="card-body">
          <form onSubmit={update}>
            <div className="row">
              <button className="btn btn-secondary m-1">
                Informações da Atividade
              </button>
              <div className="col-6">
                <label>
                  Nome da Conta
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={account_id || ""}
                    onChange={(e) => setAccountId(e.target.value)}
                  >
                    <option value=""></option>
                    {accounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.nome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Nome do Contato
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={contact_id || ""}
                    onChange={(e) => setContactId(e.target.value)}
                  >
                    <option value=""></option>
                    {contacts.map((contact) => (
                      <option key={contact.id} value={contact.id}>
                        {contact.primeiroNome} {contact.nomeDoMeio}{" "}
                        {contact.ultimoNome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Nome do usuário CCBA
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={user_id || ""}
                    onChange={(e) => setUserId(e.target.value)}
                  >
                    <option value=""></option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Tipo da Atividade
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={assunto || ""}
                    onChange={(e) => setAssunto(e.target.value)}
                  >
                    <option value="Reuniao">Reunião</option>
                    <option value="Email">E-mail</option>
                    <option value="Ligacao">Ligação</option>
                    <option value="Documentacao">Documentação</option>
                    <option value="Provocacao">Provocação</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Atividade</label>
                <input
                  value={dataAtividade || ""}
                  onChange={(e) => setDataAtividade(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-12 form-label">
                <label className="form-label">Descrição</label>
                <textarea
                  value={descricao || ""}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Opportunity Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ActivityEdit;
