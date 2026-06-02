const fs = require('fs');
(async () => {
  try {
    const url = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www.meetup.com/aws-sbg-at-ganpat-university/');
    console.log("Fetching from:", url);
    const response = await fetch(url);
    const html = await response.text();
    console.log("Received HTML length:", html.length);
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (!match) {
      console.log("Failed to find __NEXT_DATA__ in proxy output");
      return;
    }
    const data = JSON.parse(match[1]);
    const apolloState = data.props.pageProps.__APOLLO_STATE__;
    const groupKey = Object.keys(apolloState).find(k => k.startsWith('Group:'));
    const group = apolloState[groupKey];
    console.log("Successfully parsed from proxy!");
    console.log("Group Name:", group.name);
    console.log("Members count:", group.stats.memberCounts.all);
    
    // Check events
    for (const k in apolloState) {
      if (k.startsWith('Event:')) {
        console.log(`Event ID ${apolloState[k].id}: "${apolloState[k].title}" status: ${apolloState[k].status} going: ${apolloState[k].going.totalCount}`);
      }
    }
  } catch (e) {
    console.error("Proxy fetch error:", e);
  }
})();
