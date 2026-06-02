const fs = require('fs');
try {
  const data = JSON.parse(fs.readFileSync('next_data.json', 'utf8'));
  const apolloState = data.props.pageProps.__APOLLO_STATE__;
  const groupKey = Object.keys(apolloState).find(k => k.startsWith('Group:'));
  const group = apolloState[groupKey];
  console.log("Group Key:", groupKey);
  console.log("Group Name:", group.name);
  console.log("Stats:", JSON.stringify(group.stats, null, 2));
  
  // Find member count in other potential locations
  for (const k in group) {
    if (k.includes('member') || k.includes('count') || k.includes('size')) {
      console.log(`group.${k}:`, group[k]);
    }
  }
} catch (e) {
  console.error("Error:", e);
}
