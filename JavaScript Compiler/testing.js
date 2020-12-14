var str = 'my name, is ahmed.hello() osama contributor why.me()'

var rgx = /([a-z]+\.[a-z]+)/g;
var space = /\b\s+/g
var dot = /\./g
var comma = /\,/g
var openparen = /\(/g
var closedparen = /\)/g
var newline = /\n/g
var notword = /\b\W+/g
var arr = []

var str_arr = str.split(space)
console.log(str_arr)

// reading every letter and use some regex to identify some characters
for(var i = 0; i < str.length; i++){
    
    var character = str.charAt(i)
    // console.log(str.charAt(i))
    if(space.test(character)){
        console.log('white space found' + ' ' + character)
        
    }
    if(dot.test(character)){
        console.log('dot found' + ' ' + character)
        
    }
    if(comma.test(character)){
        console.log('comma found' + ' ' + character)
        
    }
    if(openparen.test(character)){
        console.log('openparen found' + ' ' + character)
        
    }
    if(closedparen.test(character)){
        console.log('closedparen found' + ' ' + character)
        
    }
    if(newline.test(character)){
        console.log('closedparen found' + ' ' + character)
        
    }

}
//trying to get identifiers in new array
var identifier = str_arr.splice(str.indexOf(rgx))
console.log(identifier);

//tried to get every word
var word = str.split(notword)
console.log(word.toString())


