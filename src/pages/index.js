import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import ContentModules from "../content-modules";
import Sidebar from "../sidebar";
import styled from "styled-components";

const ModuleStyles = styled.section`
  grid-column-gap: 40px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 30em) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 60px;
  }

  .headline {
    border-bottom: 3px solid #000;
    text-transform: uppercase;
    font-weight: bold;
  }

  .mainContent {
    order: 2;
    @media (min-width: 30em) {
      order: 1;
    }
  }

  .sidebar {
    order: 1;
    margin-bottom: calc(10px + 1.05vw);
    @media (min-width: 30em) {
      order: 2;
    }
  }
`;

const ResumePage = ({ data }) => {
  const { mainContent, sidebar } = data.allContentfulResume.edges[0].node;

  return (
    <>
      <Header header={data.allContentfulResume.edges[0].node} />
      <ModuleStyles className="modules">
        <main className="module mainContent">
          <h3 className="headline">Experience</h3>
          {mainContent && <ContentModules mainContent={mainContent} />}
        </main>
        <aside className="module sidebar">
          {sidebar && <Sidebar sidebar={sidebar} />}
        </aside>
      </ModuleStyles>
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
