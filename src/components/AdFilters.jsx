function AdFilters({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by campaign name"
        className="mb-4 p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-4 py-2 rounded ${
            sortOrder === "asc" ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
        >
          Sort by Spend (ascending)
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className={`px-4 py-2 rounded ${
            sortOrder === "desc" ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
        >
          Sort by Spend (descending)
        </button>
        <button
          onClick={() => setSortOrder(null)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Clear Sort
        </button>
      </div>
    </div>
  );
}

export default AdFilters;
