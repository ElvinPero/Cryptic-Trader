// export const CoinList = (currency) =>
//     `https://api.geckoterminal.com/api/v2/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const CoinList = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=CG-SJ8X5uRxzo2RdC7Ft42HNV65`;

export const SingleCoin = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&x_cg_demo_api_key=CG-SJ8X5uRxzo2RdC7Ft42HNV65`;

export const TrendingCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h&x_cg_demo_api_key=CG-SJ8X5uRxzo2RdC7Ft42HNV65`;


// const API_KEY = "8adbf492-138f-4217-8b46-d47d66682aa9"