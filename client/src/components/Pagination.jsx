import React from "react";

const Pagination = ({ dadosPorPagina, totalDados, paginate }) => {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalDados / dadosPorPagina);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
