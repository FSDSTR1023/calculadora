const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pressBtn = button.textContent;

        if(button.id === "clear") {
            screen.textContent = "0";
            return;
        }

        if(button.id === "clearOne"){
            if(screen.textContent.length === 1){
                screen.textContent = "0";
            }else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if(button.id === "equal"){
            screen.textContent = eval(screen.textContent);
            return;
        }

        if(screen.textContent === "0"){
            screen.textContent = pressBtn;
        } else {
            screen.textContent += pressBtn;
        }
        
    })
    
    })