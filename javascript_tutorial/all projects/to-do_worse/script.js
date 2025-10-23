const inputElement = document.querySelector(".js-name-input");
const inputDate = document.querySelector(".js-date-input");
const buttonAdd = document.querySelector(".btn-add");
const listContainer = document.querySelector(".list-container");
const taskContainer = document.querySelectorAll(".grid-container");

let todoList = []

buttonAdd.addEventListener('click', () => {
    todoList.push({
        name: inputElement.value,
        date: inputDate.value,
    })
    console.log(todoList)
    createList();
    inputElement.value = '';
})

function createList() {
    listContainer.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let newContainer = document.createElement('div');
        let newTask = document.createElement('p');
        let newDate = document.createElement('p');
        let buttonDelete = document.createElement('button');

        newContainer.classList.add('grid-container');
        newTask.textContent = todoList[i]['name'];
        newDate.textContent = todoList[i]['date'];
        buttonDelete.textContent = 'Delete'
        buttonDelete.classList.add('btn-delete');
        buttonDelete.addEventListener('click', () => {
            console.log(todoList[i])
            todoList.splice(i, 1)
        })

        newContainer.append(newTask, newDate, buttonDelete);
        listContainer.append(newContainer);
    }
}

listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-delete')) {
        event.target.closest('.grid-container').remove();
    }
    createList();
})
