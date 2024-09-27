import React from "react";

import Acquia from "../../images/acquia.png";
import Bigcommerce from "../../images/bigcommerce.png";
import Contentful from "../../images/contentful.png";
import HeadlessCreator from "../../images/headlesscreator.png";
import LinkedIn from "../../images/linkedIn.png";
import Miro from "../../images/miro-essentials.png";

export default function BlockCertification({ title, items }) {
  return (
    <article className="certification prose prose-sm order-4 md:prose-md lg:prose-lg xl:prose-xl">
      <h3 className="headline border-b-2 text-lg">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((i, id) => (
          <div className="certification__item flex items-start gap-2" key={id}>
            <div className="certification__icon h-5 w-5">
              {i.type[0] === "Contentful" && (
                <img
                  className="!m-0 not-prose"
                  alt={"Contentful"}
                  src={Contentful}
                />
              )}
              {i.type[0] === "Acquia" && (
                <img className="!m-0 not-prose" alt={"Acquia"} src={Acquia} />
              )}
              {i.type[0] === "bigcommerce" && (
                <img
                  className="!m-0 not-prose"
                  alt={"Bigcommerce"}
                  src={Bigcommerce}
                />
              )}
              {i.type[0] === "HeadlessCreator" && (
                <img
                  className="!m-0 not-prose"
                  alt={"HeadlessCreator"}
                  src={HeadlessCreator}
                />
              )}
              {i.type[0] === "linkedIn" && (
                <img
                  className="!m-0 not-prose"
                  alt={"linkedIn"}
                  src={LinkedIn}
                />
              )}
              {i.type[0] === "Miro" && (
                <img className="!m-0 not-prose" alt={"Miro"} src={Miro} />
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
              <div className="certification__year">{i.year}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
