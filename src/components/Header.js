import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FaAt, FaLink, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Header(props) {
  const { title, introText, location, phone, email, website, image } =
    props.header;

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
        <div className="details grid grid-cols-2 gap-x-4 gap-y-1 md:prose-md lg:prose-md xl:prose-lg md:gap-x-6 md:gap-y-2">
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm">
            <FaMapMarkerAlt className="fill-davidpink" />
            {location}
          </div>
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm">
            <FaPhoneAlt className="fill-davidpink" />
            <a
              className="underline ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-150 hover:text-davidpink focus:text-davidpink hover:decoration-davidpink"
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </div>
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm">
            <FaAt className="fill-davidpink" />
            <a
              className="underline ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-150 hover:text-davidpink focus:text-davidpink hover:decoration-davidpink"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm">
            <FaLink className="fill-davidpink" />
            <a
              className="underline ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-150 hover:text-davidpink focus:text-davidpink hover:decoration-davidpink"
              href={`https://${website}`}
            >
              {website}
            </a>
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
