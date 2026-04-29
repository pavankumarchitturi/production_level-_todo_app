const SearchBar = ({setSearch}) => {
    return (
        <input
            type="text"
            placeholder="search text.."
            onChange={(e) => setSearch(e.target.value)}
            />
    );
};

export default SearchBar