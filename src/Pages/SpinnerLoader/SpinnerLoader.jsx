import React from "react";
import "./SpinnerLoader.css";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const customCSS = css`
display: block;
  margin: 0 auto;
`
const SpinnerLoader = () => {
  return (
    <div className="ClipLoader-spinner">
      <ClipLoader css={customCSS} color='#CC9544' size={80} loading/>
    </div>
  );
};

export default SpinnerLoader;