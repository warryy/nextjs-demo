import React from "react";

export default function Template(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div>
      <div className="container mx-auto border p-4">我是全局的 template</div>
      {children}
    </div>
  );
}
