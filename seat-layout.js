let seats_selected = 'Selected seats : ';
let total_fare = 'Total Fare : ';
const clickHandler = (event) => {
  event.target.style.backgroundColor = 'grey';
  event.target.style.color = 'white';
  event.target.disabled = true;
  seats_selected = seats_selected + ' ' + event.target.value;
  document.getElementById('selected-seats').textContent = seats_selected;
  const seats_count = seats_selected.split(' ').length - 4;
  document.getElementById('fare').textContent = total_fare + seats_count * 500;
};
