/**
 * 1. Assign elements to variables
 */

let form = document.getElementById("todos-form");
let input = document.getElementById("item-input");
let addItem = document.querySelector("[type='submit']");
let clear = document.getElementById("clear-list");
let itemList = document.getElementById("item-list");

console.log(itemList);

// My variables
let items = [];

/**
 * 2. Add functionality on the submit button
 */

addItem.addEventListener("click", function (e) {
  return onClickAddItem(e, input, items);
});

function onClickAddItem(e, input, items) {
  e.preventDefault();

  if (input.value) {
    items.push(input.value);
    // after pushing the item clear the input field
    input.value = "";
    // render my list
    renderList();
  } else {
    // handle empty input field
  }
}

/**
 * 3. Render items into itemlist
 */

function renderList() {
  itemList.innerHTML = "";

  items.forEach((el) => {
    itemList.insertAdjacentHTML(
      "afterbegin",
      "<div class='item my-3'><h5 class='item-name text-capitalize'>" +
        el +
        "</h5><div class='item-icons'><button class='complete-btn'>Complete</button><button class='edit-btn'>Edit</button><button class='delete-btn'>Delete</button></div></div>"
    );

    handleEl(el);
  });

  console.log(items);
  console.log(itemList);
}

// hint:
function handleEl(el) {
  // find the html element
  let items = itemList.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.querySelector(".item-name").textContent == el) {
      item.querySelector(".complete-btn", onClickComplete);
    }
  });
}

function onClickComplete() {}

// hint 2: to remove element from HTML use removeChild method
