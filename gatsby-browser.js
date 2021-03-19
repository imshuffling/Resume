import React from "react";
import Layout from "./src/components/Layout";
require("typeface-karla");

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
