document.addEventListener('DOMContentLoaded', function () {
  const sheet = document.createElement('style');
  document.body.appendChild(sheet);

  const $rangeInput = document.querySelector('.range input');
  const labels = document.querySelectorAll('.range-labels li');
  const prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

  function getTrackStyle(el) {
    const curVal = el.value;
    const val = (curVal - 1) * 25;
    let style = '';

    labels.forEach((label) => {
      label.classList.remove('active');
    });

    const curLabel = labels[curVal - 1];
    if (curLabel) curLabel.classList.add('active');

    for (let i = 0; i < prefs.length; i++) {
      style += `.range input::-${prefs[i]} { background: linear-gradient(to right, #E9967A 0%, #E9967A ${val}%, #EEE ${val}%, #EEE 100%); }\n`;
    }

    return style;
  }

  $rangeInput.addEventListener('input', function () {
    sheet.textContent = getTrackStyle(this);
  });

  labels.forEach((label, index) => {
    label.addEventListener('click', () => {
      $rangeInput.value = index + 1;
      $rangeInput.dispatchEvent(new Event('input'));
    });
  });

  $rangeInput.dispatchEvent(new Event('input'));

  // Form submission handling
  document.getElementById("newGroupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const options = [
      { name: "Picnic", maxPeople: 10, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true },
      { name: "Sports", maxPeople: 20, minPrice: 0, potActive: true, potRestful: false, potOut: true, potStayin: false },
      { name: "Movies", maxPeople: 20, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true },
      { name: "Food", maxPeople: 15, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true }
    ];

    const numPeople = document.getElementById("num-people").value;
    const price = document.getElementById("prices").value;
    const active = document.getElementById("option1").checked;
    const restful = document.getElementById("option2").checked;
    const out = document.getElementById("option3").checked;
    const stayin = document.getElementById("option4").checked;

    // Optionally store the data to use on the next page
    localStorage.setItem("numPeople", numPeople);
    localStorage.setItem("price", price);
    localStorage.setItem("active", active);
    localStorage.setItem("restful", restful);
    localStorage.setItem("out", out);
    localStorage.setItem("stayin", stayin);

    // Redirect to another page
    window.location.href = "3-card.html";
  });
});
