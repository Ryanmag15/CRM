import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/account/";

function AccountEdit() {
  const [nome, setNome] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [siteWeb, setSiteWeb] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  const [statusConta, setStatusConta] = useState("");
  const [setor, setSetor] = useState("");
  const [segmentoAtuacao, setSegmentoAtuacao] = useState("");
  const [naturezaJuridica, setNaturezaJuridica] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [capital, setCapital] = useState("");
  const [dataEncerramento, setDataEncerramento] = useState("");
  // const [dataEncerramentoExercicio, setDataEncerramentoExercicio] =
  //   useState("");
  const [auditoriaIndependente, setAuditoriaIndependente] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [marcas, setMarcas] = useState("");
  const [receitaAnual, setReceitaAnual] = useState("");
  const [principaisProdutos, setPrincipaisProdutos] = useState("");
  const [metaAnuais, setMetaAnuais] = useState("");
  const [socAnual, setSocAnual] = useState("");
  const [regimeEspecial, setRegimeEspecial] = useState("");
  const [outrasRelevantes, setOutrasRelevantes] = useState("");
  const [observacaoRegimeEspecial, setObservacaoRegimeEspecial] = useState("");
  const [origemConta, setOrigemConta] = useState("");
  const [projeto, setProjeto] = useState("");
  const [principalNecessidade, setPrincipalNecessidade] = useState("");
  const [demandasJuridicas, setDemandasJuridicas] = useState("");
  const [estrategiaCliente, setEstrategiaCliente] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nome: nome,
      razaoSocial: razaoSocial,
      siteWeb: siteWeb,
      telefone: telefone,
      descricao: descricao,
      statusConta: statusConta,
      setor: setor,
      segmentoAtuacao: segmentoAtuacao,
      naturezaJuridica: naturezaJuridica,
      cnpj: cnpj,
      capital: capital,
      dataEncerramento: dataEncerramento,
      auditoriaIndependente: auditoriaIndependente,
      funcionarios: funcionarios,
      marcas: marcas,
      receitaAnual: receitaAnual,
      principaisProdutos: principaisProdutos,
      metaAnuais: metaAnuais,
      socAnual: socAnual,
      regimeEspecial: regimeEspecial,
      outrasRelevantes: outrasRelevantes,
      observacaoRegimeEspecial: observacaoRegimeEspecial,
      origemConta: origemConta,
      projeto: projeto,
      principalNecessidade: principalNecessidade,
      demandasJuridicas: demandasJuridicas,
      estrategiaCliente: estrategiaCliente,
      rua: rua,
      cidade: cidade,
      cep: cep,
      estado: estado,
      pais: pais,
    });
    navigate("/account");
  };

  useEffect(() => {
    const getAccountById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNome(response.data.nome);
      setRazaoSocial(response.data.razaoSocial);
      setSiteWeb(response.data.siteWeb);
      setTelefone(response.data.telefone);
      setDescricao(response.data.descricao);
      setStatusConta(response.data.statusConta);
      setSetor(response.data.setor);
      setSegmentoAtuacao(response.data.segmentoAtuacao);
      setNaturezaJuridica(response.data.naturezaJuridica);
      setCnpj(response.data.cnpj);
      setCapital(response.data.capital);
      setDataEncerramento(response.data.dataEncerramento);
      // setDataEncerramentoExercicio(response.data.dataEncerramentoExercicio);
      setAuditoriaIndependente(response.data.auditoriaIndependente);
      setFuncionarios(response.data.funcionarios);
      setMarcas(response.data.marcas);
      setReceitaAnual(response.data.receitaAnual);
      setPrincipaisProdutos(response.data.principaisProdutos);
      setMetaAnuais(response.data.metaAnuais);
      setSocAnual(response.data.socAnual);
      setRegimeEspecial(response.data.regimeEspecial);
      setOutrasRelevantes(response.data.outrasRelevantes);
      setObservacaoRegimeEspecial(response.data.observacaoRegimeEspecial);
      setOrigemConta(response.data.origemConta);
      setProjeto(response.data.projeto);
      setPrincipalNecessidade(response.data.principalNecessidade);
      setDemandasJuridicas(response.data.demandasJuridicas);
      setEstrategiaCliente(response.data.estrategiaCliente);
      setRua(response.data.rua);
      setCidade(response.data.cidade);
      setCep(response.data.cep);
      setEstado(response.data.estado);
      setPais(response.data.pais);
    };
    getAccountById();
  }, []);

  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Account Create</h5>
        <div className="card-body">
          <form onSubmit={update}>
            <div className="row">
              <button className="btn btn-secondary">
                Informações Sobre a Conta
              </button>
              <div className="col-6 form-label">
                <label className="form-label">Nome</label>
                <input
                  value={nome || ""}
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Razao Social</label>
                <input
                  value={razaoSocial || ""}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Site Web</label>
                <input
                  value={siteWeb || ""}
                  onChange={(e) => setSiteWeb(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Telefone</label>
                <input
                  value={telefone || ""}
                  onChange={(e) => setTelefone(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Descricao</label>
                <textarea
                  value={descricao || ""}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6">
                <label>
                  Segmento de Atuação
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={segmentoAtuacao || ""}
                    onChange={(e) => setSegmentoAtuacao(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Automotivo">Automotivo</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="MeM">MeM</option>
                    <option value="Outros">Outros</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Status da Conta
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={statusConta || ""}
                    onChange={(e) => setStatusConta(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Desqualificação">Desqualificação</option>
                    <option value="Prospeccao">Prospecção</option>
                    <option value="Qualificacao">Qualificacao</option>
                    <option value="Contato para reuniao">
                      Contato para reuniao
                    </option>
                    <option value="Apresentacao">Apresentacao</option>
                    <option value="Proposta">Proposta</option>
                    <option value="Follow up">Follow-Up</option>
                    <option value="Contrato">Contrato</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Setor
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={setor || ""}
                    onChange={(e) => setSetor(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Bancario">Bancario</option>
                    <option value="Alimenticio">Alimenticio</option>
                    <option value="Agricultura">Agricultura</option>
                    <option value="Biotecnologia">Biotecnologia</option>
                    <option value="Comunicacoes">Comunicacoes</option>
                    <option value="Contrucao">Contrucao</option>
                    <option value="Consultoria">Consultoria</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Natureza Jurídica
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={naturezaJuridica || ""}
                    onChange={(e) => setNaturezaJuridica(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Sociedade">Sóciedade Anônima</option>
                    <option value="Limitada">Limitada</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Capital</label>
                <input
                  value={capital || ""}
                  onChange={(e) => setCapital(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">CNPJ</label>
                <input
                  value={cnpj || ""}
                  onChange={(e) => setCnpj(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Auditoria Independente</label>
                <input
                  value={auditoriaIndependente || ""}
                  onChange={(e) => setAuditoriaIndependente(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Funcionarios</label>
                <input
                  value={funcionarios || ""}
                  onChange={(e) => setFuncionarios(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Marcas</label>
                <textarea
                  value={marcas || ""}
                  onChange={(e) => setMarcas(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Receita Anual</label>
                <input
                  value={receitaAnual || ""}
                  onChange={(e) => setReceitaAnual(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Principais Produtos</label>
                <textarea
                  value={principaisProdutos || ""}
                  onChange={(e) => setPrincipaisProdutos(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Metas Anuais</label>
                <textarea
                  value={metaAnuais || ""}
                  onChange={(e) => setMetaAnuais(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">SoC Anual</label>
                <input
                  value={socAnual || ""}
                  onChange={(e) => setSocAnual(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 ">
                <label>
                  Regime Especial
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={regimeEspecial || ""}
                    onChange={(e) => setRegimeEspecial(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Nao identifico">Nao identifico</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Outros Relevantes</label>
                <input
                  value={outrasRelevantes || ""}
                  onChange={(e) => setOutrasRelevantes(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">
                  Regime Especial Observações
                </label>
                <input
                  value={observacaoRegimeEspecial || ""}
                  onChange={(e) => setObservacaoRegimeEspecial(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Origem Conta</label>
                <input
                  value={origemConta || ""}
                  onChange={(e) => setOrigemConta(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Projeto</label>
                <input
                  value={projeto || ""}
                  onChange={(e) => setProjeto(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Encerramento</label>
                <input
                  value={dataEncerramento}
                  onChange={(e) => setDataEncerramento(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              {/* <div className="col-6 form-label">
                <label className="form-label">
                  Data Encerramento Exercício
                </label>
                <input
                  value={dataEncerramentoExercicio}
                  onChange={(e) => setDataEncerramentoExercicio(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div> */}
              <button className="btn btn-secondary">Outras Informações</button>
              <div className="col-6 form-label">
                <label className="form-label">Principal Necessidade</label>
                <textarea
                  value={principalNecessidade || ""}
                  onChange={(e) => setPrincipalNecessidade(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Demandas Jurídica</label>
                <textarea
                  value={demandasJuridicas || ""}
                  onChange={(e) => setDemandasJuridicas(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estratégia Cliente</label>
                <textarea
                  value={estrategiaCliente || ""}
                  onChange={(e) => setEstrategiaCliente(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-secondary">
                Informações Endereço
              </button>
              <div className="col-6 form-label">
                <label className="form-label">Rua</label>
                <textarea
                  value={rua || ""}
                  onChange={(e) => setRua(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Cidade</label>
                <input
                  value={cidade || ""}
                  onChange={(e) => setCidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">CEP</label>
                <input
                  value={cep || ""}
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estado</label>
                <input
                  value={estado || ""}
                  onChange={(e) => setEstado(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Pais</label>
                <input
                  value={pais || ""}
                  onChange={(e) => setPais(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Editar Conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountEdit;
