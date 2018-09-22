//split each in string into separate arrays
//get the length of each each word
//find the highest length, and get the index
//return the string in the array of longest length
function longest(sentence) {
    //split sentence to an array of words
    let wordsArr = sentence.split(" ");
    //initialize variables for holding result of comparison
    let maxLength = 0,
        longestWord = "";
    //determine longest word
    for (let str of wordsArr) {
        if (str.length > maxLength) {
            maxLength = str.length;
            longestWord = str;
        }
    }

    return longestWord;
}
