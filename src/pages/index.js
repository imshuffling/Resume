import { graphql } from "gatsby";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../components/Header";
import ContentModules from "../content-modules";
import Sidebar from "../sidebar";

const ResumePage = ({ data }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 959 });
  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

  const { mainContent, sidebar } = data.allContentfulResume.edges[0].node;

  return (
    <>
      <Header header={data.allContentfulResume.edges[0].node} />

      {/* Separate rendering block for print mode */}
      {isPrint ? (
        <main className="modules flex flex-col gap-4">
          <ContentModules mainContent={mainContent} />
          <Sidebar sidebar={sidebar} />
        </main>
      ) : // Regular layout for screen modes (tablet/mobile/desktop)
      isTabletOrMobile ? (
        <main className="modules prose prose-sm flex flex-col gap-4 md:prose-md lg:prose-lg xl:prose-xl">
          <Sidebar sidebar={sidebar} />
          <ContentModules mainContent={mainContent} />
        </main>
      ) : (
        <div className="modules grid md:grid-cols-[2fr_1fr] md:gap-[70px]">
          <main className="prose prose-sm flex flex-col gap-4 md:prose-md lg:prose-lg xl:prose-xl">
            {mainContent && <ContentModules mainContent={mainContent} />}
          </main>
          <aside className="module sidebar flex flex-col gap-4 md:gap-6">
            {sidebar && <Sidebar sidebar={sidebar} />}
          </aside>
        </div>
      )}
    </>
  );
};

export default ResumePage;

export const query = graphql`
  query pageQuery {
    allContentfulResume(filter: { slug: { eq: "david-riches" } }) {
      edges {
        node {
          title
          id
          slug
          introText
          location
          phone
          email
          website
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          mainContent {
            __typename
            ... on ContentfulJob {
              title
              company
              date(formatString: "MM/YYYY")
              to(formatString: "MM/YYYY")
              summary {
                raw
              }
            }
            ... on ContentfulEducation {
              title
              university
              to(formatString: "MM/YYYY")
              end(formatString: "MM/YYYY")
            }
          }
          sidebar {
            __typename
            ... on ContentfulSummary {
              title
              body {
                raw
              }
            }
            ... on ContentfulSkills {
              title
              skill
            }
            ... on ContentfulCertification {
              title
              items {
                id
                title
                year
                link
                type
                linkType
              }
            }
          }
        }
      }
    }
  }
`;
