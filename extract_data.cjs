const fs = require('fs');
try {
  const data = JSON.parse(fs.readFileSync('next_data.json', 'utf8'));
  const apolloState = data.props.pageProps.__APOLLO_STATE__;
  
  console.log("Keys in APOLLO STATE matching Group:");
  for (const k in apolloState) {
    if (k.startsWith('Group:')) {
      console.log(k, JSON.stringify(apolloState[k], null, 2));
    }
  }
  
  console.log("\nKeys in APOLLO STATE matching Event:");
  for (const k in apolloState) {
    if (k.startsWith('Event:')) {
      console.log(k, JSON.stringify(apolloState[k], null, 2));
    }
  }
  
} catch (e) {
  console.error("Error:", e);
}
