function greeting(){
    let word = "hi";

    function sayWord(){
        return `Hello..... ${word}`;
    }
    return sayWord();
}

let hi = greeting();
hi;

document.write(greeting());