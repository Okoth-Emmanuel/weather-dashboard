import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
  <input
    type="text"
    placeholder="Search city..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="px-5 py-3 rounded-full outline-none w-72 shadow-md"
  />

  <button
    type="submit"
    className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
  >
    Search
  </button>
</form>
    </form>
  );
}

export default SearchBar;