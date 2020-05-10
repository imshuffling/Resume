import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout';
import ContentModules from '../content-modules'
import Sidebar from '../sidebar'
import Img from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faLink, faAt } from '@fortawesome/free-solid-svg-icons'

export default ({ data }) => {
  const { title, introText, location, phone, email, website, mainContent, sidebar, image } = data.allContentfulResume.edges[0].node

  return (
      <Layout>
        <div className="intro">
          <div>
            <h1>{title}</h1>
            <h2>{introText}</h2>
          </div>
          <Img fluid={image.fluid} />
        </div>

        <div className="details">
          <div><FontAwesomeIcon size='1x' icon={faMapMarkerAlt} />{location}</div>
          <div><FontAwesomeIcon size='1x' icon={faPhoneAlt} /><a href={`tel:${phone}`}>{phone}</a></div>
          <div><FontAwesomeIcon size='1x' icon={faAt} /><a href={`mailto:${email}`}>{email}</a></div>
          <div><FontAwesomeIcon size='1x' icon={faLink} /><a href={`https://${website}`}>{website}</a></div>
        </div>

        <section className="modules">
          <main className="module mainContent">
            <h3 className="headline">Experience</h3>
            {mainContent && <ContentModules mainContent={mainContent} />}
          </main>
          <aside className="module sidebar">{sidebar && <Sidebar sidebar={sidebar} />}</aside>
        </section>

      </Layout>
  )
}

export const query = graphql`
query pageQuery {
  allContentfulResume(filter: {slug: {eq: "david-riches"}}) {
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
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyContentfulFluid
          }
        }
        mainContent {
          __typename
            ... on ContentfulJob {
              title
              company
              date(formatString: "MM/YYYY")
              to(formatString: "MM/YYYY")
              summary {
                json
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
                json
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
              }
            }
        }
      }
    }
  }
}
`
