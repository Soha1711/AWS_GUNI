const fs = require('fs');

const PROXIES = [
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://thingproxy.freeboard.io/fetch/${url}`
];

const TARGET = 'https://www.meetup.com/aws-sbg-at-ganpat-university/';

(async () => {
  for (let i = 0; i < PROXIES.length; i++) {
    const proxyUrl = PROXIES[i](TARGET);
    console.log(`Trying Proxy ${i}: ${proxyUrl}`);
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 6000);
      const response = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(id);
      
      const html = await response.text();
      console.log(`Proxy ${i} Success! Received HTML length:`, html.length);
      const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
      if (match) {
        const data = JSON.parse(match[1]);
        const apolloState = data.props.pageProps.__APOLLO_STATE__;
        const groupKey = Object.keys(apolloState).find(k => k.startsWith('Group:'));
        const group = apolloState[groupKey];
        console.log("Parsed from Proxy", i);
        console.log("Group Name:", group.name);
        console.log("Members count:", group.stats.memberCounts.all);
        break; // Stop on first success
      } else {
        console.log(`Proxy ${i} returned HTML but no __NEXT_DATA__ found.`);
      }
    } catch (e) {
      console.log(`Proxy ${i} failed:`, e.message || e);
    }
  }
})();
