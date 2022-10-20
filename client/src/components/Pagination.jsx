import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ dadosPorPagina, totalDados, paginate, activePage }) => {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalDados / dadosPorPagina);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${
                number == activePage ? "page-item-active" : ""
              }`}
            >
              <NavLink
                to="#"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
