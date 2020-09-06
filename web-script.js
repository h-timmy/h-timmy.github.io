//const config = require('./reservations.json')

//var fs = require('fs');

//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const { document } = (new JSDOM('')).window;
//global.document = document;



//var content = fs.readFileSync("reservations.json");
//console.log(content);

var json_file = "https://github.com/h-timmy/h-timmy.github.io/blob/master/reservations.json";
  $.getJSON( json_file, {
    //tags: "mount rainier",
    tagmode: "any",
    format: "json"
  };

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
