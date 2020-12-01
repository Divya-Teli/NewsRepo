import React from "react";
import { useHistory } from "react-router";

export default function OneList(props) {
  let history = useHistory();

  const { publishedAt, title, urlToImage } = props.singleList;
  const { id, name } = props.singleList.source;
  var date = new Date(publishedAt);

  return (
    <div className="col-4 mb-4">
      <div className="card" style={{ height: "70vh" }}>
        <img
          className="card-img-top"
          src={urlToImage}
          height={350}
          width={100}
        />

        <div className="card-body">
          <h4 className="card-title" style={{ color: "#2471A3 " }}>
            {title.length > 170 ? title.slice(0, 170) : title}
          </h4>
          <h6 className="card-text" style={{ color: "20px" }}>
            Published at :{date.toLocaleDateString()}
          </h6>
          <p className="card-text">source :{name}</p>
        </div>
        <div
          className="btn btn-info"
          onClick={() =>
            history.push({
              pathname: "/oneList",
              state: { data: props.singleList },
            })
          }
        >
          View
        </div>
      </div>
    </div>
  );
}
