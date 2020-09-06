//const config = require('./reservations.json')

var fs = require('fs');

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = require( "jquery" )( window );


var content = fs.readFileSync("reservations.json");
//console.log(content);

var json = JSON.parse(content);

console.log(json.reservations[1]);



$.ajax({
  type: "POST",
  url: "~/booking.py"
  //data: { param: text}
}).done(function( o ) {
   // do something
  console.log("H");
});

function sub(a, b) {
return a-b
}
console.log(sub(6, 2))
