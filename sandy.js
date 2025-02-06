// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener("DOMContentLoaded", (event) => {

    let no=document.querySelector(".no");
    let yes=document.querySelector(".yes");
    let happyResponse=document.querySelector(".happyResponse");
    let annoyedResponse=document.querySelector(".annoyedResponse");

    no.addEventListener("click", function(){
    annoyedResponse.style.display = "block"
    happyResponse.style.display = "none"
    });
    
    yes.addEventListener("click", function(){
    happyResponse.style.display = "block"
    annoyedResponse.style.display = "none"
    
        });
    });






















