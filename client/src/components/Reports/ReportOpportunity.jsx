import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const endpoint = "http://localhost:8000/api";

const ReportAccount = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    getAllOpportunities();
  }, []);

  const getAllOpportunities = async () => {
    const response = await axios.get(`${endpoint}/opportunities`);
    setOpportunities(response.data);
  };

  // var gerarCsv = function () {
  //   var csv =
  //     " account| nome| descricao| estagioNome| estagioClassificacao| quantia| probabilidade| rendaEsperada| totalOportunidades| dataFechamento| estaFechado| estaGanho| categoriaPrevisao| nomeCategoriaPrevisao| itemLinhaOportunidade| dataAlteracaoUltimoEstagio| anoFiscal| trimestreFiscal| beneficioEconomico| motivoPerda| cap|  dataExecucao| dataConclusaoTriagem| dataRecebimentoDocumentacao| deliberacao| documentacaoRecebida| escopo| forma| formato| honorarioProLabore| honorarioExito| incluidaNaProgramacao| numeroProcessoJudicial| origemOportunidade| prazoExterno| prazoInterno| refinamento| triagemConcluida| dataApresentacao| observacao| seguimento\n";

  //   opportunities.forEach(function (row) {
  //     csv += row.id;
  //     csv += "|" + row.account.nome;
  //     csv += "|" + row.nome;
  //     csv += "|" + row.descricao;
  //     csv += "|" + row.estagioClassificacao;
  //     csv += "|" + row.quantia;
  //     csv += "|" + row.probabilidade;
  //     csv += "|" + row.rendaEsperada;
  //     csv += "|" + row.totalOportunidades;
  //     csv += "|" + row.dataFechamento;
  //     csv += "|" + row.estaFechado;
  //     csv += "|" + row.estaGanho;
  //     csv += "|" + row.categoriaPrevisao;
  //     csv += "|" + row.nomeCategoriaPrevisao;
  //     csv += "|" + row.itemLinhaOportunidade;
  //     csv += "|" + row.dataAlteracaoUltimoEstagio;
  //     csv += "|" + row.anoFiscal;
  //     csv += "|" + row.trimestreFiscal;
  //     csv += "|" + row.beneficioEconomico;
  //     csv += "|" + row.motivoPerda;
  //     csv += "|" + row.cap;
  //     csv += "|" + row.dataExecucao;
  //     csv += "|" + row.dataConclusaoTriagem;
  //     csv += "|" + row.dataRecebimentoDocumentacao;
  //     csv += "|" + row.deliberacao;
  //     csv += "|" + row.documentacaoRecebida;
  //     csv += "|" + row.escopo;
  //     csv += "|" + row.forma;
  //     csv += "|" + row.formato;
  //     csv += "|" + row.honorarioProLabore;
  //     csv += "|" + row.honorarioExito;
  //     csv += "|" + row.incluidaNaProgramacao;
  //     csv += "|" + row.numeroProcessoJudicial;
  //     csv += "|" + row.origemOportunidade;
  //     csv += "|" + row.prazoExterno;
  //     csv += "|" + row.prazoInterno;
  //     csv += "|" + row.refinamento;
  //     csv += "|" + row.triagemConcluida;
  //     csv += "|" + row.dataApresentacao;
  //     csv += "|" + row.observacao;
  //     csv += "|" + row.seguimento;
  //     csv += "\n";
  //   });

  //   var hiddenElement = document.createElement("a");
  //   hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  //   hiddenElement.target = "_blank";
  //   hiddenElement.download = "Opportunities.csv";
  //   hiddenElement.click();
  // };

  return (
    <div>
      <div className="d-grid gap-2">
        <CSVLink
          data={opportunities}
          filename={"Opportunities.csv"}
          className="btn btn-outline-primary m-1"
          target="_blank"
        >
          Oportunidades
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportAccount;
