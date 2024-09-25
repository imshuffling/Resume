import React from "react";
import Helmet from "react-helmet";

export default function Layout({ children }) {
  return (
    <div className="container my-4 md:my-6 px-2">
      <Helmet
        title="Resume - David Riches 🚀"
        meta={[
          { name: "description", content: "Resume - David Riches" },
          {
            name: "keywords",
            content: "Front-end developer London resume",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      {children}
    </div>
  );
}
