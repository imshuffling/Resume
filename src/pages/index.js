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
        <div className="w-full modules flex flex-row gap-6">
          <main className="w-2/3 flex flex-col gap-2 prose">
            <ContentModules mainContent={mainContent} />
          </main>
          <aside className="w-1/3 flex flex-col gap-2 prose">
            <Sidebar sidebar={sidebar} />
          </aside>
        </div>
      ) : // Regular layout for screen modes (tablet/mobile/desktop)
      isTabletOrMobile ? (
        <main className="modules prose prose-sm flex flex-col gap-4 md:prose-md lg:prose-md xl:prose-lg">
          <Sidebar sidebar={sidebar} />
          <ContentModules mainContent={mainContent} />
        </main>
      ) : (
        <div className="modules grid md:grid-cols-[2fr_1fr] md:gap-[70px]">
          <main className="prose prose-sm flex flex-col gap-4 md:prose-md lg:prose-md xl:prose-lg">
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
              companyLink
              date(formatString: "MM/YYYY")
              to(formatString: "MM/YYYY")
              summary {
                raw
              }
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
            ... on ContentfulEducation {
              title
              university
              to(formatString: "MM/YYYY")
              end(formatString: "MM/YYYY")
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
