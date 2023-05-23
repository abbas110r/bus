const goHandler = () => {
  const val = document.getElementById('date').value;
  const num = document.getElementById('num').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  window.location.href =
    'http://127.0.0.1:5500/seat-layout.html?date=' +
    val +
    '&num=' +
    num +
    '&from=' +
    from +
    '&to=' +
    to;
};
const dateHandler = (event) => {
  if (new Date(event.target.value) > new Date()) {
  } else {
    alert('Please select a valid date!');
    event.target.value = new Date().toISOString().split('T')[0];
  }
};
