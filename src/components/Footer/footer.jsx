import React from "react";

export default function Footer({ text }) {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-10">
      <p className="text-sm">{text}</p>
    </footer>
  );
}
