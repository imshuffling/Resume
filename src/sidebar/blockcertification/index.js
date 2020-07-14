import React from 'react';
import Contentful from '../../images/contentful.png';
import Acquia from '../../images/acquia.png';

export default function BlockCertification( {title, items} ) {
  return (
    <section className="certification">
        <h3 className="headline">{title}</h3>
          {items.map((i, id) =>
              <div className="certification__item" key={id}>
                <div className="certification__icon">
                  { i.type[0] === 'Contentful' && <img alt={Contentful} src={Contentful} /> }
                  { i.type[0] === 'Acquia' && <img alt={Acquia} src={Acquia} /> }
                </div>
                <div className="certification__copy">
                  <strong><a href={i.link}>{i.title}</a></strong>
                  <div className="certification__year">{i.year}</div>
                </div>
              </div>
          )}
    </section>
  );
}
