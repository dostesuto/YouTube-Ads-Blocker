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
    ".iv-promo",
    "ytd-in-feed-ad-layout-renderer",
    "ytd-rich-item-renderer[is-in-first-column]",
    "ytd-statement-banner-renderer", // 新しく追加されたセレクター
    "#big-yoodle" // 新しく追加されたセレクター
];

// 指定した要素をすべて非表示にする関数
function removeAds() {
    youtubeAdsSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.display = 'none';
            console.log(`Removed: ${selector}`);
        });
    });
    
    // 広告削除後にレイアウト調整
    adjustLayout();
}

// 広告削除後に隙間を埋めるためのレイアウト調整関数
function adjustLayout() {
    const containers = document.querySelectorAll('ytd-rich-grid-renderer, ytd-video-renderer, ytd-item-section-renderer');
    
    containers.forEach(container => {
        // Flexboxを適用して、要素を詰める
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '10px'; // 必要に応じて間隔を調整
    });
}

// ページ読み込み時と、一定間隔ごとに広告を非表示にする
document.addEventListener("DOMContentLoaded", removeAds);
setInterval(removeAds, 2000); // 2秒ごとにチェック（広告の再表示を防ぐ）
