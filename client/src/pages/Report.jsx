import React from "react";

import ReportAccount from "../components/Reports/ReportAccount";
import ReportContact from "../components/Reports/ReportContact";
import ReportOpportunity from "../components/Reports/ReportOpportunity";
import ReportProduct from "../components/Reports/ReportProduct";

const Report = () => {
  return (
    <div>
      <div class="d-grid gap-2">
        <button className="btn btn-outline-warning m-1 ">
          <h1>Bem vindo aos Relatórios</h1>
        </button>
        <button className="btn btn-outline-danger m-1 ">
          <h5>
            Quando pegar um CSV, Clique em Dados no Excel, Selecione Obter dados
            de texto CSV, Selecione o Arquivo, No Campo: Origem do Arquivo
            Selecione UTF-8 Unicode, No Campo Delimitador Clique em
            Personalizado e Coloque Esse Simbolo Que Está Dentro das Aspas "|"
            Ele se Chama Pipe, Ele fica do lado da Letra Z.
          </h5>
        </button>
      </div>
      <ReportAccount />
      <ReportContact />
      <ReportOpportunity />
      <ReportProduct />
    </div>
  );
};

export default Report;
