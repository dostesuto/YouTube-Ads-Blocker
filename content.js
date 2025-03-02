// content.js

// 無効な `youtube.com##` を削除し、正しい CSS セレクターに変更
const youtubeAdsSelectors = [
    ".ad-container",
    ".ytp-ad-progress-list",
    "#player-ads",
    "ytd-rich-item-renderer:has( > div > ytd-display-ad-renderer )", // *:has() はまだ一部のブラウザで非対応
    "ytd-ad-slot-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-carousel-ad-renderer",
    "#masthead-ad",
    ".ytd-search-pyv-renderer",
    ".pyv-afc-ads-container",
    ".iv-promo"
];

// 指定した要素をすべて非表示にする関数
function removeAds() {
    youtubeAdsSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.display = 'none';
            console.log(`Removed: ${selector}`);
        });
    });
}

// ページ読み込み時と、一定間隔ごとに広告を非表示にする
document.addEventListener("DOMContentLoaded", removeAds);
setInterval(removeAds, 2000); // 2秒ごとにチェック（広告の再表示を防ぐ）
