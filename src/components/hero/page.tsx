import React from "react";

interface HeroProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
}

export default function Hero(props: HeroProps) {
  const { title, desc, children } = props;

  return (
    <div className="container mx-auto py-10 px-10 border rounded-lg shadow-md mt-4">
      <div className="flex items-baseline mb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-sm ml-2">{desc}</span>
      </div>
      {children}
    </div>
  );
}
