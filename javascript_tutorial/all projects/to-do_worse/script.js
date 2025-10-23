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
    // console.log(todoList)
    createList();
    inputElement.value = '';
})

function createList() {
    listContainer.innerHTML = '';
    todoList.forEach((task, i) => {
        let newContainer = document.createElement('div');
        let newTask = document.createElement('p')
        let newDate = document.createElement('p')
        let newBtnDelete = document.createElement('button')

        newContainer.classList.add('grid-container');
        newTask.textContent = task['name'];
        newDate.textContent = task['date'];
        newBtnDelete.textContent = 'Delete';
        newBtnDelete.classList.add('btn-delete');
        newBtnDelete.addEventListener('click', () => {
            todoList.splice(i, 1);
        })

        newContainer.append(newTask, newDate, newBtnDelete);
        listContainer.append(newContainer);


    })
}

listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-delete')) {
        event.target.closest('.grid-container').remove();
    }
    createList();
})
