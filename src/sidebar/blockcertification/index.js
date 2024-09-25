import React from "react";
import Contentful from "../../images/contentful.png";
import Acquia from "../../images/acquia.png";
import Bigcommerce from "../../images/bigcommerce.png";
import HeadlessCreator from "../../images/headlesscreator.png";
import LinkedIn from "../../images/linkedIn.png";
import Miro from "../../images/miro-essentials.png";

export default function BlockCertification({ title, items }) {
  return (
    <article className="prose prose-sm md:prose-md lg:prose-lg xl:prose-xl certification order-4">
      <h3 className="headline text-lg border-b-2">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((i, id) => (
          <div className="flex gap-2 items-start certification__item" key={id}>
            <div className="w-5 h-5 certification__icon">
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
