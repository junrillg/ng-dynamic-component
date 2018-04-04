# Frontend exam

Create an angular app that can parse and render a screen based on the JSON files provided.
Use the JSON files under the config folder to render the screen. Some 

## products.json
Render the product table screens using this json file. The columnField array represents columns in a table. Parser must be ready to handle different setups for this.

## users.json
Render the users card screens using this json file. The columnField object represents a card. You can layout the users however you want inside the card. Renderer must be dynamic enough to handle changes to values of column field

## JSON parser
Requirements for the JSON parser

* Each JSON file corresponds to a route.
* Must be able to handle changes to values in JSON file(properties will be consistent, e.g. a new columnField might be added, but the matching data will(should) reflect it)
* Must be written in angular 5+ in typescript
* [mainview.json](JSON/config/mainview.json) is treated as the root(home) route for the whole app.


## Bonus

* Dynamic routing - adding different new json files should be supported
* Simple nodejs server to serve JSON files - seperate the json files from the app. visiting the route should request the json config corresponding to it then use that to build the screen
* component separation - each type of config should be defined as a seperate component
* service setup - setup services


Good luck, have fun!!