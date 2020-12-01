import React, { useState, useEffect } from "react";
import axios from "axios";
import OneList from "./OneList";
import Spinner from "./Spinner";
import "./css/searchBar.css";
import ReactPaginate from "react-paginate";

function DisplayList() {
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [perPage, setperPage] = useState(5);
  const [offset, setOffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  const handlePageClick = async (e) => {
    console.log("selected", e.selected);
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    await setcurrentPage(selectedPage);
    await setOffset(offset);
    getData();
  };
  const getData = () => {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-01&sortBy=publishedAt&apiKey=c2c2f3da5fab4ce58a8ac3037c7d29e5"
      )
      .then(async (res) => {
        const data = res.data.articles.filter((item) => {
          return (
            item.source.name
              .trim()
              .toLowerCase()
              .indexOf(search.trim().toLowerCase()) > -1
          );
        });

        const listOfNews = data.slice(offset, offset + perPage);
        await setpageCount(Math.ceil(Object.keys(data).length / perPage));
        if (listOfNews.length === 0) {
          await setData(data);
        } else {
          await setData(listOfNews);
        }
        setList(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Spinner />;
  else {
    return (
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 10,
            }}
          >
            <h5 className="mr-2 mt-1" style={{ display: "flex" }}>
              Search news by source :
            </h5>
            <input
              onChange={async (e) => {
                setSearch(e.target.value);
                await getData();
              }}
              type="text"
              style={{
                width: "47%",
                display: "flex",
                justifyContent: "center",
              }}
              value={search}
              placeholder="search by source"
            />
          </div>
          <div className="d-flex row p-2 pt-9">
            {data.map((item, key) => {
              return <OneList singleList={item} key={key} />;
            })}
          </div>
          <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        {/* )} */}
      </div>
    );
  }
}
export default DisplayList;
