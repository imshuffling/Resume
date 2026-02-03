import React from "react";
import { FaAlgolia, FaLinkedin } from "react-icons/fa";
import { SiBigcommerce, SiContentful, SiMiro } from "react-icons/si";

import Acquia from "../../images/acquia.png";
import ContentfulCert from "../../images/contentful-cert.png";
import ContentfulManager from "../../images/contentful-manager-cert.png";
import HeadlessCreator from "../../images/headlesscreator.png";

const getContentfulIcon = (title) => {
  if (title === "Contentful Certified Professional") {
    return (
      <img
        className="!m-0 not-prose"
        alt="Contentful Certified Professional"
        src={ContentfulCert}
      />
    );
  } else if (title === "Contentful Certified Content Manager") {
    return (
      <img
        className="!m-0 not-prose"
        alt="Contentful Certified Content Manager"
        src={ContentfulManager}
      />
    );
  } else {
    return <SiContentful className="h-5 w-5" />;
  }
};

const iconMap = {
  Contentful: (title) => getContentfulIcon(title),
  Algolia: <FaAlgolia className="fill-[#0639DC] w-5 h-5" />,
  Acquia: <img className="!m-0 not-prose" alt="Acquia" src={Acquia} />,
  bigcommerce: <SiBigcommerce className="h-5 w-5" />,
  HeadlessCreator: (
    <img
      className="!m-0 not-prose"
      alt="HeadlessCreator"
      src={HeadlessCreator}
    />
  ),
  linkedIn: <FaLinkedin className="fill-[#0077B5] w-5 h-5" />,
  Miro: <SiMiro className="bg-[#FFD02F] p-1 rounded-sm w-5 h-5" />,
};

const CertificationIcon = ({ type, title }) => {
  if (type === "Contentful") {
    return iconMap[type](title);
  }
  return iconMap[type] || null;
};

export default function BlockCertification({ title, items }) {
  // console.log("items", items);
  // console.log("title", title);

  return (
    <article className="certification mb-2 md:mb-0 prose prose-sm order-4 md:prose lg:prose xl:prose-lg">
      <h3 className="headline border-b-2 text-lg">{title}</h3>
      <div className="flex flex-col gap-1 md:gap-3">
        {items.map((i, id) => (
          <div className="certification__item flex items-center gap-2" key={id}>
            <div className="certification__icon h-5 w-5">
              <CertificationIcon type={i.type[0]} title={i.title} />
            </div>
            <div className="certification__copy text-xs md:text-sm">
              <strong>
                <a
                  href={i.link}
                  target="_blank"
                  rel="noreferrer"
                  type={i?.linkType === "pdf" ? "application/pdf" : "text/html"}
                >
                  {i.title}
                </a>
              </strong>
              <div className="certification__year text-gray-400">{i.year}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
