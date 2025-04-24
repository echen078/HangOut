document.addEventListener('DOMContentLoaded', function () {
    const sheet = document.createElement('style');
    document.body.appendChild(sheet);
  
    const $rangeInput = document.querySelector('.range input');
    const labels = document.querySelectorAll('.range-labels li');
    const prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
  
    function getTrackStyle(el) {
      const curVal = el.value;
      const val = (curVal - 1) * 25; // 5 steps: 0%, 25%, 50%, 75%, 100%
      let style = '';
  
      // Reset label classes
      labels.forEach((label, i) => {
        label.classList.remove('active');
      });
  
      const curLabel = labels[curVal - 1];
      if (curLabel) curLabel.classList.add('active');
  
      // Set track style
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
  
    // Init once at load
    $rangeInput.dispatchEvent(new Event('input'));
  });

  let form = document.getElementById("newGroupForm");
  form.addEventListener("submit", (e) => {
    const options = [
      { name: "Picnic", maxPeople: 10, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true},
      { name: "Sports", maxPeople: 20, minPrice: 0, potActive: true, potRestful: false, potOut: true, potStayin: false },
      { name: "Movies", maxPeople: 20, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true },
      { name: "Food", maxPeople: 15, minPrice: 10, potActive: false, potRestful: true, potOut: true, potStayin: true }
    ];

    e.preventDefault();
    
    const numPeople = document.getElementById("num-people").value;
    const price = document.getElementById("prices").value;
    const active = document.getElementById("option1").checked;
    const restful = document.getElementById("option2").checked;
    const out = document.getElementById("option3").checked;
    const stayin = document.getElementById("option4").checked;
    form.style.display = 'none';

    var finalPrice = 100000;
    if(price == 1) {finalPrice = 0;} 
    else if(price == 2){finalPrice = 10;}
    else if(price == 3) {finalPrice = 30;}
    else if(price == 4) {finalPrice = 50;}

    const potential = options;
    for(var i = options.length - 1; i >= 0; i--) {
      if(options[i].maxPeople < numPeople) {
        potential.splice(i, 1);
      } else if(options[i].minPrice > price) {
        potential.splice(i, 1);
      } else if(options[i].potActive != active) {
        potential.splice(i, 1);
      } else if(options[i].potRestful != restful) {
        potential.splice(i, 1);
      } else if(options[i].potOut != out) {
        potential.splice(i, 1);
      } else if(options[i].potStayin != stayin) {
        potential.splice(i, 1);
      }
    }

    var finalPot = "";
    for(var i = 0; i < potential.length; i++) {
      finalPot = finalPot + potential[i].name;
      finalPot += " ";
    }

    let container = document.getElementById("container");
    let newText = `<p>The number of people is: ${numPeople}</p>
    <p>The price is: ${finalPrice}</p>
    <p>${active ? "active!" : ""}</p>
    <p>${restful ? "restful!" : ""}</p>
    <p>${out ? "going out!" : ""}</p>
    <p>${stayin ? "staying in!" : ""}</p>
    <p>Final options: ${finalPot}</p>`;

    let newThing = document.createElement("div");
    newThing.innerHTML = newText;
    container.appendChild(newThing);

  });