// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro

// 1. Far scegliere all'utente la difficoltà -> btn
    // 1.1 Deve scegliere tra 3 bottoni, in base al bottone scelto, decide la difficoltà

// 2. Creare le funzioni per la creazione della griglia
    // 2.1 In base al bottone scelto scelto, si attiva una funzione diversa -> if


// 3. In base alla difficoltà scelta, viene creare la griglia
    // 3.1 Difficoltà 1 = 10X10
    // 3.2 Difficoltà 2 = 9X9
    // 3.3 Difficoltà 3 = 7X7

// 4. Generare numeri -> for

// 5. Generare 16 numeri che si riferiscono alle bombe

// 6. Controllare se l'elemento cliccato, fa parte delle bombe

const container = document.getElementById("container-grid");
const btnEasy = document.getElementById("easy");
const btnMedium = document.getElementById("medium");
const btnHard = document.getElementById("hard");
const result = document.getElementById("risultato");

const easy = 100;
const medium = 81;
const hard = 49;
const bombe = [];
let clicked = 0;
let difficolta = 0;



// bottone difficoltà facile
btnEasy.addEventListener('click',

    function() {

        difficolta = 100;

        const numBomb = generatoreBombe(bombe, difficolta);

        for (let i = 1; i <= easy; i++) {

            let newGrid = generetedElement("square1");
            newGrid.id = i;
    
            newGrid.addEventListener("click",
            
                function() {

                    clicked++;
    
                    newGrid.innerHTML = `${i}`;
                    
                    this.classList.add("square_click");
                    const id = parseInt(this.id);

                    if(numBomb.includes(id)) {
                        (newGrid).classList.add("bomba");
                        alert("Hai perso");
                    }
                    
                    result.innerText = `Hai fatto ${clicked} punti`;
    
                }
            
            )
            container.append(newGrid);

            
        }
        console.log(numBomb);
    }

)


// bottone difficoltà media
btnMedium.addEventListener('click',

    function() {

        difficolta = 81;

        const numBomb = generatoreBombe(bombe, difficolta);

        for (let i = 1; i <= medium; i++) {

            let newGrid = generetedElement("square2");
            newGrid.id = i;
    
            newGrid.addEventListener("click",
            
                function() {
    
                    clicked++;
    
                    newGrid.innerHTML = `${i}`;
                    
                    this.classList.add("square_click");
                    const id = parseInt(this.id);

                    if(numBomb.includes(id)) {
                        newGrid.classList.add("bomba");
                        alert("Hai perso");
                    }
                    
                    result.innerText = `Hai fatto ${clicked} punti`
    
                }
            
            )
            
            container.append(newGrid);
    
        }
        console.log(numBomb);

    }


)
    
// bottone difficoltà difficile
btnHard.addEventListener('click',

    function() {

        difficolta = 49;

        const numBomb = generatoreBombe(bombe, difficolta);

        for (let i = 1; i <= hard; i++) {
            
            let newGrid = generetedElement("square3");
            newGrid.id = i;
    
            newGrid.addEventListener("click",
            
                function() {
    
                    clicked++;
    
                    newGrid.innerHTML = `${i}`;
                    
                    this.classList.add("square_click");
                    const id = parseInt(this.id);

                    if(numBomb.includes(id)) {
                        newGrid.classList.add("bomba");
                        alert("Hai perso");
                    }
                    
                    result.innerText = `Hai fatto ${clicked} punti`;
    
                }
            
            )
            
            container.append(newGrid);
        }
        console.log(numBomb);

    }
    
)


// funzioni

function generetedElement(gridClass) {
    
    let grid = document.createElement("div");
    grid.classList.add(gridClass);


    return grid

}

function generatoreBombe(array, max) {
    while(array.length < 16 ) {
        bomba = Math.floor(Math.random() * max) + 1;

        if (array.includes(bomba) == false) {
            array.push(bomba);
        }
    
    }

    return array
}


