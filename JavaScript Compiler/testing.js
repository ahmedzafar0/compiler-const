var str = 'my name, is ahmed.hello() osama contributor why.me()'

var rgx = /([a-z]+\.[a-z]+)/g;
var space = /\s+/g
var dot = /\./g
var comma = /\,/g
var openparen = /\(/g
var closedparen = /\)/g
var newline = /\n/g
var notword = /\W/g
var arr = []

var str_arr = str.split(space)
console.log(str_arr)

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

    // console.log('not a word found' + ' ' + character)
    var word = str.split(notword)
    console.log(word.toString())


