import React from 'react';

export default function BlockSkills( {title, skill} ) {
  return (
    <section className="skills">
        <h3 className="headline">{title}</h3>
        <ul>
          {skill.map((i, id) =>
              <li key={id}>{i}</li>
          )}
        </ul>
    </section>
  );
}
