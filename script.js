/* Modal */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

/*
*   Opens the modal
*/
const openModal = () => {
    modal.style.transition= "0.5s ease";
    modal.style.zIndex = "5";
    modal.style.opacity = "1";
    modalContent.style.opacity = "1";
    modalContent.style.margin = "10vh auto auto auto";
}

/*
*   Closes the modal
*/
const closeModal = () => {
    modal.style.transition= "1s ease";
    modal.style.zIndex = "-5";
    modal.style.opacity = "0";
    modalContent.style.opacity = "0";
    modalContent.style.margin = "0vh auto auto auto";
}

/* Registration Form Input */ 
const userInputs = [];

/*
*   Groups corresponding label and input elements to an object
*/
for(i=0; i<8; i++) {
    const inputId = `input-${i}`;
    const labelId = `input-label-${i}`;

    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);
    
    userInputs.push({input,label});
}

/*
*   Turns on/off the highlighting of the input labels
*/
userInputs.forEach((userInput) => {
    userInput.input.addEventListener("focus",() => {
        userInput.label.style.color = "rgb(214, 70, 62)";
    });
    userInput.input.addEventListener("blur",() => {
        userInput.label.style.color = "";
    });
});


