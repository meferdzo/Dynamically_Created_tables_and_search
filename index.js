let express = require('express');
let path = require('path');
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

let port = 8000;
let app = express();


// let url = "https://admin.b2b-carmarket.com//test/project"
// request(url, function(err, resp, body){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// })

let destinationtable = fs.createWriteStream('./downloads/datatable.csv');
let url = "https://admin.b2b-carmarket.com//test/project";

request(url)
  .pipe(destinationtable);

app.listen(port);
console.log('server is listening on ' + port);
