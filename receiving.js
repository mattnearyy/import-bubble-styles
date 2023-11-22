// IN RECEIVING APP

let retrievedStylesJSON = localStorage.getItem('myStyles');

let stylesList = JSON.parse(retrievedStylesJSON);

stylesList.length

stylesList.forEach(styleObj => {
  // Destructure the style object to extract the needed properties.
  const { display, type, properties, states, transitions, id, source_appname } = styleObj;
  
  // Call the create_new_style function with the extracted values.
  appquery.create_new_style(display, type, properties, states, transitions, id, source_appname);
});