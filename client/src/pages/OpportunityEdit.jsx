import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/opportunity/";
const endpointAccount = "http://localhost:8000/api";

function OpportunityEdit() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpointAccount}/accounts`);
    setAccounts(response.data);
  };

  const [account_id, setAccountId] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estagioNome, setEstagioNome] = useState("");
  const [estagioClassificacao, setEstagioClassificacao] = useState("");
  const [quantia, setQuantia] = useState("");
  const [probabilidade, setProbabilidade] = useState("");
  const [rendaEsperada, setRendaEsperada] = useState("");
  const [totalOportunidades, setTotalOportunidades] = useState("");
  const [dataFechamento, setDataFechamento] = useState("");
  const [estaFechado, setEstaFechado] = useState("");
  const [estaGanho, setEstaGanho] = useState("");
  const [categoriaPrevisao, setCategoriaPrevisao] = useState("");
  const [nomeCategoriaPrevisao, setNomeCategoriaPrevisao] = useState("");
  const [itemLinhaOportunidade, setItemLinhaOportunidade] = useState("");
  const [dataAlteracaoUltimoEstagio, setDataAlteracaoUltimoEstagio] =
    useState("");
  const [anoFiscal, setAnoFiscal] = useState("");
  const [trimestreFiscal, setTrimestreFiscal] = useState("");
  const [beneficioEconomico, setBeneficioEconomico] = useState("");
  const [motivoPerda, setMotivoPerda] = useState("");
  const [cap, setCap] = useState("");
  const [dataExecucao, setDataExecucao] = useState("");
  const [dataConclusaoTriagem, setDataConclusaoTriagem] = useState("");
  const [dataRecebimentoDocumentacao, setDataRecebimentoDocumentacao] =
    useState("");
  const [deliberacao, setDeliberacao] = useState("");
  const [documentacaoRecebida, setDocumentacaoRecebida] = useState("");
  const [escopo, setEscopo] = useState("");
  const [forma, setForma] = useState("");
  const [formato, setFormato] = useState("");
  const [honorarioProLabore, setHonorarioProLabore] = useState("");
  const [honorarioExito, setHonorarioExito] = useState("");
  const [incluidaNaProgramacao, setIncluidaNaProgramacao] = useState("");
  const [numeroProcessoJudicial, setNumeroProcessoJudicial] = useState("");
  const [origemOportunidade, setOrigemOportunidade] = useState("");
  const [prazoExterno, setPrazoExterno] = useState("");
  const [prazoInterno, setPrazoInterno] = useState("");
  const [refinamento, setRefinamento] = useState("");
  const [triagemConcluida, setTriagemConcluida] = useState("");
  const [dataApresentacao, setDataApresentacao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [seguimento, setSeguimento] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      account_id: account_id,
      nome: nome,
      descricao: descricao,
      estagioNome: estagioNome,
      estagioClassificacao: estagioClassificacao,
      quantia: quantia,
      probabilidade: probabilidade,
      rendaEsperada: rendaEsperada,
      totalOportunidades: totalOportunidades,
      dataFechamento: dataFechamento,
      estaFechado: estaFechado,
      estaGanho: estaGanho,
      categoriaPrevisao: categoriaPrevisao,
      nomeCategoriaPrevisao: nomeCategoriaPrevisao,
      itemLinhaOportunidade: itemLinhaOportunidade,
      dataAlteracaoUltimoEstagio: dataAlteracaoUltimoEstagio,
      anoFiscal: anoFiscal,
      trimestreFiscal: trimestreFiscal,
      beneficioEconomico: beneficioEconomico,
      motivoPerda: motivoPerda,
      cap: cap,
      dataExecucao: dataExecucao,
      dataConclusaoTriagem: dataConclusaoTriagem,
      dataRecebimentoDocumentacao: dataRecebimentoDocumentacao,
      deliberacao: deliberacao,
      documentacaoRecebida: documentacaoRecebida,
      escopo: escopo,
      forma: forma,
      formato: formato,
      honorarioProLabore: honorarioProLabore,
      honorarioExito: honorarioExito,
      incluidaNaProgramacao: incluidaNaProgramacao,
      numeroProcessoJudicial: numeroProcessoJudicial,
      origemOportunidade: origemOportunidade,
      prazoExterno: prazoExterno,
      prazoInterno: prazoInterno,
      refinamento: refinamento,
      triagemConcluida: triagemConcluida,
      dataApresentacao: dataApresentacao,
      observacao: observacao,
      seguimento: seguimento,
    });
    navigate("/opportunity");
  };

  useEffect(() => {
    const getAccountById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setAccountId(response.data.account_id);
      setNome(response.data.nome);
      setDescricao(response.data.descricao);
      setEstagioNome(response.data.estagioNome);
      setEstagioClassificacao(response.data.estagioClassificacao);
      setQuantia(response.data.quantia);
      setProbabilidade(response.data.probabilidade);
      setRendaEsperada(response.data.rendaEsperada);
      setTotalOportunidades(response.data.totalOportunidades);
      setDataFechamento(response.data.dataFechamento);
      setEstaFechado(response.data.estaFechado);
      setEstaGanho(response.data.estaGanho);
      setCategoriaPrevisao(response.data.categoriaPrevisao);
      setNomeCategoriaPrevisao(response.data.nomeCategoriaPrevisao);
      setItemLinhaOportunidade(response.data.itemLinhaOportunidade);
      setDataAlteracaoUltimoEstagio(response.data.dataAlteracaoUltimoEstagio);
      setAnoFiscal(response.data.anoFiscal);
      setTrimestreFiscal(response.data.trimestreFiscal);
      setBeneficioEconomico(response.data.beneficioEconomico);
      setMotivoPerda(response.data.motivoPerda);
      setCap(response.data.cap);
      setDataExecucao(response.data.dataExecucao);
      setDataConclusaoTriagem(response.data.dataConclusaoTriagem);
      setDataRecebimentoDocumentacao(response.data.dataRecebimentoDocumentacao);
      setDeliberacao(response.data.deliberacao);
      setDocumentacaoRecebida(response.data.documentacaoRecebida);
      setEscopo(response.data.escopo);
      setForma(response.data.forma);
      setFormato(response.data.formato);
      setHonorarioProLabore(response.data.honorarioProLabore);
      setHonorarioExito(response.data.honorarioExitoB);
      setIncluidaNaProgramacao(response.data.incluidaNaProgramacao);
      setNumeroProcessoJudicial(response.data.numeroProcessoJudicial);
      setOrigemOportunidade(response.data.origemOportunidade);
      setPrazoExterno(response.data.prazoExterno);
      setPrazoInterno(response.data.prazoInterno);
      setRefinamento(response.data.refinamento);
      setTriagemConcluida(response.data.triagemConcluida);
      setDataApresentacao(response.data.dataApresentacao);
      setObservacao(response.data.observacao);
      setSeguimento(response.data.seguimento);
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
                Informações da oportunidade
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
              <div className="col-6 form-label">
                <label className="form-label">Origem Oportunidade</label>
                <input
                  value={origemOportunidade || ""}
                  onChange={(e) => setOrigemOportunidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data fechamento</label>
                <input
                  value={dataFechamento || ""}
                  onChange={(e) => setDataFechamento(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estágio Classificação </label>
                <input
                  value={estagioClassificacao || ""}
                  onChange={(e) => setEstagioClassificacao(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Probabilidade % </label>
                <input
                  value={probabilidade || ""}
                  onChange={(e) => setProbabilidade(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Estágio Nome
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={estagioNome || ""}
                    onChange={(e) => setEstagioNome(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Identificada Passiva">
                      Identificada Passiva
                    </option>
                    <option value="Identificada Ativa">
                      Identificada Ativa
                    </option>
                    <option value="Programada">Programada</option>
                    <option value="Apresentada">Apresentada</option>
                    <option value="Contratada">Contratada</option>
                    <option value="Documentacao">Documentacao</option>
                    <option value="Triagem">Triagem</option>
                    <option value="Execucao">Execucao</option>
                    <option value="Honorarios">Honorarios</option>
                    <option value="Encerrada">Encerrada</option>
                    <option value="Descartada">Descartada</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Quantia</label>
                <input
                  value={quantia || ""}
                  onChange={(e) => setQuantia(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Segmento de Atuação
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={seguimento || ""}
                    onChange={(e) => setSeguimento(e.target.value)}
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
              <button className="btn btn-secondary m-1">Honorários</button>
              <div className="col-6 form-label">
                <label className="form-label">Honorário Pró Labore</label>
                <input
                  value={honorarioProLabore || ""}
                  onChange={(e) => setHonorarioProLabore(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Honorário Exito</label>
                <input
                  value={honorarioExito || ""}
                  onChange={(e) => setHonorarioExito(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">CAP</label>
                <input
                  value={cap || ""}
                  onChange={(e) => setCap(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Benefício Econômico</label>
                <input
                  value={beneficioEconomico || ""}
                  onChange={(e) => setBeneficioEconomico(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-secondary m-1">
                Informações adicionais
              </button>
              <div className="col-6 form-label">
                <label className="form-label">Prazo Externo</label>
                <input
                  value={prazoExterno || ""}
                  onChange={(e) => setPrazoExterno(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Prazo Interno</label>
                <input
                  value={prazoInterno || ""}
                  onChange={(e) => setPrazoInterno(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-secondary m-1">
                Informações de descrição
              </button>
              <div className="col-12 form-label">
                <label className="form-label">Escopo</label>
                <textarea
                  value={escopo || ""}
                  onChange={(e) => setEscopo(e.target.value)}
                  type="text"
                  rows="3"
                  className="form-control"
                ></textarea>
              </div>
              <button className="btn btn-secondary m-1">
                Outras informações
              </button>
              <div className="col-6">
                <label>
                  Formato
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={formato || ""}
                    onChange={(e) => setFormato(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Parecer">Parecer</option>
                    <option value="Opiniao Legal">Opinião Legal</option>
                    <option value="Contratada">Contratada</option>
                    <option value="Nota Tecnica">Nota Tecnica</option>
                    <option value="Email">Email</option>
                    <option value="Apresentacao PPT">Apresentacao PPT</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Apresentação</label>
                <input
                  value={dataApresentacao || ""}
                  onChange={(e) => setDataApresentacao(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-secondary m-1">Não contratação</button>
              <div className="col-6">
                <label>
                  Motivo Perda
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={motivoPerda || ""}
                    onChange={(e) => setMotivoPerda(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Nao se aplica">Não se aplica</option>
                    <option value="Nao tem interesse">Não tem interesse</option>
                    <option value="Executado por outro">
                      Executado por outro
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Observação</label>
                <textarea
                  value={observacao || ""}
                  onChange={(e) => setObservacao(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>
              <button className="btn btn-secondary m-1">Outros Valores</button>
              <div className="col-6 form-label">
                <label className="form-label">Renda Esperada</label>
                <input
                  value={rendaEsperada || ""}
                  onChange={(e) => setRendaEsperada(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Total de Oportunidades</label>
                <input
                  value={totalOportunidades || ""}
                  onChange={(e) => setTotalOportunidades(e.target.value)}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Está Fechado
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={estaFechado || ""}
                    onChange={(e) => setEstaFechado(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>

              <div className="col-6">
                <label>
                  Está Ganho
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={estaGanho || ""}
                    onChange={(e) => setEstaGanho(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Catégoria Previsão
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={categoriaPrevisao || ""}
                    onChange={(e) => setCategoriaPrevisao(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Forecast">Forecast</option>
                    <option value="BestCase">BestCase</option>
                    <option value="Pipeline">Pipeline</option>
                    <option value="Omitted">Omitted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Nome Catégoria Previsão
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={nomeCategoriaPrevisao || ""}
                    onChange={(e) => setNomeCategoriaPrevisao(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Forecast">Forecast</option>
                    <option value="BestCase">BestCase</option>
                    <option value="Pipeline">Pipeline</option>
                    <option value="Omitted">Omitted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Linha Oportunidade
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={itemLinhaOportunidade || ""}
                    onChange={(e) => setItemLinhaOportunidade(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Alteração Estágio</label>
                <input
                  value={dataAlteracaoUltimoEstagio || ""}
                  onChange={(e) =>
                    setDataAlteracaoUltimoEstagio(e.target.value)
                  }
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Ano Fiscal
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={anoFiscal || ""}
                    onChange={(e) => setAnoFiscal(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Trimestre Fiscal
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={trimestreFiscal || ""}
                    onChange={(e) => setTrimestreFiscal(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Execução</label>
                <input
                  value={dataExecucao || ""}
                  onChange={(e) => setDataExecucao(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Conclusão Triagem</label>
                <input
                  value={dataConclusaoTriagem || ""}
                  onChange={(e) => setDataConclusaoTriagem(e.target.value)}
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">
                  Data Recebimento Documentação
                </label>
                <input
                  value={dataRecebimentoDocumentacao || ""}
                  onChange={(e) =>
                    setDataRecebimentoDocumentacao(e.target.value)
                  }
                  type="date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Documentação Recebida
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={documentacaoRecebida || ""}
                    onChange={(e) => setDocumentacaoRecebida(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>
              <div className="col-6">
                <label>
                  Deliberação
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={deliberacao || ""}
                    onChange={(e) => setDeliberacao(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Forma</label>
                <input
                  value={forma || ""}
                  onChange={(e) => setForma(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Incluida na Programção</label>
                <input
                  value={incluidaNaProgramacao || ""}
                  onChange={(e) => setIncluidaNaProgramacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Número Processo Judicial</label>
                <input
                  value={numeroProcessoJudicial || ""}
                  onChange={(e) => setNumeroProcessoJudicial(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Refinamento</label>
                <input
                  value={refinamento || ""}
                  onChange={(e) => setRefinamento(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <label>
                  Triagem Concluida
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={triagemConcluida || ""}
                    onChange={(e) => setTriagemConcluida(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
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

export default OpportunityEdit;
