import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/lead/";

function ContactEdit() {
  const [tratamento, setTratamento] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [nomeDoMeio, setNomeDoMeio] = useState("");
  const [sufixo, setSufixo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [nomeConta, setNomeConta] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [industria, setIndustria] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [origemLead, setOrigemLead] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nomeConta: nomeConta,
      tratamento: tratamento,
      primeiroNome: primeiroNome,
      ultimoNome: ultimoNome,
      nomeDoMeio: nomeDoMeio,
      sufixo: sufixo,
      rua: rua,
      cidade: cidade,
      estado: estado,
      cep: cep,
      pais: pais,
      telefone: telefone,
      celular: celular,
      email: email,
      titulo: titulo,
      descricao: descricao,
      status: status,
      industria: industria,
      faturamento: faturamento,
      funcionarios: funcionarios,
      origemLead: origemLead,
    });
    navigate("/lead");
  };

  useEffect(() => {
    const getLeadById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setTratamento(response.data.tratamento);
      setPrimeiroNome(response.data.primeiroNome);
      setUltimoNome(response.data.ultimoNome);
      setNomeDoMeio(response.data.nomeDoMeio);
      setSufixo(response.data.sufixo);
      setTitulo(response.data.titulo);
      setNomeConta(response.data.nomeConta);
      setRua(response.data.rua);
      setCidade(response.data.cidade);
      setEstado(response.data.estado);
      setCep(response.data.cep);
      setPais(response.data.pais);
      setTelefone(response.data.telefone);
      setCelular(response.data.celular);
      setEmail(response.data.email);
      setWebsite(response.data.website);
      setDescricao(response.data.descricao);
      setStatus(response.data.status);
      setIndustria(response.data.industria);
      setFaturamento(response.data.faturamento);
      setFuncionarios(response.data.funcionarios);
      setOrigemLead(response.data.origemLead);
    };
    getLeadById();
  }, []);

  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Contact Edit</h5>
        <div className="card-body">
          <form onSubmit={update}>
            <div className="row">
              <button className="btn btn-secondary m-1">
                Informações para Lead
              </button>
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
                <label className="form-label">Nome do Meio</label>
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
                <label className="form-label">Nome da Conta</label>
                <input
                  value={nomeConta}
                  onChange={(e) => setNomeConta(e.target.value)}
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
                <label className="form-label">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Website</label>
                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Descricao</label>
                <input
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">status</label>
                <input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Industria</label>
                <input
                  value={industria}
                  onChange={(e) => setIndustria(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Faturamento</label>
                <input
                  value={faturamento}
                  onChange={(e) => setFaturamento(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Funcionarios</label>
                <input
                  value={funcionarios}
                  onChange={(e) => setFuncionarios(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Origem Lead</label>
                <input
                  value={origemLead}
                  onChange={(e) => setOrigemLead(e.target.value)}
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
                <label className="form-label">Titulo</label>
                <input
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-secondary m-1">
                Informações de endereço
              </button>
              <div className="col-6 form-label">
                <label className="form-label">Rua</label>
                <textarea
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  type="text"
                  className="form-control"
                ></textarea>
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
              <button type="submit" className="btn btn-primary m-1">
                Contact Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactEdit;
