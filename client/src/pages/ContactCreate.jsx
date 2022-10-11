import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/contact";
const endpointAccount = "http://localhost:8000/api";

function ContactCreate() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpointAccount}/accounts`);
    setAccounts(response.data);
  };

  const [account_id, setAccountId] = useState("");
  const [tratamento, setTratamento] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [nomeDoMeio, setNomeDoMeio] = useState("");
  const [sufixo, setSufixo] = useState("");
  const [outraRua, setOutraRua] = useState("");
  const [outraCidade, setOutraCidade] = useState("");
  const [outroEstado, setOutroEstado] = useState("");
  const [outroCep, setOutroCep] = useState("");
  const [outroPais, setOutroPais] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [telefoneCasa, setTelefoneCasa] = useState("");
  const [email, setEmail] = useState("");
  const [titulo, setTitulo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [origemContato, setOrigemContato] = useState("");
  const [recebeInformativo, setRecebeInformativo] = useState("");
  const [unidade, setUnidade] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      account_id: account_id,
      tratamento: tratamento,
      primeiroNome: primeiroNome,
      ultimoNome: ultimoNome,
      nomeDoMeio: nomeDoMeio,
      sufixo: sufixo,
      outraRua: outraRua,
      outraCidade: outraCidade,
      outroEstado: outroEstado,
      outroCep: outroCep,
      outroPais: outroPais,
      rua: rua,
      cidade: cidade,
      estado: estado,
      cep: cep,
      pais: pais,
      telefone: telefone,
      celular: celular,
      telefoneCasa: telefoneCasa,
      email: email,
      titulo: titulo,
      departamento: departamento,
      origemContato: origemContato,
      recebeInformativo: recebeInformativo,
      unidade: unidade,
      linkedin: linkedin,
    });
    navigate("/contact");
  };
  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Contact Create</h5>
        <div className="card-body">
          <form onSubmit={store}>
            <div className="row">
              <div className="col-6">
                <label>
                  Tratamento
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={tratamento}
                    onChange={(e) => setTratamento(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Nome da Conta
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={account_id}
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
              <div className="col-6 form-label">
                <label className="form-label">Primeiro Nome</label>
                <input
                  value={primeiroNome}
                  onChange={(e) => setPrimeiroNome(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Último Nome</label>
                <input
                  value={ultimoNome}
                  onChange={(e) => setUltimoNome(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Telefone</label>
                <input
                  value={nomeDoMeio}
                  onChange={(e) => setNomeDoMeio(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Sufixo</label>
                <input
                  value={sufixo}
                  onChange={(e) => setSufixo(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Outra Rua</label>
                <input
                  value={outraRua}
                  onChange={(e) => setOutraRua(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Outra Cidade</label>
                <input
                  value={outraCidade}
                  onChange={(e) => setOutraCidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label"> Outro Estado</label>
                <input
                  value={outroEstado}
                  onChange={(e) => setOutroEstado(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Outro Cep</label>
                <input
                  value={outroCep}
                  onChange={(e) => setOutroCep(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Outro Pais</label>
                <input
                  value={outroPais}
                  onChange={(e) => setOutroPais(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Rua</label>
                <input
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Cidade</label>
                <input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estado</label>
                <input
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">CEP</label>
                <input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Pais</label>
                <input
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Telefone</label>
                <input
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Celular</label>
                <input
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label"> Telefone Casa</label>
                <input
                  value={telefoneCasa}
                  onChange={(e) => setTelefoneCasa(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Titulo</label>
                <input
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Departamento</label>
                <input
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Origem Contato</label>
                <input
                  value={origemContato}
                  onChange={(e) => setOrigemContato(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Receber Informativo
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={recebeInformativo || ""}
                    onChange={(e) => setRecebeInformativo(e.target.value)}
                  >
                    <option value="0">Não</option>
                    <option value="1">Sim</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Unidade</label>
                <input
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Linkedin</label>
                <input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Criar Contato
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactCreate;
