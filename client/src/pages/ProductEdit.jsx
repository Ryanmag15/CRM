import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/product/";

function ProductEdit() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ativo, setAtivo] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nome: nome,
      descricao: descricao,
      ativo: ativo,
      classificacao: classificacao,
    });
    navigate("/product");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNome(response.data.nome);
      setDescricao(response.data.descricao);
      setAtivo(response.data.ativo);
      setClassificacao(response.data.classificacao);
    };
    getProductById();
  }, []);

  return (
    <div>
      <div className="card m-2 ">
        <h5 className="card-header">Product Edit</h5>
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
              <div className="col-6 form-label">
                <label className="form-label">Descrição</label>
                <textarea
                  value={descricao || ""}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="form-control"
                  rows="4"
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
                <label className="form-label">Classificacao</label>
                <input
                  value={classificacao || ""}
                  onChange={(e) => setClassificacao(e.target.value)}
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

export default ProductEdit;
