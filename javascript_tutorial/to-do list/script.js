const inputElement = document.querySelector(".js-name-input");
const inputDate = document.querySelector(".js-date-input");
const buttonAdd = document.querySelector(".btn-add");
const listContainer = document.querySelector(".container");



buttonAdd.addEventListener('click', () => {

    const newContainer = document.createElement('div');
    const newElement = document.createElement('p')
    const newElementDate = document.createElement('p')
    const newButtonDelete = document.createElement('button')
    
    newContainer.classList.add('grid-container');
    newElement.textContent = inputElement.value;
    newElementDate.textContent = inputDate.value;
    newButtonDelete.textContent = 'Delete';
    newButtonDelete.classList.add('btn-delete')
    
    newContainer.append(newElement, newElementDate, newButtonDelete)
    listContainer.append(newContainer);

    inputElement.value = '';
    // inputDate.value = '';
})

listContainer.addEventListener('click', (event) => {
    console.log('clicked')
    if (event.target.classList.contains('btn-delete')) {
        event.target.closest('.grid-container').remove()
    }
})
