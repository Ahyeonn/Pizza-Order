const inputName = document.querySelector('#input-name');
const inputDiameter = document.querySelector('#input-diameter');
const selectButton = document.querySelector('#select-button');

const displayName = document.querySelector('#display-name');
const displayDiameter = document.querySelector('#display-diameter');
const displayCost = document.querySelector('#display-cost');

const displayPic = document.querySelector('#display-pic');

inputName.addEventListener('input', updateFirst);
inputDiameter.addEventListener('input', updateFirst);
selectButton.addEventListener('input', updateFirst);


function updateFirst (e) {
    let target =e.target.id;
    console.log(target)

    if (target === "input-name"){
        updateName();
    }
    if (target === "input-diameter"){
        updateDiameter();
    }
    if (target === "select-button"){
        updateCost();
    }
}

function updateName() {
    const newName = inputName.value;
    displayName.innerHTML = newName;
}

function updateDiameter() {
    const newDiameter = inputDiameter.value +"px";
    displayDiameter.innerHTML = newDiameter;
    displayPic.style.width = newDiameter;
    displayPic.style.height = newDiameter;
    updateCost()
    // might have to fix line 37
}

function updateCost() {
    const newPizza = selectButton.value;
    // displayCost.innerHTML = newPizza;
    let defaultCost = 0.25;
    if (newPizza !== "Cheese"){
        defaultCost = 0.33;
    }
    const pizzaSize = parseInt(inputDiameter.value)
    const pizzaArea = Math.PI * (pizzaSize/2) * (pizzaSize/2)
    const pizzaPrice = parseFloat(pizzaArea * defaultCost)
    displayCost.innerHTML = pizzaPrice.toFixed(2)

    // const pizzaArea = parseFloat(inputDiameter.value)
}
