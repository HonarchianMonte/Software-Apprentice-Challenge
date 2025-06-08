import "./App.css";

import { useEffect, useState } from "react";

import AdCard from "./components/AdCards";
import AdFilters from "./components/AdFilters";
import { getMergedAds } from "./utils/normalizeAds";

function App() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAds = ads.filter((ad) =>
    ad.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAds = [...filteredAds].sort((a, b) => {
    if (sortOrder === "asc") return a.spend - b.spend;
    if (sortOrder === "desc") return b.spend - a.spend;
    return 0;
  });

  useEffect(() => {
    fetch("http://localhost:3000/fakeDataSet")
      .then((res) => res.json())
      .then((data) => {
        const mergedAds = getMergedAds(data);
        setAds(mergedAds);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ads:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Blueprint Ad Campaigns
      </h1>
      <AdFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {loading ? (
        <p className="text-center">Loading ads...</p>
      ) : (
        <div className="grid gap-6">
          {sortedAds.map((ad, index) => (
            <AdCard key={index} ad={ad} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
