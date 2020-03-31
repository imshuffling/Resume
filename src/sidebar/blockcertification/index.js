import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'


export default function BlockCertification( {title, items} ) {

  return (
    <section className="certification">
        <h3 className="headline">{title}</h3>
          {items.map((i, id) =>
              <div className="certification__item" key={id}>
                <div className="certification__icon">
                  <FontAwesomeIcon icon={faAward} />
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
