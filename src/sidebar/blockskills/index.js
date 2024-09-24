import React from "react";

export default function BlockSkills({ title, skill }) {
  return (
    <section className="prose skills order-3">
      <h3 className="headline text-lg border-b-2">{title}</h3>
      <ul className="not-prose list-none p-0 flex flex-row gap-1 flex-wrap">
        {skill.map((i, id) => (
          <li className="bg-gray-100 text-black p-1 rounded-sm" key={id}>
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
