import React from "react";
import '../App.css'

export default function Logo(props) {

  const { h, w } = props
  return (
    // <div className={`h-${h} w-${w}`}>

      <div className={`logo-asesorias w-${w} h-${h}`} ></div>
    // </div>
  );
}
