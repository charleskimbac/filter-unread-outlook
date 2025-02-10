/* eslint-disable no-unused-vars */

/* v.2025.2.9 from https://github.com/charleskimbac/common-files
  console.log alternative so we can easily filter in console with TAG_NAME.

  prints:
  [TAGNAME] purpose
  [TAGNAME] purpose - ...values
*/

const TAG_NAME = "FUO";

function clog(purpose, ...values) {
  if (values.length == 0) {
    console.log(`[${TAG_NAME}]`, purpose); // prints: [TAGNAME] purpose
  } else {
    console.log(`[${TAG_NAME}]`, purpose, "-", ...values); // prints: [TAGNAME] purpose - valuesToPrint
  }
}