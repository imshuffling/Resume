import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ data }) => {

  const Bold = ({ children }) => <strong>{children}</strong>
  const Text = ({ children }) => <p>{children}</p>

  const options = {
      renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
      renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  }

  return (
      <Layout>
        <article className="markdown-body" key={data.allContentfulResume.edges[0].node.id}>
          {documentToReactComponents(data.allContentfulResume.edges[0].node.body.json, options)}
        </article>
      </Layout>
  )
}

export const query = graphql`
  query pageQuery {
    allContentfulResume(filter:{slug:{eq:"david-riches"}}) {
      edges {
        node {
          title
          id
          slug
          body {
            json
          }
        }
      }
    }
  }
`
