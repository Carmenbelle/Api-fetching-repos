import React from "react";

const Datas = ({ datas, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <main className="nain-container">
      <>
        {datas.map((data) => (
          <li key={data.id} className="list-items">
            {data.name}
          </li>
        ))}
      </>
    </main>
  );
};

export default Datas;
