document.addEventListener('DOMContentLoaded', function () {
    const sheet = document.createElement('style');
    document.body.appendChild(sheet);
  
    
  });

  let form = document.getElementById("newGroupForm");
  form.addEventListener("submit", (e) => {
    const options = [
      { name: "Picnic", time: 2, maxPeople: 10, minPrice: 2, potBody: false, potBrain: false, potMake: false, potRest: true, potOut: true, potIn: false},
      { name: "Sports", time: 3, maxPeople: 20, minPrice: 1, potBody: true, potBrain: false, potMake: false, potRest: false, potOut: true, potIn: false },
      { name: "Movies", time: 3, maxPeople: 20, minPrice: 2, potBody: false, potBrain: false, potMake: false, potRest: true, potOut: false, potIn: true },
      { name: "Food", time: 2, maxPeople: 8, minPrice: 2, potBody: false, potBrain: false, potMake: false, potRest: true, potOut: true, potIn: true }
    ];

    e.preventDefault();
    
    const numPeople = document.getElementById("num-people").value;
    const price = document.getElementById("prices").value;
    const time = document.getElementById("times").value;
    const body = document.getElementById("option1").checked;
    const brain = document.getElementById("option2").checked;
    const make = document.getElementById("option3").checked;
    const rest = document.getElementById("option4").checked;
    const out = document.getElementById("option5").checked;
    const inn = document.getElementById("option6").checked;
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
      } else if(options[i].time > time) {
        potential.splice(i, 1);
      }else if(options[i].potBody != body) {
        potential.splice(i, 1);
      } else if(options[i].potBrain != brain) {
        potential.splice(i, 1);
      } else if(options[i].potMake != make) {
        potential.splice(i, 1);
      } else if(options[i].potRest != rest) {
        potential.splice(i, 1);
      } else if(options[i].potOut != out) {
        potential.splice(i, 1);
      } else if(options[i].potIn != inn) {
        potential.splice(i, 1);
      }
    }

    var finalPot = "";
    for(var i = 0; i < potential.length; i++) {
      finalPot = finalPot + potential[i].name;
      finalPot += " ";
    }

    let container = document.getElementById("container");
    let newText = `<p>Final options: ${finalPot}</p> 
    <button class="continue"><a href="./3-card.html">Continue</a></button>`;

    let newThing = document.createElement("div");
    newThing.innerHTML = newText;
    container.appendChild(newThing);

  });