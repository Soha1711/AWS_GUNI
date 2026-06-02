const fs = require('fs');
try {
  const html = fs.readFileSync('meetup.html', 'utf8');
  console.log("HTML read successfully, length:", html.length);
  
  // Find script tags
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!match) {
    console.log("No __NEXT_DATA__ script found");
    process.exit(0);
  }
  
  const data = JSON.parse(match[1]);
  fs.writeFileSync('next_data.json', JSON.stringify(data, null, 2));
  console.log("Successfully wrote next_data.json");
  
  // Let's inspect the data for members and events
  const found = [];
  function search(obj, path = '') {
    if (!obj) return;
    if (typeof obj === 'object') {
      for (const k in obj) {
        if (k.toLowerCase().includes('member') || k.toLowerCase().includes('event') || k.toLowerCase().includes('count')) {
          found.push({ path: path + '.' + k, val: typeof obj[k] === 'object' ? '[object]' : obj[k] });
        }
        search(obj[k], path + '.' + k);
      }
    }
  }
  search(data);
  console.log("Found matches:", found.slice(0, 50));
} catch (e) {
  console.error("Error:", e);
}
