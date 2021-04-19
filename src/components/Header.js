import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaAt } from "react-icons/fa";
// import Img from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 70px 1fr;
  margin-bottom: 0;

  @media (min-width: 30em) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 60px;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 3em;
    line-height: calc(18px + 7vw);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -2px;
    margin: 0;
    @media (min-width: 30em) {
      line-height: calc(18px + 3vw);
    }
  }

  h2 {
    color: var(--blue);
    font-weight: bold;
    margin: 0;
  }

  .gatsby-image-wrapper {
    max-width: 190px;
    order: 1;
    align-self: flex-start;
    width: 100%;
    img {
      object-fit: contain !important;
    }

    @media (min-width: 30em) {
      order: 2;
      margin-left: auto;
    }
  }

  .details_wrap {
    order: 2;
    @media (min-width: 30em) {
      order: 1;
    }
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
    padding: 15px 0;
    grid-row-gap: 5px;
    width: 100%;

    @media (min-width: 30em) {
      grid-column-gap: 30px;
      padding: 15px 0;
      grid-row-gap: 10px;
    }

    svg {
      margin-right: 8px;
      fill: var(--primary-colour);
    }
  }
`;

export default function Header(props) {
  const {
    title,
    introText,
    location,
    phone,
    email,
    website,
    image,
  } = props.header;

  return (
    <HeaderStyles className="intro">
      <div className="details_wrap">
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
      {/* <Img fluid={image.fluid} /> */}
      <GatsbyImage alt="David" image={image.gatsbyImageData} />
    </HeaderStyles>
  );
}
