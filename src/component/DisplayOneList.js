import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import Spinner from "./Spinner";

function DisplayOneList(props) {
  let history = useHistory();

  const [item, setItem] = useState(
    history.location.state.data ? history.location.state.data : []
  );
  const { author, description, publishedAt, title, urlToImage } = item;
  const { id, name } = item.source;
  const [loading, setLoading] = useState(false);
  var date = new Date(publishedAt);
  if (loading) return <Spinner />;
  return (
    item && (
      <div class="content" style={{ display: "flex", padding: 40 }}>
        <img src={urlToImage} style={{ width: "30%", paddingRight: 20 }} />
        <div>
          <h3 style={{ color: "#2471A3 " }}>{title}</h3>
          <p>- by {author}</p>
          <p>{description}</p>
          <p>Published at :{date.toLocaleDateString()}</p>
          <p>source :{name}</p>
        </div>
      </div>
    )
  );
}

export default DisplayOneList;
