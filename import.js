/* << INITIALIZATION >> */
const userAppName = window.appquery().json._appname
const userAppVersion = window.appquery().json._app_version

var myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/javascript, */*; q=0.01");
myHeaders.append("content-type", "application/json");
myHeaders.append("credentials", "same-origin");


// function to make change to app
function editorUpdate(changeBody, pathArray) {
    let body = {
      "v": 1,
      "appname": userAppName,
      "app_version": userAppVersion,
      "changes": [
          {
              "body": {
                  "%d1": changeBody
              },
              "path_array": pathArray
          }
      ]
  }
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)
  };

  fetch("https://bubble.io/appeditor/write", requestOptions)
  .then(response => response.text())
   .then(result => {
    console.log(result); // This logs the actual result
    console.log(`Success: ${pathArray[2]} successfully sent to the server.`); // Success message
  })
  .catch(error => console.log('error', error));
}

/* << CREATE FONT VARIABLES FROM LOCAL STORAGE>> */
let fontTokensObj = JSON.parse(localStorage.getItem("fontTokens"));
let fontPathArray = ["settings", "client_safe", "font_tokens_user"];
editorUpdate(fontTokensObj, fontPathArray)

/* << CREATE COLOR VARIABLES FROM LOCAL STORAGE>> */

let colorTokensObj = JSON.parse(localStorage.getItem("colorTokens"));
let colorPathArray = ["settings", "client_safe", "color_tokens_user"];
editorUpdate(colorTokensObj, colorPathArray)


/* << CREATE STYLES FROM LOCAL STORAGE>> */
let styles = appquery.styles();

styles.forEach((element) => appquery.delete_style(element.json.__name));
console.log('All styles deleted');

let retrievedStylesJSON = localStorage.getItem('myStyles');

let stylesList = JSON.parse(retrievedStylesJSON);

stylesList.forEach(styleObj => {
  // Destructure the style object to extract the needed properties.
  const { display, type, properties, states, transitions, id, source_appname } = styleObj;
  
  // Call the create_new_style function with the extracted values.
  appquery.create_new_style(display, type, properties, states, transitions, id, source_appname);
});

console.log(`${stylesList.length} styles copied to local storage`)
