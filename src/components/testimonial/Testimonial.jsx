import React, { useContext } from "react";
import myContext from "../../context/data/MyContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return <div></div>;
}

export default Testimonial;
