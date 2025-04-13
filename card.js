window.onload = function() {


    outer_card = document.getElementById("outer-card");
    inner_card = document.getElementById("inner-card");
    

    document.addEventListener("keydown", (e) => {
        
        if (e.key == 'ArrowLeft') {
            outer_card.style.animation = "slideLeft 1s ease-in-out forwards";
            inner_card.style.animation = "rotateLeft 1s ease-in         forwards, fadeOut 1s ease-in forwards"; 
        } else if (e.key == 'ArrowRight') {
            outer_card.style.animation = "slideRight 1s ease-in-out forwards";
            inner_card.style.animation = "rotateRight 1s ease-in         forwards, fadeOut 1s ease-in forwards";
        }
        
    });
    
}