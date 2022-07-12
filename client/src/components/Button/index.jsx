import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return <Link to={`/${name}`}>{name}</Link>;
};

export default Button;
