/*=== RESIZING ===*/
let resizeCount = document.getElementById('resizeCount');
window.addEventListener('resize', countResizes);

function countResizes() {
  resizeCount.innerHTML = Number(resizeCount.innerHTML) + 1;
}

/*=== CLICK COUNTING ===*/
let clickCount = document.getElementById('clickCount');

function clickCounter() {
  clickCount.innerHTML = Number(clickCount.innerHTML) + 1;
}

/*=== CLICK COUNTING 2 ===*/
let clickCount2 = document.getElementById('clickCount2');
let click2Button = document.getElementById('click2');

click2Button.onclick = function() {
  clickCount2.innerHTML = Number(clickCount2.innerHTML) + 1;
}

/*=== USING LOCALSTORAGE ===*/
let saveForm = document.getElementById('save');
let key = document.getElementById('key');
let value = document.getElementById('value');

saveForm.addEventListener('submit', storeLocalStorage);

function storeLocalStorage() {
  localStorage.setItem(key.value, value.value);
}

let localValue = document.getElementById('getValue');
let retrieveForm = document.getElementById('retrieve');

retrieveForm.addEventListener('submit', getLocalStorage);

function getLocalStorage() {
  event.preventDefault();
  let value = localStorage.getItem(localValue.value);
  let p = document.getElementById('showValue');
  p.innerHTML = 'Look at your value from localstorage: ' + value;
}
