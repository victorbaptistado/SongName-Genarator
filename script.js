function firstWord(){
    let randomNumber = Math.floor(Math.random()*22);
    switch (randomNumber) {
        case 0:
            return "Children";
        case 1:
            return "Highway";
        case 2:
            return "Delusion";
        case 3:
            return "Fields";
        case 4:
            return "A dog";  
        case 5:
            return "Flowers";  
        case 6:
            return "Mountains";  
        case 7:
            return "Lonely";  
        case 8:
            return "Boys";  
        case 9:
            return "Girls";  
        case 10:
            return "Love";  
        case 11:
            return "Loving";
        case 12:
            return "Hunting"; 
        case 13:
            return "Prayer"; 
        case 14:
            return "Bucolic";
        case 15:
            return "Eternal"; 
        case 16:
            return "My hope"; 
        case 17:
            return "Destiny";
        case 18:
            return "Singing";
        case 19:
            return "The dance";
        case 20:
            return "Growth";
        case 21:
            return "Rising";
        default:
            break;
    }
}

function secondWord(){
    let randomNumber = Math.floor(Math.random()*5);
    switch (randomNumber) {
        case 0:
            return "of";
        case 1:
            return "at";
        case 2:
            return "in";
        case 3:
            return "and";  
        case 4:
            return "for";
        default:
            break;
    }
}

function thirdWord(){
    let randomNumber = Math.floor(Math.random()*20);
    switch (randomNumber) {
        case 0:
            return "my life";
        case 1:
            return "infinty";
        case 2:
            return "the city";
        case 3:
            return "the storm";  
        case 4:
            return "vortex";  
        case 5:
            return "that man";
        case 6:
            return "circus";  
        case 7:
            return "grey";  
        case 8:
            return "shadow";  
        case 9:
            return "passion";  
        case 10:
            return "science"; 
        case 11: 
            return "war";
        case 12: 
            return "sunshine";   
        case 13: 
            return "strike";
        case 14:
            return "the talisman";
        case 15:
            return "youth";
        case 16:
            return "blind";
        case 17:
            return "censorship";
        case 18:
            return "London";
        case 18:
            return "heartbreaker";
        case 19:
            return "gold";
        default:
            break;
    }
}

document.getElementById('displayBtn').onclick = function(){displayWord(firstWord(), secondWord(), thirdWord())};

function displayWord(firstWord, secondWord, thirdWord){
    let concatenateWord = `${firstWord} ${secondWord} ${thirdWord}`;
    document.getElementById('display').innerHTML = concatenateWord;

}

