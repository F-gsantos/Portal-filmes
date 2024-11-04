import { useState, useEffect } from "react";

export default function CardContainer({ titulo, children }) {
  return (
    <>
      <h2 className="mt-4 text-2xl font-bold p-4">{titulo}</h2>
      <div className="overflow-x-auto scroll-smooth relative p-4">
        <div className="flex">{children}</div>
      </div>
    </>
  );
}