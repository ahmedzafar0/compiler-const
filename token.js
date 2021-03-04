const fs = require("fs");
const { Regex } = require("./punctuators");
const { KW } = require("./keyword");
const { opr } = require("./operator");

// const breaker = {
//     whiteSpace: "/\s/gi",
//     lineBreaker: "\\n"
// }

// var singleCommentFlag = false
// var multiCommentFlag = false
// var stringFlag = false
// var operatorFlag = false
// var floatFlag = false
// var whitspaceFlag = false

var temp = ""
var classPart = ""
var valuPart = ""
var tokens = []

var rgx = /([a-z]+\.[a-z]+)/g;
var source = fs.readFileSync("./mytext.txt").toString().toLowerCase()
var lineNo = 0
var line
var newline = []
var k
var identifiers
var source1 = source.split("\n")
console.log(source1)
for(line in source1){
    console.log("loop")
    lineNo +=1
    newline = source1[line].toString().split(" ")
    console.log(newline)
var i
   for(i in newline){

     for(var j=0;j<=newline[i].length;j++){   

            switch(newline[i][j]){
                case '.':
                    //newline[i].split(".").join("")
                    valuPart = newline[i][j]
                    classPart = KW.punctuator.dot
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[j].replace(/\./g,' ')
                    // var arr =newline[i].split(".")
                    // for(var k=0;k<arr.length;k++){
                    //     arr[k].trim()
                    //     valuPart = arr[k]
                    //     classPart = KW.identifer
                    //     tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    // }
                    for(i in newline){
                        if(identifiers = rgx.exec(newline[i])){
                            var id = identifiers[0].split('.')
                            console.log("identifiers found" + ' ' +id)
                            for(k in id){
                                console.log(identifiers.length, "====idetinfiers length")
                            tokens.push(`${id[k]}, identifiers, ${lineNo}`)
                            }
                        }
                    }
                    break;
                case ',':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.coma
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;  
                case '(':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.parenOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;
                case ')':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.parenClose
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;
                case '{':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.BracesOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                                
                case '}':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.BracesClose
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                case '[':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.BracketOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                case ']':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.BracketClose
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                case ':':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.Colon
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                case ';':
                    valuPart= newline[i][j]
                    classPart = KW.punctuator.semiColon
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                default:
                    temp = newline[i]
            }
        }
        console.log(temp)
        switch(true){
            case Regex.stringRegex.test(temp):
                valuPart = temp
                classPart = KW.stringConstant
                break;
            case Regex.idRegex.test(temp):
                valuPart = temp
                classPart = KW.identifer
                break;
            case Regex.floatRegex.test(temp):
                valuPart = temp
                classPart = KW.floatConstant
                break;
            // case Regex.punct:
            //     valuPart = temp
            //     classPart = KW.punctuator
            //     break;
            case Regex.intRegex.test(temp):
                valuPart = temp
                classPart = KW.intConstant
                break;
            // case Regex.punctRegex.test(temp):
            //     valuPart = temp
            //     classPart = KW.punctuators
            //     break;
            
            // case Regex.comments.single.test(temp):
            //     valuPart = temp
            //     classPart = KW.comments
            //     break;
            // case Regex.comments.multi.test(temp):
            //     valuPart = temp
            //     classPart = KW.comments
         case Regex.oprRegex.test(temp):
                valuPart = temp
                if(temp==opr.plusMinus[0]){
                valuPart = temp
                classPart = KW.operator.PlusMinus
                }
                else if (temp == opr.compound[0|1|2|3]){
                    valuPart = temp
                    classPart = KW.operator.compound
                }
                else if (temp == opr.equal){
                    valuPart = temp
                    classPart = KW.operator.equal
                }
                else if (temp == opr.incdec[0|1]){
                    valuPart = temp
                    classPart = KW.operator.incdec
                }
                else if (temp == opr.mdm[0]){
                    valuPart = temp
                    classPart = KW.operator.MDM
                }
                else if (temp == opr.rational[0]){
                    valuPart = temp
                    classPart = KW.operator.rational
                }
                else if (temp == opr.logical[0]){
                    valuPart = temp
                    classPart = KW.operator.logical
                }
            break;
            default:
                valuPart = temp
                classPart = "Invalid Lexene"
        
        
        }
       console.log(classPart + valuPart + lineNo)
        tokens.push(`(${classPart}, ${valuPart} , ${lineNo}) \n`)
   }
}
fs.writeFile("./tokens.txt",tokens,function(err){
    if(err) console.log(err)
})