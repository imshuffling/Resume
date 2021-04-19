import React from "react";
import Layout from "./src/components/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
require("typeface-karla");

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      <GlobalStyles />
      {element}
    </Layout>
  );
}
