let billTotalInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let perPersonTotal = document.getElementById('perPersonTotal');
let numberOfPeople = document.getElementById('numberOfPeople');

let people = Number(numberOfPeople.innerText);

const calculateBill = () => {
    const bill = Number(billTotalInput.value);
    const tip = Number(tipInput.value / 100);
    const total = (bill + (bill * tip)) / people;
    perPersonTotal.innerText = `$${total.toLocaleString('en-US')}`;
}

const decreasePeople = () => {}

const increasePeople = () => {
    
}