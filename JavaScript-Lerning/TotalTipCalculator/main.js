let billTotalInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let perPersonTotal = document.getElementById('perPersonTotal');
let numberOfPeople = document.getElementById('numberOfPeople');

let people = Number(numberOfPeople.innerText);

const calculateBill = () => {
    const bill = Number(billTotalInput.value);
    const tip = Number(tipInput.value / 100);
    const total = (bill + (bill * tip)) / people;
    perPersonTotal.innerText = `$${total.toFixed(2)}`;
}

const decreasePeople = () => {
    if (people <= 1) {
        return;
    }
    people -= 1;
    numberOfPeople.innerText = people;
    calculateBill();
}

const increasePeople = () => {
    people += 1;
    numberOfPeople.innerText = people;
    calculateBill();
}