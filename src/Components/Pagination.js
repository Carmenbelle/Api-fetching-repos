import React from "react";

const Pagination = ({ perPage, totalPages, paginate }) => {
  const pageNumbs = [];

  for (let i = 1; i <= Math.ceil(totalPages / perPage); i++) {
    pageNumbs.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbs.map((number) => (
          <li key={number} className="page-items">
            <a
              onClick={() => paginate(number)}
              href=""
              className="sub-page-items"
            />
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
