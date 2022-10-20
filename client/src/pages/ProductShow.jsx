import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Search from "../components/Search";

const endpoint = "http://localhost:8000/api";
const ProductShow = () => {
  const [products, setProducts] = useState([]);

  const keys = ["nome", "ativo", "descricao"];
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  };

  return (
    <div className="d-grid gap-2">
      <div className="row">
        <div className="col-8">
          <Form className="d-flex m-1">
            <Form.Control
              type="text"
              placeholder="Filtro"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </div>
        <div className="col-4">
          <Link
            to="/product/create"
            className="col-11 btn btn-outline-primary m-1 "
          >
            Create
          </Link>
        </div>
      </div>
      <Table hover className="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th className="" scope="col">
              Nome
            </th>
            <th className="col-8" scope="col">
              Descrição
            </th>
            <th className="text-center" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {Search(products, query, keys).map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.nome}</td>
              <td>{product.descricao}</td>
              <td className="text-center">
                <Link
                  to={`edit/${product.id}`}
                  className="btn btn-outline-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-outline-danger m-1"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductShow;
