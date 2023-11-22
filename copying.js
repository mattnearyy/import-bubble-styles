// IN SOURCE APP
let myStyles = appquery.styles()
let jsonList = [];
myStyles.forEach(style => {
  let rawStyle = style.raw(); // This calls the .raw() method on each style object.
  jsonList.push(rawStyle); // Pushes the returned style object into the array.
});
console.log(`${jsonList.length} styles in list`)
// Convert the list to JSON format.
let jsonString = JSON.stringify(jsonList);

// Save to local storage
localStorage.setItem('myStyles', jsonString);
