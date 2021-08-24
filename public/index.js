const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// navbar active underline function
var items = document.getElementsByClassName('nav-link');
var activeClassName = 'active';

function unselectItems() {
  for (var i = 0; i < items.length; i++) {  
    items[i].classList.remove('border-b-4' ,'border-blue-500');
  }
}

function selectItem(item) {
  unselectItems();
  item.classList.add('border-b-4' ,'border-blue-500');
}

function onItemClick(event) {
  selectItem(event.target);
}

for (var i = 0; i < items.length; i++) {  
  items[i].addEventListener('click', onItemClick);
}