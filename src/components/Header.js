import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FaAt, FaLink, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function Header(props) {
  const { title, introText, location, phone, email, website, image } =
    props.header;

  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

  if (isPrint) {
    return (
      <div className="gap-4 mb-4 w-full flex flex-row">
        <div className="w-2/3">
          <div className="details_wrap flex flex-col gap-2">
            <div>
              <h1 className="mb-0 text-lg font-bold uppercase text-davidblack">
                {title}
              </h1>
              <h2 className="intro !mt-0 text-md font-semibold text-davidblue">
                {introText}
              </h2>
            </div>
            <div className="details prose-sm grid grid-cols-2 gap-x-2 gap-y-1">
              <div className="flex flex-row items-center gap-1">
                <FaMapMarkerAlt className="fill-davidpink" />
                {location}
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaPhoneAlt className="fill-davidpink" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaAt className="fill-davidpink" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaLink className="fill-davidpink" />
                <a href={`https://${website}`}>{website}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mx-auto flex text-center items-center justify-center flex-col gap-2 flex-grow">
          <GatsbyImage
            alt="David"
            image={image.gatsbyImageData}
            className="image-wrap h-[120px] w-[120px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 flex flex-col-reverse gap-4 md:mb-6 md:grid md:grid-cols-[2fr_1fr] md:gap-6">
      <div className="details_wrap flex flex-col gap-2 md:gap-4">
        <div>
          <h1 className="mb-0 text-lg font-bold uppercase text-davidblack md:text-3xl">
            {title}
          </h1>
          <h2 className="intro !mt-0 text-md font-semibold text-davidblue md:text-2xl">
            {introText}
          </h2>
        </div>
        <div className="details prose prose-sm grid grid-cols-2 gap-x-4 gap-y-1 md:prose-md lg:prose-md xl:prose-lg md:gap-x-6 md:gap-y-2">
          <div className="flex flex-row items-center gap-1">
            <FaMapMarkerAlt className="fill-davidpink" />
            {location}
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaPhoneAlt className="fill-davidpink" />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaAt className="fill-davidpink" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaLink className="fill-davidpink" />
            <a href={`https://${website}`}>{website}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex text-center items-center justify-center flex-col gap-2">
        <GatsbyImage
          alt="David"
          image={image.gatsbyImageData}
          className="image-wrap h-[160px] w-[160px] md:h-[230px] md:w-[230px]"
        />
      </div>
    </div>
  );
}
