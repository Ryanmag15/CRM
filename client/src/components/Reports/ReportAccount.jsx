import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const endpoint = "http://localhost:8000/api";

const ReportAccount = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpoint}/accounts`);
    setAccounts(response.data);
  };

  console.log(accounts);

  var gerarCsv = function () {
    var csv =
      "id| nome| tipo| rua| cidade| cep| estado| pais| siteWeb| setor| receitaAnual| funcionarios| descricao|auditoriaIndependente| cnpj| capital| dataEncerramento| demandasJuridicas| estrategiaCliente| marcas| metaAnuais| naturezaJuridica| observacaoRegimeEspecial| origemConta| outrasRelevantes| principaisProdutos|principalNecessidade| regimeEspecial| segmentoAtuacao| socAnual| statusConta| razaoSocial| quantidadeOportunidadesGanhas| dataFundacao| projeto\n";

    accounts.forEach(function (row) {
      csv += row.id;
      csv += "|" + row.nome;
      csv += "|" + row.tipo;
      csv += "|" + row.rua;
      csv += "|" + row.cidade;
      csv += "|" + row.cep;
      csv += "|" + row.estado;
      csv += "|" + row.pais;
      csv += "|" + row.siteWeb;
      csv += "|" + row.setor;
      csv += "|" + row.receitaAnual;
      csv += "|" + row.funcionarios;
      csv += "|" + row.descricao;
      csv += "|" + row.capital;
      csv += "|" + row.auditoriaIndependente;
      csv += "|" + row.cnpj;
      csv += "|" + row.capital;
      csv += "|" + row.dataEncerramento;
      csv += "|" + row.demandasJuridicas;
      csv += "|" + row.estrategiaCliente;
      csv += "|" + row.marcas;
      csv += "|" + row.metaAnuais;
      csv += "|" + row.naturezaJuridica;
      csv += "|" + row.observacaoRegimeEspecial;
      csv += "|" + row.origemConta;
      csv += "|" + row.outrasRelevantes;
      csv += "|" + row.principaisProdutos;
      csv += "|" + row.principalNecessidade;
      csv += "|" + row.regimeEspecial;
      csv += "|" + row.segmentoAtuacao;
      csv += "|" + row.socAnual;
      csv += "|" + row.statusConta;
      csv += "|" + row.razaoSocial;
      csv += "|" + row.quantidadeOportunidadesGanhas;
      csv += "|" + row.dataFundacao;
      csv += "|" + row.projeto;
      csv += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Accounts.csv";
    hiddenElement.click();
  };

  return (
    <div>
      <div class="d-grid gap-2">
        <button
          onClick={() => gerarCsv()}
          className="btn btn-outline-primary m-1"
        >
          Contas
        </button>
      </div>
    </div>
  );
};

export default ReportAccount;
