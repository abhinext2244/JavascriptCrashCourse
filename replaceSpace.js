function replace(inputString) {
    
    return inputString.replace(/\s+/g, '-');
}

const inputString = "The quick brown fox jumps over the lazy dog";
const replacedString = replace(inputString);
console.log(replacedString);
