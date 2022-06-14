import React from "react";

const Button = ({ name, link }) => {
    return <a target="_blank" href={link} rel="noreferrer" ><button className="btn">{name}</button></a>
}

export default Button;