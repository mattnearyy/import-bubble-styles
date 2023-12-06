/* << COPY COLOR VARIABLES TO LOCAL STORAGE>> */
const colorTokens = Object.values(appquery().json._children.settings.cache.client_safe.color_tokens_user)[0] ?? null;;
const fontTokens = Object.values(appquery().json._children.settings.cache.client_safe.font_tokens_user) [0] ?? null;

localStorage.setItem('colorTokens', JSON.stringify(colorTokens));
localStorage.setItem('fontTokens', JSON.stringify(fontTokens));

/* << COPY STYLES TO LOCAL STORAGE >> */
let myStyles = appquery.styles()
let jsonList = [];
myStyles.forEach(style => {
  let rawStyle = style.raw(); // This calls the .raw() method on each style object.
  jsonList.push(rawStyle); // Pushes the returned style object into the array.
});
console.log(`${jsonList.length} styles copied to local storage`)
// Convert the list to JSON format.
let jsonString = JSON.stringify(jsonList);

// Save to local storage
localStorage.setItem('myStyles', jsonString);
