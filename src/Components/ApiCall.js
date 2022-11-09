import React, { useState, useEffect } from "react";
import Datas from "./Datas";
import axios from "axios";
import Pagination from "./Pagination";

const ApiCall = () => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const res = await axios.get("https://api.github.com/users/carmenbelle/repos");
      setDatas(res.data);
      //  console.log(res.data);
      setLoading(false);
    };
    fetchDatas();
  }, []);

  console.log(datas);
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentIndexPage = datas.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumbs) => setCurrentPage(pageNumbs);

  return (
    <div className="container">
      <h1 className="text-page">My Repos</h1>
      <Datas datas={currentIndexPage} loading={loading} />
      <Pagination
        perPage={perPage}
        totalPages={datas.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ApiCall;
