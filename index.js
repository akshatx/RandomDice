var randomNumber1=Math.floor(Math.random()*6) +1;

var random1="images/dice" + randomNumber1+".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", random1);

var randomNumber2=Math.floor(Math.random()*6) +1;

var random2="images/dice" + randomNumber2+".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", random2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 win!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="🚩Player 2 win!!";
}
else{
    document.querySelector("h1").textContent="Draw!!";
}