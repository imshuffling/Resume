import React from "react";
import Contentful from "../../images/contentful.png";
import Acquia from "../../images/acquia.png";
import Bigcommerce from "../../images/bigcommerce.png";
import HeadlessCreator from "../../images/headlesscreator.png";
import LinkedIn from "../../images/linkedIn.png";

export default function BlockCertification({ title, items }) {
  return (
    <section className="certification">
      <h3 className="headline">{title}</h3>
      {items.map((i, id) => (
        <div className="certification__item" key={id}>
          <div className="certification__icon">
            {i.type[0] === "Contentful" && (
              <img alt={"Contentful"} src={Contentful} />
            )}
            {i.type[0] === "Acquia" && <img alt={"Acquia"} src={Acquia} />}
            {i.type[0] === "bigcommerce" && (
              <img alt={"Bigcommerce"} src={Bigcommerce} />
            )}
            {i.type[0] === "HeadlessCreator" && (
              <img alt={"HeadlessCreator"} src={HeadlessCreator} />
            )}
            {i.type[0] === "linkedIn" && (
              <img alt={"linkedIn"} src={LinkedIn} />
            )}
          </div>
          <div className="certification__copy">
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
    </section>
  );
}
