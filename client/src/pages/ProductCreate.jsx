import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/account";

function ProductCreate() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ativo, setAtivo] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      nome: nome,
      descricao: descricao,
      ativo: ativo,
      classificacao: classificacao,
    });
    navigate("/product");
  };
  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Product Create</h5>
        <div className="card-body">
          <form onSubmit={store}>
            <div className="row">
              <button className="btn btn-secondary m-1">
                Informações da tese
              </button>
              <div className="col-6 form-label">
                <label className="form-label">Nome</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Descrição</label>
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-6">
                <label>
                  Ativo
                  <select
                    className="form-select col-12"
                    aria-label="Default select example"
                    value={ativo || ""}
                    onChange={(e) => setAtivo(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                  </select>
                </label>
              </div>
              <div className="col-6 form-label">
                <label className="form-label">Classificação</label>
                <textarea
                  value={classificacao}
                  onChange={(e) => setClassificacao(e.target.value)}
                  type="text"
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Criar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
