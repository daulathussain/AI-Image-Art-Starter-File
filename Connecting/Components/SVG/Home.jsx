import React from "react";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center text-xl sm:hidden w-full">
      <div
        className="absolute w-full"
        style={{
          borderBottom: "2.5px solid transparent",
          bottom: "-17px",
        }}
      />
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </div>
  );
};

export default Home;
