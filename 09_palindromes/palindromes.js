const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const cleanWord = word
        .toLowerCase()
        .split("")
        .filter((element) => alphanumerical.includes(element))
        .join("");

    if (cleanWord.length == 0 || cleanWord.length == 1) return true;
    else if (cleanWord[0] != cleanWord[cleanWord.length - 1]) return false;

    else return palindromes(cleanWord.slice(1, -1));
    

};

// Do not edit below this line
module.exports = palindromes;
