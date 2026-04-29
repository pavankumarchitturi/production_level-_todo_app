const FilterBar = ({ setFilter}) => {
    return (
        <div>
            <button onClick={() => setFilter("ALL")}>ALL</button>
            <button onClick={() => setFilter("COMPLETED")}>
                Completed
            </button>
            <button onClick={() => setFilter("PENDING")}>
                Pending
            </button>
        </div>
    );
};

export default FilterBar