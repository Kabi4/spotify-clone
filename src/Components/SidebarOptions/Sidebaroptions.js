import React from "react";
import './Sidebaroptions.css';

const Sidebaroptions = (props) => {
  return (
    <div style={{height: props.Icon?"40px":"30px"}} className="sidebarOptions">
      {props.Icon && <props.Icon className="sidebarOptions__icon" /> }
      {props.Icon ? <h4>{props.title}</h4> : <p style={{cursor: props.style==="disable"?"not-allowed":"pointer"}} >{props.title}</p>}
    </div>
  );
};

export default Sidebaroptions;
