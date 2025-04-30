window.onload = function() {


    outer_card = document.getElementById("outer-card");
    inner_card = document.getElementById("inner-card");
    

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

            var body = document.querySelector("body");
            body.appendChild(new_card);
            new_card.appendChild(inner_new_card);
            inner_new_card.style.animation = "fadeIn 1s ease-in forwards";

            new_card.classList.add("box-wrapper");
            inner_new_card.classList.add("box");
            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";

        } else if (e.key == 'ArrowRight') {
            var outer_card = document.getElementById("outer-card");
            var inner_card = document.getElementById("inner-card");
            outer_card.style.animation = "slideRight 1s ease-in-out forwards";
            inner_card.style.animation = "rotateRight 1s ease-in         forwards, fadeOut 1s ease-in forwards";

            outer_card.removeAttribute("id");
            inner_card.removeAttribute("id");
            
            var new_card = document.createElement("div");
            var inner_new_card = document.createElement("div");

            var body = document.querySelector("body");
            body.appendChild(new_card);
            new_card.appendChild(inner_new_card);
            inner_new_card.style.animation = "fadeIn 1s ease-in forwards";

            new_card.classList.add("box-wrapper");
            inner_new_card.classList.add("box");
            new_card.id = "outer-card";
            inner_new_card.id = "inner-card";
        }
        
    });
    
}