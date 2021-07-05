// examine the document object
// console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
// document.title = 123;
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//document.all[10].textContent = "Hello";
//console.log(document.forms);
//console.log(document.links);

//console.log(document.images);

//console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);

//headerTitle.textContent = "hello";
//headerTitle.innerText = "Goodbye";
//headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";

//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[0]);
//items[1].textContent = "Hello 2";
//items[1].style.fontWeight = "bold";
//items[2].style.fontWeight = "bold";
//items[1].style.backgroundColor = "yellow";

//var li = document.getElementsByTagName("li");
//console.log(li);
//console.log(li[0]);
//li[1].textContent = "Hello 2";
//li[1].style.fontWeight = "bold";
//li[2].style.fontWeight = "bold";
//li[1].style.backgroundColor = "yellow";

//for (var i = 0; i < li.length; i++) {
//  li[i].style.backgroundColor = "#f4f4f4";
//}

//var header = document.querySelector("#main-header");
//header.style.borderBottom = "solid 4px #ccc";

//var input = document.querySelector("input");
//input.value = "Hello World";

//var itemList = document.querySelector("#items");
//console.log(itemList.parentNode);
//parent node in this case is main
//itemList.parentNode.style.backgroundColor = "#f4f4f4";
//console.log(itemList.parentNode.parentNode);

//console.log(itemList.childNode);

//console.log(itemList.children);

//console.log(itemList.nextSibling);

//console.log(itemList.nextElementSibling);

//createElements

//create div

//var newDiv = document.createElement("div");
//add class

//newDiv.className = "hello";

//add id

//newDiv.id = "hello1";

//add attribute
//newDiv.setAttribute("title", "hello Div");

//create text node
//var newDivText = document.createTextNode("hello world");

//add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector("header .container");
//var h1 = document.querySelector("header h1");

//console.log(newDiv);

//newDiv.style.fontsize = "30px";

//container.insertBefore(newDiv, h1);

// EVENTS

//var button = document
//  .getElementById("button")
//  .addEventListener("click", buttonClick);

//function buttonClick(e) {
//console.log("Button Clicked");
// document.getElementById("header-title").textContent = "Changed";
//document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//console.log(e);
//  console.log(e.target);
//  console.log(e.target.id);
//  console.log(e.target.className);
//  console.log(e.target.className);
//  var output = document.getElementById('output');
//  output.innerHTML = '<h3>'+e.target.id+'<h3>';

//  console.log(e.type);

//  console.log(e.clientX);
//  console.log(e.clientY);

//  console.log(e.offsetX);
//  console.log(e.offsetY);

//  console.log(e.altKey);
//  console.log(e.ctrlKey);
//  console.log(e.shiftKey);

//var button = document.getElementById("button");
//var box = document.getElementById("box");
//var select = document.querySelector("select");

//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseout", runEvent);

//document.addEventListener("mousemove", runEvent);

//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector("form");

//itemInput.addEventListener("keydown", runEvent);
//itemInput.addEventListener("blur", runEvent);
//itemInput.addEventListener("focus", runEvent);
//itemInput.addEventListener("input", runEvent);

//select.addEventListener("submit", runEvent);

//function runEvent(e) {
//e.preventDefault();
// console.log("EVENT TYPE: " + e.type);

// console.log(e.target.value);
//  document.getElementById("output").innerHTML =
//    "<h3>" + e.target.value + "</h3>";

//box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
//document.body.style.backgroundColor =
// "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
//}
