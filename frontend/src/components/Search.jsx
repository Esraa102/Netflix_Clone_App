import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form className="flex items-center min-w-[200px] md:min-w-[300px] gap-2 p-3 rounded-md bg-slate-800/45">
      <input
        type="search"
        name="search"
        id="search"
        required
        placeholder="Search movies here..."
        className="flex-1 bg-transparent border-none text-white focus:outline-none"
      />
      <button type="submit" className="hover:text-pink transition">
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
