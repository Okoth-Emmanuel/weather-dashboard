import { FiSearch } from "react-icons/fi";

export default function SearchBar({ city, setCity, onKeyDown }) {
  return (
    <div className="w-full max-w-xl relative mb-8">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search city..."
        className="w-full p-4 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer" size={24} />
    </div>
  );
}