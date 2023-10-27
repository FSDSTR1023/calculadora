const screen = document.querySelector(".screen");
const num = document.querySelectorAll(".num");

num.forEach(number => { 
    number.addEventListener("click", () =>{
        const numClicked = number.textContent;

        if (number.id === "c"){
            // limpia la pantalla y presenta un cero
            screen.textContent="0";
            return;
        }

        // valida que al intentar borrar, la pantalla no este vacia ni con error
        if(number.id === "erase"){
            if(screen.textContent.length === 1 || screen.textContent==="ERROR!"){
                // vuelve la pantalla a cero cuando llega al ultimo digito o hay error
                screen.textContent = "0";
            }else{  
                // borra digitos de derecha a izquierda
                screen.textContent = screen.textContent.slice(0, -1);
            }                
            return;
        }
        
        if (number.id ==="equal"){
            try {
                // calcula lo que hay en pantalla
                screen.textContent = eval(screen.textContent);
            } catch{
                // si lo que hay en pantalla no es calculable muestra un error
                screen.textContent = "ERROR!"
            }
            return;
        }

        if(screen.textContent === "0" || screen.textContent==="ERROR!"){
            // si hay un cero en la pantalla o error, al presionar un numero se elimina y sustituye
            // por el numero nuevo
            screen.textContent = numClicked;
        }else{
            // si ya hay valores en la pantalla, agrega el valor al final
            screen.textContent += numClicked;
        }

    })
});