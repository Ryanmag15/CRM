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
        <h5 className="card-header">Account Create</h5>
        <div className="card-body">
          <form onSubmit={update}>
            <div className="row">
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
                    {accounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.nome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Descrição</label>
                <input
                  value={descricao || ""}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estágio Nome</label>
                <input
                  value={estagioNome || ""}
                  onChange={(e) => setEstagioNome(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Estágio Classificação</label>
                <input
                  value={estagioClassificacao || ""}
                  onChange={(e) => setEstagioClassificacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
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
              <div className="col-6 form-label">
                <label className="form-label">Probabilidade</label>
                <input
                  value={probabilidade || ""}
                  onChange={(e) => setProbabilidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Renda Esperada</label>
                <input
                  value={rendaEsperada || ""}
                  onChange={(e) => setRendaEsperada(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Total de Oportunidades</label>
                <input
                  value={totalOportunidades || ""}
                  onChange={(e) => setTotalOportunidades(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Está Fechado</label>
                <input
                  value={estaFechado || ""}
                  onChange={(e) => setestaFechado(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data fechamento</label>
                <input
                  value={dataFechamento || ""}
                  onChange={(e) => setdataFechamento(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Está Ganho</label>
                <input
                  value={estaGanho || ""}
                  onChange={(e) => setEstaGanho(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Catégoria Previsão</label>
                <input
                  value={categoriaPrevisao || ""}
                  onChange={(e) => setCategoriaPrevisao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Nome Catégoria Previsão</label>
                <input
                  value={nomeCategoriaPrevisao || ""}
                  onChange={(e) => setNomeCategoriaPrevisao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Linha Oportunidade</label>
                <input
                  value={itemLinhaOportunidade || ""}
                  onChange={(e) => setItemLinhaOportunidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Alteração Estágio</label>
                <input
                  value={dataAlteracaoUltimoEstagio || ""}
                  onChange={(e) =>
                    setDataAlteracaoUltimoEstagio(e.target.value)
                  }
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Ano Fiscal</label>
                <input
                  value={anoFiscal || ""}
                  onChange={(e) => setAnoFiscal(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Trimestre Fiscal</label>
                <input
                  value={trimestreFiscal || ""}
                  onChange={(e) => setTrimestreFiscal(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Trimestre Fiscal</label>
                <input
                  value={beneficioEconomico || ""}
                  onChange={(e) => setBeneficioEconomico(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>

              <div className="col-6 form-label">
                <label className="form-label">Motivo Perda</label>
                <input
                  value={motivoPerda || ""}
                  onChange={(e) => setMotivoPerda(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">CAP</label>
                <input
                  value={cap || ""}
                  onChange={(e) => setCap(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Execução</label>
                <input
                  value={dataExecucao || ""}
                  onChange={(e) => setDataExecucao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Conclusão Triagem</label>
                <input
                  value={dataConclusaoTriagem || ""}
                  onChange={(e) => setDataConclusaoTriagem(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Documentação Recebida</label>
                <input
                  value={dataRecebimentoDocumentacao || ""}
                  onChange={(e) =>
                    setDataRecebimentoDocumentacao(e.target.value)
                  }
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Deliberação</label>
                <input
                  value={deliberacao || ""}
                  onChange={(e) => setDeliberacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Documentação Recebida</label>
                <input
                  value={documentacaoRecebida || ""}
                  onChange={(e) => setDocumentacaoRecebida(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Escopo</label>
                <input
                  value={escopo || ""}
                  onChange={(e) => setEscopo(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
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
                <label className="form-label">Formato</label>
                <input
                  value={formato || ""}
                  onChange={(e) => setFormato(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Honorário Pró Labore</label>
                <input
                  value={honorarioProLabore || ""}
                  onChange={(e) => setHonorarioProLabore(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Honorário Exito</label>
                <input
                  value={honorarioExito || ""}
                  onChange={(e) => setHonorarioExito(e.target.value)}
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
                <label className="form-label">Origem Oportunidade</label>
                <input
                  value={origemOportunidade || ""}
                  onChange={(e) => setOrigemOportunidade(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Prazo Externo</label>
                <input
                  value={prazoExterno || ""}
                  onChange={(e) => setPrazoExterno(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Prazo Interno</label>
                <input
                  value={prazoInterno || ""}
                  onChange={(e) => setPrazoInterno(e.target.value)}
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
              <div className="col-6 form-label">
                <label className="form-label">Triagem Concluida</label>
                <input
                  value={triagemConcluida || ""}
                  onChange={(e) => setTriagemConcluida(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Data Apresentação</label>
                <input
                  value={dataApresentacao || ""}
                  onChange={(e) => setDataApresentacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Observação</label>
                <input
                  value={observacao || ""}
                  onChange={(e) => setObservacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Seguimento</label>
                <input
                  value={seguimento || ""}
                  onChange={(e) => setSeguimento(e.target.value)}
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

export default OpportunityEdit;
