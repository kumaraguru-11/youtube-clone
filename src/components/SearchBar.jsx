import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //Navigate to the SearchFeed.
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
      }
    }
  };
  return (
    <div className="bg-light text-dark rounded-pill border border-light border-2 px-2 search">
      <input
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <span className="align-items-center">
        <IoSearchOutline className="text-danger fs-5 mb-1 mx-2" />
      </span>
    </div>
  );
};

export default SearchBar;
