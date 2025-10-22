// const todoList = []

const inputElement = document.querySelector(".js-name-input");
const inputDate = document.querySelector(".js-date-input");
const buttonAdd = document.querySelector(".btn-add")
const listContainer = document.querySelector(".grid-container");

// buttonAdd.addEventListener('click', () => {
//     const newElement = document.createElement('p');
//     newElement.textContent = inputElement.value;
//     listContainer.appendChild(newElement);
//     inputElement.value = "";

// })

const newRow = document.createElement('div')
newRow.classList.add('list-row')


buttonAdd.addEventListener('click', () => {
    listContainer.appendChild(newRow);
    const elementName = document.createElement('p');
    elementName.textContent = inputElement.value;

    const elementDate = document.createElement('p')
    elementDate.textContent = inputDate.value;

    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete'
    buttonDelete.classList.add("btn-delete");

    listContainer.append(elementName)
    listContainer.append(elementDate)
    listContainer.append(buttonDelete)


})