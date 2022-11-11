const textBox = document.getElementById("myText");
const addBtn = document.getElementById("addButton");
const listItems = document.getElementById('list-items').children;
const list_UL = document.getElementById('list-items');
const root = document.querySelector(":root");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const defaultBtn = document.querySelector("#default");



// add up, down, remove button 

function attachListButtons(li) {
  // up arrow mark

  let up = document.createElement('button');
  up.className = 'up';
  up.innerHTML = `<span><i class='fa fa-arrow-up'></i></span>`;
  li.appendChild(up);

  // down arrow mark 
  let down = document.createElement('button');
  down.className = 'down';
  down.innerHTML = `<i class='fa fa-arrow-down'></i>`
  li.appendChild(down);

  // remove symbol
  let removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.innerHTML =`<i class='fa fa-trash'></i>`
  li.appendChild(removeBtn);
}

// add buttons to each list element which are already exist
for (let i = 0; i < listItems.length; i++) {
  attachListButtons(listItems[i]);
}


list_UL.addEventListener('click', (event) => {

  if (event.target.tagName == 'BUTTON') {
    

    switch (event.target.className) {
      
      case 'up':
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;

        if (prevLi) ul.insertBefore(li, prevLi);
        break;

      case 'down':
        let li2 = event.target.parentNode;
        let nextLi = li2.nextElementSibling;
        let ul2 = li2.parentNode;

        if(nextLi) ul2.insertBefore(nextLi, li2);
      break;

      case 'remove':
        let li3 = event.target.parentNode;
        let ul3 = li3.parentNode;
        ul3.removeChild(li3);
      break;
    }
  }
})

addBtn.addEventListener('click', function handleClick(){
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = textBox.value;
  attachListButtons(li);
  if(textBox.value != "") ul.appendChild(li);
  textBox.value = "";
})


redBtn.addEventListener("click", function handleClick(){
  root.style.setProperty("--nav-color", "rgb(165, 0, 0)");
  root.style.setProperty("--nav-hover-color", "rgb(244, 0, 0)");
  root.style.setProperty("--bg-color", "rgb(224, 0, 0)");
  root.style.setProperty("--btn-color", "rgb(122, 0, 0)");
  root.style.setProperty("--btn-hover-color", "rgb(135, 47, 47)");
})

greenBtn.addEventListener("click", function handleClick(){
  root.style.setProperty("--nav-color", "rgb(0, 157, 0)");
  root.style.setProperty("--nav-hover-color", "rgb(111, 223, 111)");
  root.style.setProperty("--bg-color", "rgb(0, 230, 0)");
  root.style.setProperty("--btn-color", "rgb(0, 105, 0)");
  root.style.setProperty("--btn-hover-color", "rgb(62, 117, 62)");
})

defaultBtn.addEventListener("click", function handleClick(){
  root.style.setProperty("--nav-color", "rgb(108, 0, 240)");
  root.style.setProperty("--nav-hover-color", "rgb(185, 127, 255)");
  root.style.setProperty("--bg-color", "blueviolet");
  root.style.setProperty("--btn-color", "rgb(59, 0, 130)");
  root.style.setProperty("--btn-hover-color", "rgb(82, 0, 182)");
})