let headerE1 = document.getElementById("header");
let displayEvent = document.getElementById("displayEvent");

function handleMouseOver(){
    console.log("handleMouseOver");
    headerE1.style.color = "red";
    headerE1.style.fontSize = "80px";

}

function handleMouseOut(){
    console.log("handleMouseOut");
    headerE1.style.color = "black";
    headerE1.style.fontSize = "38px";

}


//click event           
headerE1.addEventListener("click", function(){
    console.log("Event:click");
    displayEvent.innerHTML = "Event: click (header)";
});

 //mouseover
headerE1.addEventListener("mouseover", function(){
    console.log("Event: mouseover");
    displayEvent.innerHTML = "Event: mouseover (header)";
});

//mouseout
headerE1.addEventListener("mouseout", function(){
    console.log("Event: mouseout");
    displayEvent.innerHTML = "Event: mouseout (header)";
});

homePageLink.addEventListener("click", function(){


});