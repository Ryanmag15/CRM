import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const endpoint = "http://localhost:8000/api";

const ReportAccount = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    const response = await axios.get(`${endpoint}/contacts`);
    setContacts(response.data);
  };

  // var gerarCsv = function () {
  //   var csv =
  //     "id| account| tratamento| primeiroNome| ultimoNome| nomeDoMeio| sufixo| outraRua| outraCidade| outroEstado| outroCep| outroPais| rua| cidade| estado| cep| pais| telefone| celular| telefoneCasa| email| titulo| departamento| origemContato| recebeInformativo| unidade| linkedin\n";

  //   contacts.forEach(function (row) {
  //     csv += row.id;
  //     csv += "|" + row.account.nome;
  //     csv += "|" + row.tratamento;
  //     csv += "|" + row.primeiroNome;
  //     csv += "|" + row.ultimoNome;
  //     csv += "|" + row.nomeDoMeio;
  //     csv += "|" + row.sufixo;
  //     csv += "|" + row.outraRua;
  //     csv += "|" + row.outraCidade;
  //     csv += "|" + row.outroEstado;
  //     csv += "|" + row.outroCep;
  //     csv += "|" + row.outroPais;
  //     csv += "|" + row.rua;
  //     csv += "|" + row.cidade;
  //     csv += "|" + row.estado;
  //     csv += "|" + row.cep;
  //     csv += "|" + row.pais;
  //     csv += "|" + row.telefone;
  //     csv += "|" + row.celular;
  //     csv += "|" + row.telefoneCasa;
  //     csv += "|" + row.email;
  //     csv += "|" + row.titulo;
  //     csv += "|" + row.departamento;
  //     csv += "|" + row.origemContato;
  //     csv += "|" + row.recebeInformativo;
  //     csv += "|" + row.unidade;
  //     csv += "|" + row.linkedin;
  //     csv += "\n";
  //   });

  //   var hiddenElement = document.createElement("a");
  //   hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  //   hiddenElement.target = "_blank";
  //   hiddenElement.download = "Contacts.csv";
  //   hiddenElement.click();
  // };

  return (
    <div>
      <div class="d-grid gap-2">
        <CSVLink
          data={contacts}
          filename={"Contacts.csv"}
          className="btn btn-outline-primary m-1"
          target="_blank"
        >
          Contatos
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportAccount;
