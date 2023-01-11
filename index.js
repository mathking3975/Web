//index.js
function onClickCreateButton(){
    const titleInputElement = document.querySelector('#input_title');
    const todoListElement = document.querySelector('.todo-list');
    const item = createTodoItem(titleInputElement.value);
    todoListElement.appendChild(item);
}

function createTodoItem(title){
    const item = document.createElement('div');
    item.className = 'item';

    const titleElement = document.createElement('div');
    const removeElement = document.createElement('div');
    
    titleElement.innerText = title;

    titleElement.className = 'title';
    removeElement.className = 'remove';
    
    item.appendChild(titleElement);
    item.appendChild(removeElement);

    removeElement.addEventListener('click', function(){
        item.remove();
    });

    item.addEventListener('dblclick', function(){
        let r = 255
        let g = 255
        let b = 255
        while( r+g+b < 300){
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
        }
        item.style.backgroundColor = `rgb(${r},${g},${b})`;
    })

    return item;
}
