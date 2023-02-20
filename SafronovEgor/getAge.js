function getAge(inputString) {
    let firstSymbol = inputString.substr(0,1);
    return +firstSymbol
}
console.log(getAge("4 годика"));


/* функция должна принимать параметр inputString, который является строкой и первый символ в этой строке - цифра функция должна возратить чистло, которым явалятеся эта цифра*/

"4 годика".substr(0,1);