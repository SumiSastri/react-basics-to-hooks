import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/core";

const loaderCSS = css`
  margin-top: 25px;
  padding: 5px;
`;

const Loading = ({ isLoading }) => {
  return (
    <div>
      <h1>PAGE LOADING</h1>
      <BounceLoader css={loaderCSS} size={72} color="red" isLoading />
      <BarLoader css={loaderCSS} size={72} color="white" isLoading />
      <BeatLoader css={loaderCSS} size={24} color="yellow" isLoading />
    </div>
  );
};

export default Loading;
