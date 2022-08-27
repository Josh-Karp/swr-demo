import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { SWRConfig } from "swr";
import App from "./App";

const fetcher = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </StrictMode>,
  rootElement
);
