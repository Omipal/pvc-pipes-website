"use client";

import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function EmploymentFromStrapi({ content }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
