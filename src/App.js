import "./App.css";

import AdCard from "./components/AdCards";

const facebookAds = [
  {
    campaign_name: "Summer Sale",
    media_buy_name: "Social Media Ads",
    ad_name: "Beach Vacation Promo",
    spend: 1500,
    impressions: 25000,
    clicks: 1200,
  },
  {
    campaign_name: "Back to School",
    media_buy_name: "Display Ads",
    ad_name: "School Supplies Deal",
    spend: 1000,
    impressions: 18000,
    clicks: 800,
  },
  {
    campaign_name: "Fall Fashion",
    media_buy_name: "Search Ads",
    ad_name: "Festive Sneak Peek",
    spend: 2000,
    impressions: 30000,
    clicks: 1500,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Blueprint Ad Campaigns
      </h1>

      <div>
        {facebookAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </div>
    </div>
  );
}

export default App;
