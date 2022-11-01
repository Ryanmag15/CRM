import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const endpoint = "http://localhost:8000/api";

const ReportAccount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  // var gerarCsv = function () {
  //   var csv = "id| nome| descricao| ativo| classificacao\n";

  //   products.forEach(function (row) {
  //     csv += row.id;
  //     csv += "|" + row.nome;
  //     csv += "|" + row.descricao;
  //     csv += "|" + row.ativo;
  //     csv += "|" + row.classificacao;

  //     csv += "\n";
  //   });

  //   var hiddenElement = document.createElement("a");
  //   hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  //   hiddenElement.target = "_blank";
  //   hiddenElement.download = "Products.csv";
  //   hiddenElement.click();
  // };

  return (
    <div>
      <div className="d-grid gap-2">
        <CSVLink
          data={products}
          filename={"Products.csv"}
          className="btn btn-outline-primary m-1"
          target="_blank"
        >
          Produtos/Teses
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportAccount;
