import { useState } from "react";
import NavBar from "./NavBar";

const Form = (props: { v1: string; setV1: (v: string) => void }) => {
  return (
    <>
      <label htmlFor="formFile" className="form-label"></label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        onChange={(e) => props.setV1(e.target.value)}
      />
    </>
  );
};

export default Form;
