window.onload = function() {


    var outer_card = document.getElementById("outer-card");
    var inner_card = document.getElementById("inner-card");
    var prompts = document.getElementById("prompt");
    var image = document.createElement("img");

    var word_top = "50%";

    var food = [
        {
            category: "American",
            cuisines: ["Burgers & Sandwiches", "Barbecue & Southern Classics", "Breakfast Favorites", "Regional Specialties"]
        },
        {
            category: "South American",
            cuisines: ["Columbian", "Brazilian", "Argentinian", "Mexican"]
        },
        {
            category: "Asian",
            cuisines: ["Japanese", "Korean", "Chinese", "Vietnamese", "Thai", "Indian"]
        },
        {
            category: "African",
            cuisines: ["Nigerian", "South African", "Moroccan", "Ghanaian"]
        },
        {
            category: "European",
            cuisines: ["French", "Italian", "German", "Mediterranean"]
        },
        {
            category: "Middle Eastern",
            cuisines: ["Persian", "Turkish", "Levantine", "Egyptian"]
        }
    ];



    // START: Select random food cuisine 
    var random_index = Math.floor(Math.random() * food.length);
    prompts.innerHTML = food[random_index].category;



    count = 0;


    var food_cuisine;
    var narrow_food = false;

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
            new_prompt.style.top = word_top;

            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";

            if (narrow_food && food[random_index].cuisines.length != 0) {
                food_cuisine = Math.floor(Math.random() * food[random_index].cuisines.length);
                console.log(food_cuisine);
                new_prompt.innerHTML = food[random_index].cuisines[food_cuisine];
                
                var new_image = document.createElement("img");
                new_image.classList.add("image");
                
                new_image.setAttribute("src", "./imgs/" + food[random_index].cuisines[food_cuisine] + ".png");
                inner_new_card.appendChild(new_image);

                
                food[random_index].cuisines.splice(food_cuisine, 1);
            } else {
                random_index = Math.floor(Math.random() * food.length);
                new_prompt.innerHTML = food[random_index].category;
                
            }
            

        } else if (e.key == 'ArrowRight') {

            count += 1;
            if (count == 1) {
                word_top = "80%";
            }
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
            new_prompt.style.top = word_top;
            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";

            narrow_food = true;
            if (count == 1) {
                food_cuisine = Math.floor(Math.random() * food[random_index].cuisines.length);
                console.log(food_cuisine);
                new_prompt.innerHTML = food[random_index].cuisines[food_cuisine];
                
                var new_image = document.createElement("img");
                new_image.classList.add("image");
                
                new_image.setAttribute("src", "./imgs/" + food[random_index].cuisines[food_cuisine] + ".png");
                inner_new_card.appendChild(new_image);
                
            }
        }

        
    });







}