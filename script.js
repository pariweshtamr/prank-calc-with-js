const buttons = document.querySelectorAll("button");
// console.log(buttons);
const history = [];
let textToDisplay = ""; 
let lastResult;

buttons.forEach(btn => {
    btn.addEventListener("click", (event)=> {
        // displayHistory();
        const val = btn.innerText;

        // on = button click
        if(val === "="){
            return onTotal();
        }

        //reset display
        if(val === "AC"){
           
            return resetDisplay();
        }

          //backspace
          if(val === "C"){
           textToDisplay = textToDisplay.slice(0, -1)
            return display(textToDisplay);
        }

        //turn off calculator
        if (val === "OFF") {
            textToDisplay ="";
            display(textToDisplay);
            document.getElementById("result").style.background = "black";
            btn.innerText = "ON";

            return;
        }

        //turn on calculator
        if (val === "ON") {
            textToDisplay ="";
            display(textToDisplay);
            document.getElementById("result").style.background = "white";
            btn.innerText = "OFF";

            return;
        }

        //display all clicked buttons//
        textToDisplay += val;

        display(textToDisplay); 
        
    });
});

// display text in dissplay area //

const display = (str) => {
    if (str.length < 1) {
        str = "0.0";
    }
    document.getElementById("result").innerText = str;
};

// do total calculation
const onTotal = () =>{
    history.push(textToDisplay);
    console.log(history);

    const total = eval(textToDisplay) + randomVal();
    
    textToDisplay= total;

            
    display(total);

    displayLastResult(total);
};

// reset display 
const resetDisplay = () =>{
    document.getElementById("result").innerText = "0.00";
    textToDisplay = lastResult;
};


const displayLastResult = (val) => {
    const histElm = document.getElementById("lastResult");
    histElm.innerHTML = val || lastResult;
};


//get random value
const randomVal = () =>{
    const random = Math.floor(Math.random() * 10) //0-9
    console.log(random);
    return random < 3 ? random: 0;
}

// // display history
// const displayHistory = () => {
//     const histElm = document.getElementById("lastResult");
//     const str = history.join().replaceAll(",");
//     histElm.innerHTML = str;
// };