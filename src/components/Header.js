import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaAt } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";

export default function Header(props) {
  const { title, introText, location, phone, email, website, image } =
    props.header;

  const isTabletOrMobile = useMediaQuery({ maxWidth: 959 });

  // Function to trigger print dialog
  const handlePrint = () => {
    window.print(); // Opens the browser print dialog
  };

  return (
    <div className="mb-4 flex flex-col-reverse gap-4 md:mb-6 md:grid md:grid-cols-[2fr_1fr] md:gap-6">
      <div className="details_wrap flex flex-col gap-2 md:gap-6">
        <div>
          <h1 className="mb-0 text-lg font-bold uppercase text-davidblack md:text-3xl">
            {title}
          </h1>
          <h2 className="intro !mt-0 text-md font-semibold text-davidblue md:text-2xl">
            {introText}
          </h2>
        </div>
        <div className="details prose prose-sm grid grid-cols-2 gap-x-4 gap-y-1 md:prose-md lg:prose-lg xl:prose-xl md:gap-x-6 md:gap-y-2">
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
      <div className="mx-auto flex flex-col gap-2 print:hidden">
        <div className="image-wrap h-[160px] w-[160px] md:h-[230px] md:w-[230px]">
          <GatsbyImage
            className="image-default"
            alt="David"
            image={image.gatsbyImageData}
          />
        </div>

        {!isTabletOrMobile && (
          <button
            onClick={handlePrint}
            className="hover:bg-davidDarkPink rounded bg-davidpink px-1 py-1 font-bold text-white underline hover:no-underline"
          >
            Download as PDF
          </button>
        )}
      </div>
    </div>
  );
}
