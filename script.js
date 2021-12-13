

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
authorName = document.querySelector(".author");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote....";
    //fetching random quotes and converting them into javascript
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    })
}


soundBtn.addEventListener("click",()=>{
    //It is a web speech api representing speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} written by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak method of speech synthesis speak utterance

});


copyBtn.addEventListener("click",()=>{
    //copies the quote on copyBtn and writeText is used for writing the text in the clipboard
    navigator.clipboard.writeText(quoteText.innerText);
    

});


quoteBtn.addEventListener("click",randomQuote);