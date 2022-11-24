import React from "react";

import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SearchBar />
      </div>
      <div class="grid place-items-center mt-40">
        <h1 class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600 drop-shadow-2xl shadow-cyan-500/50">
          Asesorías ITAM
        </h1>
      </div>
    </div>
  );
}
