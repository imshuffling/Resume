import React from "react";
import Helmet from "react-helmet";

export default function Layout({ children }) {
  return (
    <div className="print:p-0 print:m-0 container my-4 px-2 md:my-6 print:mx-auto">
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
