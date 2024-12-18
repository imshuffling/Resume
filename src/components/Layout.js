import React from "react";
import Helmet from "react-helmet";
import { useMediaQuery } from "react-responsive";

export default function Layout({ children }) {
  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

  if (isPrint) {
    return (
      <div className="p-1 my-1">
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

  return (
    <div className="container mx-auto my-3 px-3 md:px-4 md:my-6">
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
