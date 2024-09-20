import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import ContentModules from "../content-modules";
import Sidebar from "../sidebar";

const ResumePage = ({ data }) => {
  const { mainContent, sidebar } = data.allContentfulResume.edges[0].node;

  return (
    <>
      <Header header={data.allContentfulResume.edges[0].node} />
      <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-6 md:gap-2 modules">
        <main className="flex flex-col gap-1 md:gap-4 module mainContent prose">
          <h3 className="headline text-lg border-b-2">Experience</h3>
          {mainContent && <ContentModules mainContent={mainContent} />}
        </main>
        <aside className="module sidebar flex flex-col gap-4">
          {sidebar && <Sidebar sidebar={sidebar} />}
        </aside>
      </div>
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
          imageHover {
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
