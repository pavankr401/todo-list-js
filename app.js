const textBox = document.getElementById("myText");
const addBtn = document.getElementById("addButton");
const listItems = document.getElementById('list-items').children;
const list_UL = document.getElementById('list-items');


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

