let wordArray = [];
let list1 = document.getElementById("names1");
let list2 = document.getElementById("names2");

let swapCharacters = function(word) {
    let characters = word.split("");
    let firstChar = characters[0];
    let lastChar = characters[characters.length-1];
    characters[0] = lastChar;
    characters[characters.length-1] = firstChar;

    return characters.join("");
}

document.getElementById("startButton").addEventListener("click",function() {
    for (i = 0; i < 3; i++) {
        wordArray[i] = prompt("Please enter a word: ","");

        let listItem = document.createElement("li");
        listItem.textContent = wordArray[i];
        list1.appendChild(listItem);
    }

    document.getElementById("startButton").style.display = "none";
    document.getElementById("swapButton").style.display = "block";

});

document.getElementById("swapButton").addEventListener("click",function() {
	document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "flex";
    
    let swappedArray = wordArray.map(swapCharacters);

    for (i = 0; i < 3; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = swappedArray[i];
        list2.appendChild(listItem);
    }
});