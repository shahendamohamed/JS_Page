"use strict";

//Create The Header
let myHeader = document.createElement("header");
let myLogo = document.createElement("div");
let myLogoText = document.createTextNode("Shahenda");
let myNav = document.createElement("nav");
let myUl = document.createElement("ul");
let myLi;
const navItems = ["Home", "About", "Service", "Contact"];

for (let index = 0; index < navItems.length; index++) {
    myLi = document.createElement("li");
    myLi.appendChild(document.createTextNode(`${navItems[index]}`));
    myLi.style.cssText = "display: inline; padding-right: 10px; font-size: 16px;";

    myUl.appendChild(myLi);
}

myHeader.className = "my-header";
myLogo.className = "my-logo";
document.body.style.cssText = "margin:0; ";
myHeader.style.cssText =
    "display:block; padding:10px; margin-bottom: 20px; ";
myLogo.style.cssText = "display:inline; font-size: 25px; font-weight:bold; color: rgb(35,169,110);"
myLogo.appendChild(myLogoText);
myHeader.appendChild(myLogo);

myNav.style.cssText = "display: inline; width: 50%; float: right; text-align: end; height: 27px; padding-top: 8px;";
myUl.style.cssText = "list-style: none; display: inline;";


myNav.appendChild(myUl);
myHeader.appendChild(myNav);
document.body.appendChild(myHeader);

//create the product section 
let myMainDiv = document.createElement("div");
let myProductDiv;

for (let index = 1; index < 16; index++) {
    myProductDiv = document.createElement("div");
    myProductDiv.setAttribute("class", "prod");
    myProductDiv.appendChild(document.createTextNode(`${index}`));
    let mySpan = document.createElement("span");
    mySpan.appendChild(document.createTextNode(`Product`));

    myProductDiv.style.cssText = "font-weight:bold; font-size:25px; padding: 10px; background-color: white; width:29%; height: 70px; text-align: center; margin-bottom: 15px;";
    mySpan.style.cssText = "font-weight:normal; font-size:15px; display:block;text-align: center; margin-top: 10px; color:#888";
    myProductDiv.appendChild(mySpan);
    myMainDiv.appendChild(myProductDiv)
}

myMainDiv.setAttribute("id", "products");


myMainDiv.style.cssText = 
"padding: 15px; padding-bottom:0; background-color: rgb(238 238 238); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;";

document.body.appendChild(myMainDiv);

//Create the footer
let myFooter = document.createElement("footer");
let myFooterText =document.createTextNode("copyright 2022");

myFooter.setAttribute("class","footer");
myFooter.style.cssText = "font-size: 22px; padding:11px; font-weight:bold; color:white; background-color: rgb(35,169,110); text-align:center;";

myFooter.appendChild(myFooterText);
document.body.appendChild(myFooter);
