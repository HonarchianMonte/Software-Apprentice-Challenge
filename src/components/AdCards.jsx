const AdCard = ({ ad }) => {
  return (
    <div className="bg-white rounded shadow p-5 border border-gray-200">
      <h2 className="font-bold text-xl mb-2">{ad.campaign_name}</h2>
      <p>
        <strong>Adset:</strong> {ad.media_buy_name}
      </p>
      <p>
        <strong>Creative:</strong> {ad.ad_name}
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
    </div>
  );
};

export default AdCard;
