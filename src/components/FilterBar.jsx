const FILTERS = ["ALL", "Active", "Completed"];

const FilterBar = ({ filter, setFilter, clearCompleted, hasCompleted }) => {
  return (
    <div className="search-filter">
      {FILTERS.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? "active" : ""}
        >
          {f}
        </button>
      ))}

      {hasCompleted && (
        <button onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default FilterBar;