const fs = require("fs");
const tokenizer = require( 'wink-tokenizer' );
// Create it's instance.
var myTokenizer = tokenizer();
 
// Tokenize a tweet.
var source = fs.readFileSync("mytext.txt").toString().toLowerCase()
var tokens = myTokenizer.tokenize(source);
console.log(tokens);

fs.writeFile('./tokens.txt', JSON.stringify(tokens, null, 2),'utf8' , function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data written");
    }
});
