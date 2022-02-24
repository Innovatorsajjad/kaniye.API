const KaniyeGenarator = ()=>{
    fetch ('https://api.kanye.rest/')
    .then (Response=>Response.json())
    .then(data => DisplayQuote(data))
};
 const DisplayQuote = (Quote)=>{
     console.log(Quote.quote);
const QuoteElement = document.getElementById("Quote")
QuoteElement.innerText= Quote.quote;


 }
