//button reference
var btn = document.querySelector("#btn");

//text area reference input
var txtInput = document.querySelector("#txt-input");

//div  area reference output
var outputTxt = document.querySelector("#output-txt");

//url
var url = "https://api.funtranslations.com/translate/dothraki.json"

function getText(text) {
    return url + "?" +"text=" + text
}

//function for click
function clickEventHandler() {

    //reading input value
    var inputText = txtInput.value;
    //fetching from server
    fetch(getText(inputText)).then(Response => Response.json()).then(json => outputTxt.innerText = json.contents.translated)


}

//button clicking event
btn.addEventListener("click", clickEventHandler);