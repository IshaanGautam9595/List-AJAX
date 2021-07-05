var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit events
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//Add Item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById("item").value;

  //create new li element

  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";
  //console.log(li);

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement("button");

  //Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

//Remove Item
function removeItem(e) {
  // console.log(1);
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get lis
  var items = itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
