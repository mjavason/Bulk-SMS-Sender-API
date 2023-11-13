const fs = require('fs');
const vcard = require('vcard-json');

// Read the vCard file
const vcardData = fs.readFileSync('path/to/your/file.vcf', 'utf8');

// Parse vCard to JSON
vcard.parseVcard(vcardData, (err:any, json:any) => {
  if (err) {
    console.error('Error parsing vCard:', err);
  } else {
    // Print the resulting JSON
    console.log(JSON.stringify(json, null, 2));

    // You can save the JSON to a file if needed
    fs.writeFileSync('path/to/output/file.json', JSON.stringify(json, null, 2));
  }
});
