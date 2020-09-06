//const config = require('./reservations.json')

//var fs = require('fs');

//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const { document } = (new JSDOM('')).window;
//global.document = document;

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//var content = fs.readFileSync("reservations.json");
//console.log(content);

$(document).ready(function(){
        $.getJSON("reservations.json", function(data){
            console.log("A"); // Prints: Harry
            console.log("B"); // Prints: 14
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });

/*$(document).ready(function(){
        $.getJSON("reservations.json", function(data){
            console.log("A"); // Prints: Harry
            console.log("B"); // Prints: 14
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
    */

//var json = JSON.parse(content);

//console.log(json.reservations[1]);



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
