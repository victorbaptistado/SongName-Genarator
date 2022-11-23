

function firstWord(){
    let randomNumber = Math.floor(Math.random()*4);
    switch (randomNumber) {
        case 0:
            return "Children";
        case 1:
            return "Infinite";
        case 2:
            return "Delusion";
        case 3:
            return "Fields";  
        default:
            break;
    }
}

function secondWord(){
    let randomNumber = Math.floor(Math.random()*4);
    switch (randomNumber) {
        case 0:
            return "of";
        case 1:
            return "at";
        case 2:
            return "in";
        case 3:
            return "and";  
        default:
            break;
    }
}

function thirdWord(){
    let randomNumber = Math.floor(Math.random()*4);
    switch (randomNumber) {
        case 0:
            return "my Life";
        case 1:
            return "Infinty";
        case 2:
            return "the City";
        case 3:
            return "the storm";  
        default:
            break;
    }
}

function displayWord(firstWord, secondWord, thirdWord){
    let concatenateWord = `${firstWord} ${secondWord} ${thirdWord}`;
    document.getElementById('display').innerHTML = concatenateWord;
}

document.getElementById("displayWord").addEventListener("click", alert('hi'));

console.log('hi');
/*
btn.onclick = function() {
    return alert('hey');
    
    //displayWord(firstWord(), secondWord(), thirdWord());

    var btn = document.getElementById("myButton");
    btn.onclick = displayDate;
    
}
/*
var btn = document.getElementById("displayWord");
btn.onclick = displayWord;
*/

console.log(displayWord(firstWord(), secondWord(), thirdWord()));









