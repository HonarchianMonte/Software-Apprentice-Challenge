export function normalizeFacebookAds(fbAds) {
  return fbAds.map((ad) => ({
    campaign: ad.campaign_name,
    adset: ad.media_buy_name,
    creative: ad.ad_name,
    spend: ad.spend,
    impressions: ad.impressions,
    clicks: ad.clicks,
  }));
}

export function normalizeTwitterAds(twAds) {
  return twAds.map((ad) => ({
    campaign: ad.campaign,
    adset: ad.ad_group,
    creative: ad.image_name,
    spend: ad.spend,
    impressions: ad.impressions,
    clicks: ad.post_clicks,
  }));
}

export function normalizeSnapchatAds(scAds) {
  return scAds.map((ad) => ({
    campaign: ad.campaign_name,
    adset: ad.ad_squad_name,
    creative: ad.creative_name,
    spend: ad.cost,
    impressions: ad.impressions,
    clicks: ad.post_clicks,
  }));
}

export function normalizeGoogleAnalytics(gaData) {
  return gaData.map((entry) => ({
    campaign: entry.utm_campaign,
    adset: entry.utm_medium,
    creative: entry.utm_content,
    results: entry.results,
  }));
}

export function mergeAdsWithGA(allAds, googleAnalyticsData) {
  const gaNormalized = normalizeGoogleAnalytics(googleAnalyticsData || []);

  return allAds.map((ad) => {
    const gaMatch = gaNormalized.find(
      (res) =>
        res.campaign === ad.campaign &&
        res.adset === ad.adset &&
        res.creative === ad.creative
    );
    return {
      ...ad,
      results: gaMatch ? gaMatch.results : 0,
    };
  });
}

export function getMergedAds(data) {
  const allAds = [
    ...normalizeFacebookAds(data.facebook_ads || []),
    ...normalizeTwitterAds(data.twitter_ads || []),
    ...normalizeSnapchatAds(data.snapchat_ads || []),
  ];

  return mergeAdsWithGA(allAds, data.google_analytics || []);
}
