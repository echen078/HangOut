window.onload = function() {


    var outer_card = document.getElementById("outer-card");
    var inner_card = document.getElementById("inner-card");
    var prompts = document.getElementById("prompt");

    var foodCuisines = new Map([
        ["American", ["Burgers & Sandwiches", "Barbecue & Southern Classics", "Breakfast Favorites", "Regional Specialties"]],

        ["South American", ["Columbian", "Brazilian", "Argentinian", "Mexican", "Latin"]],

        ["Asian", ["Japanese", "Korean", "Chinese", "Malaysian", "Indonesian", "Vietnamese", "Thai", "Indian", "Pakistani"]],

        ["African", ["Nigerian", "South African", "Moroccan"]],

        ["European", ["French", "Italian", "Russian", "Spanish", "German", "Mediterranean", "Polish"]],
        
        ["Middle Eastern", ["Greek", "Persian", "Turkish", "Levantine", "Egyptian"]]
    ])
       
    
    // START: Select random food cuisine 
    var random_index = Math.floor(Math.random() * foodCuisines.size);
    prompts.innerHTML = Array.from(foodCuisines.keys())[random_index]
    foodCuisines.delete(Array.from(foodCuisines.keys())[random_index])


    document.addEventListener("keydown", (e) => {
        
        if (e.key == 'ArrowLeft') {
            var outer_card = document.getElementById("outer-card");
            var inner_card = document.getElementById("inner-card");
            outer_card.style.animation = "slideLeft 1s ease-in-out forwards";
            inner_card.style.animation = "rotateLeft 1s ease-in         forwards, fadeOut 1s ease-in forwards";

            outer_card.removeAttribute("id");
            inner_card.removeAttribute("id");

            var new_card = document.createElement("div");
            var inner_new_card = document.createElement("div");
            var new_prompt = document.createElement("p");

            var body = document.querySelector("body");
            body.appendChild(new_card);
            new_card.appendChild(inner_new_card);
            inner_new_card.appendChild(new_prompt);

            inner_new_card.style.animation = "fadeIn 1s ease-in forwards";
            new_prompt.style.animation = "fadeIn 1s ease-in forwards";

            new_card.classList.add("box-wrapper");
            inner_new_card.classList.add("box");
            new_prompt.classList.add("prompt");
            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";

            random_index = Math.floor(Math.random() * foodCuisines.size);
            new_prompt.innerHTML = Array.from(foodCuisines.keys())[random_index];
            foodCuisines.delete(Array.from(foodCuisines.keys())[random_index]);
            console.log(foodCuisines.size);



        } else if (e.key == 'ArrowRight') {
            var outer_card = document.getElementById("outer-card");
            var inner_card = document.getElementById("inner-card");
            outer_card.style.animation = "slideRight 1s ease-in-out forwards";
            inner_card.style.animation = "rotateRight 1s ease-in         forwards, fadeOut 1s ease-in forwards";

            outer_card.removeAttribute("id");
            inner_card.removeAttribute("id");
            
            var new_card = document.createElement("div");
            var inner_new_card = document.createElement("div");
            var new_prompt = document.createElement("p");
            inner_new_card.appendChild(new_prompt);

            var body = document.querySelector("body");
            body.appendChild(new_card);
            new_card.appendChild(inner_new_card);

            inner_new_card.style.animation = "fadeIn 1s ease-in forwards";
            new_prompt.style.animation = "fadeIn 1s ease-in forwards";

            new_card.classList.add("box-wrapper");
            inner_new_card.classList.add("box");
            new_prompt.classList.add("prompt");
            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";

            /**
            var food_type_index = Math.floor(Math.random() * Array.from(foodCuisines.keys())[random_index].length);
            console.log(food_type_index);
            console.log(foodCuisines.get(Array.from(foodCuisines.keys())[random_index])[food_type_index]);
            **/
        }

        
    });







}