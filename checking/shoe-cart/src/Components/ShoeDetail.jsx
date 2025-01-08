import React from "react";
import { useParams } from "react-router";
import { GiBarrier } from "react-icons/gi";

const ShoeDetail = ({ value }) => {
  const params = useParams();
  return (
    <div style={{marginTop: "15rem", textAlign: "center"}}>
      <h1 style={{ fontSize: "5rem",  }}>
        <GiBarrier/>
      </h1>
      <p style={{fontSize:"30px"}}>Working</p>
    </div>
  );
};

export default ShoeDetail;
