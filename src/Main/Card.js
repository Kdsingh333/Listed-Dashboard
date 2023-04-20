
import React from 'react';
import './Card.css';
import { Space } from "antd"



function Card() {
  return (
    <>
      <Space direction='horizontal'>
        <Cardtemp style={{ backgroundColor: "rgba(221, 239, 224)" }} Iconsrc={"img1"} title={"Total Revenu"} value={"$2,212"}></Cardtemp>
        <Cardtemp style={{ backgroundColor: "rgb(244, 236, 221)" }} Iconsrc={"img2"} title={"Total Transaction"} value={"1520"}></Cardtemp>
        <Cardtemp style={{ backgroundColor: "rgb(239, 218, 218)" }} Iconsrc={"img3"} title={"Total Likes"} value={"1,537"}></Cardtemp>
        <Cardtemp style={{ backgroundColor: "rgb(222, 224, 239)" }} Iconsrc={"img4"} title={"Total User"} value={827}></Cardtemp>
      </Space>
    </>
  )
}
const Cardtemp = (props) => {
  return (
    <div style={props.style} className="card">
      <div className="card-header">
        <img src={`/image/${props.Iconsrc}.svg`} alt="icon" />
      </div>
      <div className="card-body">
        <h6>{props.title}</h6>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default Card;