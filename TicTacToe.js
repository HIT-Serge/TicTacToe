"use strict";

window.addEventListener("load", init)
// player true is player 1 player false is player 2
let player = true;

// function starting at loading 
function init () {
    // const tableElement = document.getElementById("canvas");
    const cellElements = document.getElementsByTagName("td");
    const button = document.querySelector("button");
    button.addEventListener("click", reset);
    button.style.display = "none";

    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].addEventListener("click", cellClicked);
             
    }
}



// follows what happens you click on a table cell
function cellClicked () {
   
    const turn = document.getElementById("turn");
    
        if (this.style.backgroundImage == "" && player)
        {
                this.style.backgroundImage = "url(img/x.png)";
                
               
                if ( check() )  {
                    
                    turn.textContent = "Player 1. JIJ WINT!!!!!";
                    const button = document.querySelector("button");
                    button.style.display = "";
                    
                }
                else  {
                    
                    turn.textContent = "Player 2. Your turn.";
                }
                player = false;
        } 
        if (this.style.backgroundImage == "" && player == false) 
        {
                this.style.backgroundImage = "url(img/o.png)";
                

                if ( check() ) 
                {
                    
                    turn.textContent = "Player 2. JIJ WINT!!!!!";
                    const button = document.querySelector("button");
                    button.style.display = "";
                }
                else 
                {
                    
                    turn.textContent = "Player 1. Your move.";
                }
                player = true;
        }
}

// checks if a tic tac toe match is made
function check () {

    const cellElements = document.getElementsByTagName("td");
    const posComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    if (player == true) {
        var checkImage = 'url("img/x.png")';
    }
    else {
        var checkImage = 'url("img/o.png")';
    }


    for (let i = 0; i < posComb.length; i++) {      

            console.log(posComb[i] + " loop A");
            var continueLoopB = false;

        for (let j = 0; j < posComb[i].length; j++) {

            console.log(posComb[i][j] + ' loop B'); 

            if (cellElements[posComb[i][j]].style.backgroundImage == checkImage)
            {
                continueLoopB = true;
                console.log('Goede combinatie');
            }
            else
            {
                continueLoopB = false;
                console.log('Foute combinatie');
                break;
            }
        }
        if (continueLoopB == true) {
            for (let j = 0; j < posComb[i].length; j++) {
                cellElements[posComb[i][j]].className = 'blink-image';         
            }
            return true;
            
        }
    //     console.log(cellElements[posComb[i][j]].style.backgroundImage + "true");    
    //       if (cellElements[0].style.backgroundImage == posComb[i][0].style.backgroundImage) {
    // }
}
}

// function checks if the condition is tic tac toe
// function check () {

//     const cellElements = document.getElementsByTagName("td");

//             // cel 1 en cel 2 en cel 3 hebben allen hetzelfde figuur ( backgroundImage ).
//         if (cellElements[0].style.backgroundImage == cellElements[1].style.backgroundImage &&
//             cellElements[0].style.backgroundImage == cellElements[2].style.backgroundImage &&
//             cellElements[0].style.backgroundImage != "") 
//             {
//                 console.log('check123');
//                 cellElements[0].className = 'blink-image';
//                 cellElements[1].className = 'blink-image';
//                 cellElements[2].className = 'blink-image';
                
//                 return true;                
             
//             }
//             // cel 4 en cel 5 en cel 6 hebben allen hetzelfde figuur.
//         if (cellElements[3].style.backgroundImage == cellElements[4].style.backgroundImage &&
//             cellElements[3].style.backgroundImage == cellElements[5].style.backgroundImage &&
//             cellElements[3].style.backgroundImage != "") 
//             {
//                 console.log('check456');
//                 cellElements[3].className = 'blink-image';
//                 cellElements[4].className = 'blink-image';
//                 cellElements[5].className = 'blink-image';
//                 return true;
//             }
//             // cel 7 en cel 8 en cel 9 hebben allen hetzelfde figuur.
//         if (cellElements[6].style.backgroundImage == cellElements[7].style.backgroundImage &&
//             cellElements[6].style.backgroundImage == cellElements[8].style.backgroundImage &&
//             cellElements[6].style.backgroundImage != "") 
//             {
//                 console.log('check789');
//                 cellElements[6].className = 'blink-image';
//                 cellElements[7].className = 'blink-image';
//                 cellElements[8].className = 'blink-image';
//                 return true;
//             }
//              // cel 1 en cel 4 en cel 7 hebben allen hetzelfde figuur.
//         if (cellElements[0].style.backgroundImage == cellElements[3].style.backgroundImage &&
//             cellElements[0].style.backgroundImage == cellElements[6].style.backgroundImage &&
//             cellElements[0].style.backgroundImage != "") 
//             {
//                 console.log('check147');
//                 cellElements[0].className = 'blink-image';
//                 cellElements[3].className = 'blink-image';
//                 cellElements[6].className = 'blink-image';
//                 return true;
//             }
//             // cel 2 en cel 5 en cel 8 hebben allen hetzelfde figuur.
//         if (cellElements[1].style.backgroundImage == cellElements[4].style.backgroundImage &&
//             cellElements[1].style.backgroundImage == cellElements[7].style.backgroundImage &&
//             cellElements[1].style.backgroundImage != "") 
//             {
//                 console.log('check258');
//                 cellElements[1].className = 'blink-image';
//                 cellElements[4].className = 'blink-image';
//                 cellElements[7].className = 'blink-image';
//                 return true;
//             }
//             // cel 3 en cel 6 en cel 9 hebben allen hetzelfde figuur.
//         if (cellElements[2].style.backgroundImage == cellElements[5].style.backgroundImage &&
//             cellElements[2].style.backgroundImage == cellElements[8].style.backgroundImage &&
//             cellElements[2].style.backgroundImage != "") 
//             {
//                 console.log('check369');
//                 cellElements[2].className = 'blink-image';
//                 cellElements[5].className = 'blink-image';
//                 cellElements[8].className = 'blink-image';
//                 return true;
//             }
//             // cel 1 en cel 5 en cel 9 hebben allen hetzelfde figuur.
//         if (cellElements[0].style.backgroundImage == cellElements[4].style.backgroundImage &&
//             cellElements[0].style.backgroundImage == cellElements[8].style.backgroundImage &&
//             cellElements[0].style.backgroundImage !== "") 
//             {
//                 console.log('check159');
//                 cellElements[0].className = 'blink-image';
//                 cellElements[4].className = 'blink-image';
//                 cellElements[8].className = 'blink-image';
//                 return true;
//             }
          
//             // cel 7 en cel 5 en cel 3 hebben allen hetzelfde figuur.
        // if (cellElements[2].style.backgroundImage == cellElements[4].style.backgroundImage &&
        //     cellElements[2].style.backgroundImage == cellElements[6].style.backgroundImage &&
        //     cellElements[2].style.backgroundImage != "") 
        //     {
        //         console.log('check357');
        //         cellElements[2].className = 'blink-image';
        //         cellElements[4].className = 'blink-image';
        //         cellElements[6].className = 'blink-image';
        //         return true;
//             }      
//     return false;
// }

// functie clears the grid
function reset () 
{
    const cellElements = document.getElementsByTagName('td');
    const turn = document.getElementById('turn');
    
    turn.textContent = "Player 1. Start.";
    turn.className = "";
    for (let i=0; i < cellElements.length; i++) {
        cellElements[i].style.background = "";
        cellElements[i].className = "";
        const button = document.querySelector("button");
        button.style.display = "none";
          

    }
}