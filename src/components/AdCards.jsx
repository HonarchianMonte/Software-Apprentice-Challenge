const AdCard = ({ ad }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-72 h-72 flex flex-col justify-between items-center">
      <h2 className="font-bold text-xl mb-2">{ad.campaign}</h2>
      <p>
        <strong>Adset:</strong> {ad.adset}
      </p>
      <p>
        <strong>Creative:</strong> {ad.creative}
      </p>
      <p>
        <strong>Spend:</strong> ${ad.spend}
      </p>
      <p>
        <strong>Impressions:</strong> {ad.impressions.toLocaleString()}
      </p>
      <p>
        <strong>Clicks:</strong> {ad.clicks.toLocaleString()}
      </p>
      <p>
        <strong>Results:</strong> {ad.results.toLocaleString()}
      </p>
    </div>
  );
};

export default AdCard;
