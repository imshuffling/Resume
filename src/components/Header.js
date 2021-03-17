import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaAt } from 'react-icons/fa'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function Header(props) {
  const {
    title,
    introText,
    location,
    phone,
    email,
    website,
    image,
  } = props.header

  const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin-bottom: 40px;

    > div {
      flex: 1 1 auto;
    }

    h1 {
      font-size: 3em;
      line-height: calc(18px + 3vw);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: -2px;
      margin: 0;
    }

    h2 {
      color: var(--blue);
      font-weight: bold;
      margin: 0;
    }

    .gatsby-image-wrapper {
      margin-bottom: 20px;
      max-width: 190px;
    }

    .details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
      padding: 15px 0;
      grid-row-gap: 10px;
      width: 100%;

      svg {
        margin-right: 8px;
        fill: var(--primary-colour);
      }
    }
  `

  return (
    <HeaderStyles className="intro">
      <div>
        <h1>{title}</h1>
        <h2>{introText}</h2>
        <div className="details">
          <div>
            <FaMapMarkerAlt />
            {location}
          </div>
          <div>
            <FaPhoneAlt />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div>
            <FaAt />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>
            <FaLink />
            <a href={`https://${website}`}>{website}</a>
          </div>
        </div>
      </div>
      <Img fluid={image.fluid} />
    </HeaderStyles>
  )
}
