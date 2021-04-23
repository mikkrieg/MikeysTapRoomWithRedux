# _Mikey's Tap Room_

#### _A React program that mimics a tap room inventory_

#### By _**Michael Kriegel**_

##### This project is a practice project

## Technologies Used

* _HTML/CSS_
* _React Library_
* _JavaScript_
* _NPM_

## React Schema Diagram
![ReactSchema](./src/img/TapRoomDiagram.png)

## Description

This is a React program that mimics a tap room. Users are presented with a menu of available kegs first thing. Users are able to select kegs to view the details of the beer within that keg. They are able to also purchase a pint (or multiple) and change the keg once it runs out. Users may also add a keg of beer if they so choose. A form is provided for this, kegs are automatically assumed to be ~124 pints in volume and it is assumed only pints are served. The program employs local state and conditional rendering to display the pages. It also uses shared state to communicate which keg is being selected and purchased/restocked. 

## Setup/Installation Requirements

### Local Machine
* _Clone this repository to your machine_
* _Navigate to the top level directory_
* _In your terminal run the command `NPM install` to install the necessary packages_
* _Once installation is complete run the command `NPM start` to start the development server_
* _Navigate to the `localhost:(configured-port-number)` to view the project_

## Known Bugs

* _No styling or formatting_
* _Keg volume and purchase volume is assumed and hard coded. Keg volume: 124 pints, purchase volume: 1 pint_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright(c) 2021 Michael Kriegel

## Contact Information

Michael Kriegel: mikkrieg@gmail.com
