let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let arrayLi = document.querySelectorAll('li');
    let orderList = document.querySelector('ol')
    if (arrayLi.length === 0) {
        let elemP = document.createElement("p");
        elemP.innerText = "Actions";
        orderList.before(elemP);
    }

    let text = document.querySelector("input").value;
    let elem = document.createElement("li");
    let span = document.createElement('span');
    span.addEventListener('click', doneTask);
    span.innerText = text;
    elem.appendChild(span);
    let buttonRemove = document.createElement('button');
    buttonRemove.addEventListener('click', removeTask);
    buttonRemove.innerText = "Remove";
    buttonRemove.type = "button";
    elem.appendChild(buttonRemove);
    orderList.appendChild(elem);
})

function removeTask() {
    this.parentElement.remove();
    let arrayLi = document.querySelectorAll('li');
    if (arrayLi.length === 0) {
        let action = document.querySelector("p");
        action.remove();
    }
}

function doneTask() {
    if (this.classList.contains("doneTask")) {
        this.classList.remove("doneTask");
    }
    else {
        this.classList.add('doneTask');
    }
}