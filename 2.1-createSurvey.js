document.addEventListener('DOMContentLoaded', function () {
    const sheet = document.createElement('style');
    document.body.appendChild(sheet);
  
    
  });

  let form = document.getElementById("newGroupForm");
  form.addEventListener("submit", (e) => {
    const options = [
      { name: "Entertainment", time: 2, maxPeople: 20, minPrice: 1},
      { name: "Foods", time: 1, maxPeople: 8, minPrice: 2},
      { name: "Physical Activities", time: 3, maxPeople: 20, minPrice: 1},
      { name: "Creative", time: 1, maxPeople: 20, minPrice: 2}
    ];

    e.preventDefault();
    
    const numPeople = document.getElementById("num-people").value;
    const price = document.getElementById("prices").value;
    const time = document.getElementById("times").value;
    form.style.display = 'none';

    const potential = options;
    for(var i = options.length - 1; i >= 0; i--) {
      if(options[i].maxPeople < numPeople) {
        potential.splice(i, 1);
      } else if(options[i].minPrice > price) {
        potential.splice(i, 1);
      } else if(options[i].time > time) {
        potential.splice(i, 1);
      }
    }

    var finalPot = "";
    for(var i = 0; i < potential.length; i++) {
      finalPot = finalPot + potential[i].name;
      finalPot += " ";
    }

    let container = document.getElementById("container");
    let newText = `<p>Okay, now let's look at some options!${finalPot}</p> 
    <button class="continue"><a href="./3-card.html">Continue</a></button>`;

    let newThing = document.createElement("div");
    newThing.innerHTML = newText;
    container.appendChild(newThing);

  });