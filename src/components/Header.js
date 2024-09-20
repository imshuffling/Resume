import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaAt } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";

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
    <div className="grid md:grid-cols-[2fr_1fr] gap-4 md:gap-6 mb-2 md:mb-6">
      <div className="not-prose details_wrap flex flex-col gap-2 md:gap-6">
        <div>
          <h1 className="text-lg md:text-3xl mb-0 text-davidblack font-bold uppercase">{title}</h1>
          <h2 className="intro mt-0 text-md md:text-2xl text-davidblue font-semibold">{introText}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2 details">
          <div className='flex flex-row items-center gap-1'>
            <FaMapMarkerAlt className='fill-davidpink' />
            {location}
          </div>
          <div className='flex flex-row items-center gap-1'>
            <FaPhoneAlt className='fill-davidpink' />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <FaAt className='fill-davidpink' />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <FaLink className='fill-davidpink' />
            <a href={`https://${website}`}>{website}</a>
          </div>
        </div>
      </div>
      {/* <Img fluid={image.fluid} /> */}
      <div className="image-wrap h-[160px] w-[160px] md:h-[230px] md:w-[230px] mx-auto">
        <GatsbyImage
          className="image-default"
          alt="David"
          image={image.gatsbyImageData}
        />
      </div>
    </div>
  );
}
