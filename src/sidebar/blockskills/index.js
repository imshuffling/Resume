import React from "react";

export default function BlockSkills({ title, skill }) {
  return (
    <article className="skills prose prose-sm order-3 md:prose-md lg:prose-lg xl:prose-xl">
      <h3 className="headline border-b-2 text-lg">{title}</h3>
      <ul className="not-prose p-0 flex list-none flex-row flex-wrap gap-1">
        {skill.map((i, id) => (
          <li
            className="rounded-sm bg-gray-100 p-1 text-xs text-black md:text-sm"
            key={id}
          >
            {i}
          </li>
        ))}
      </ul>
    </article>
  );
}
