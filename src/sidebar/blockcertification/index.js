import React from "react";
import { FaAlgolia } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiContentful } from "react-icons/si";
import { SiBigcommerce } from "react-icons/si";
import { SiMiro } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

import Acquia from "../../images/acquia.png";
import HeadlessCreator from "../../images/headlesscreator.png";

export default function BlockCertification({ title, items }) {
  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

  if (isPrint) {
    return (
      <article className="certification">
        <h3 className="headline border-b-2 text-sm">{title}</h3>
        <div className="flex flex-col gap-1 md:gap-3">
          {items.map((i, id) => (
            <div
              className="certification__item flex items-center gap-2"
              key={id}
            >
              <div className="certification__icon h-3 w-3">
                {i.type[0] === "Contentful" && (
                  <SiContentful className="fill-current" />
                )}
                {i.type[0] === "Acquia" && (
                  <img className="!m-0 not-prose" alt={"Acquia"} src={Acquia} />
                )}
                {i.type[0] === "Algolia" && (
                  <FaAlgolia className="fill-[#0639DC] w-5 h-5" />
                )}
                {i.type[0] === "bigcommerce" && (
                  <SiBigcommerce className="h-5 w-5" />
                )}
                {i.type[0] === "HeadlessCreator" && (
                  <img
                    className="!m-0 not-prose"
                    alt={"HeadlessCreator"}
                    src={HeadlessCreator}
                  />
                )}
                {i.type[0] === "linkedIn" && (
                  <FaLinkedin className="fill-[#0077B5] w-5 h-5" />
                )}
                {i.type[0] === "Miro" && (
                  <SiMiro className="bg-[#FFD02F] p-1 rounded-sm w-5 h-5" />
                )}
              </div>
              <div className="certification__copy text-xs leading-6 items-center">
                <strong>
                  <a
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                    type={
                      i?.linkType === "pdf" ? "application/pdf" : "text/html"
                    }
                  >
                    {i.title}
                  </a>
                </strong>
                <div className="certification__year text-gray-400">
                  {i.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="certification mb-2 md:mb-0 prose prose-sm order-4 md:prose-md lg:prose-md xl:prose-lg">
      <h3 className="headline border-b-2 text-lg">{title}</h3>
      <div className="flex flex-col gap-1 md:gap-3">
        {items.map((i, id) => (
          <div className="certification__item flex items-center gap-2" key={id}>
            <div className="certification__icon h-5 w-5">
              {i.type[0] === "Contentful" && (
                <SiContentful className="h-5 w-5" />
              )}
              {i.type[0] === "Algolia" && (
                <FaAlgolia className="fill-[#0639DC] w-5 h-5" />
              )}
              {i.type[0] === "Acquia" && (
                <img className="!m-0 not-prose" alt={"Acquia"} src={Acquia} />
              )}
              {i.type[0] === "bigcommerce" && (
                <SiBigcommerce className="h-5 w-5" />
              )}
              {i.type[0] === "HeadlessCreator" && (
                <img
                  className="!m-0 not-prose"
                  alt={"HeadlessCreator"}
                  src={HeadlessCreator}
                />
              )}
              {i.type[0] === "linkedIn" && (
                <FaLinkedin className="fill-[#0077B5] w-5 h-5" />
              )}
              {i.type[0] === "Miro" && (
                <SiMiro className="bg-[#FFD02F] p-1 rounded-sm w-5 h-5" />
              )}
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
