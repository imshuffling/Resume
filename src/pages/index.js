import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulResume {
          id
          title
          body {
            childContentfulRichText {
              html
            }
          }
        }
      }
    `}
    render={({
      contentfulResume: {
        body: {
          childContentfulRichText: { html },
        },
      },
    }) => (
      <Layout>
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )}
  />
);

export default HomePage;
