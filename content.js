// content.js
const youtubeAdsSelectors = [
    "youtube.com##.ad-container",
    "youtube.com##.ytp-ad-progress-list",
    "youtube.com###player-ads",
    "youtube.com##ytd-rich-item-renderer:has( > div > ytd-display-ad-renderer )",
    "youtube.com##ytd-ad-slot-renderer",
    "youtube.com##ytd-promoted-sparkles-web-renderer",
    "youtube.com##ytd-carousel-ad-renderer",
    "youtube.com###masthead-ad",
    "youtube.com##.ytd-search-pyv-renderer",
    "youtube.com##.pyv-afc-ads-container",
    "youtube.com##.iv-promo"
  ];
  
  youtubeAdsSelectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'none';
    }
  });
  