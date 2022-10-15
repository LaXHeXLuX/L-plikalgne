function checkInputs(){
    let inputs = document.getElementsByClassName("inputField")
    let bad_input = false
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        if (element.value === ""){
            alert("Tekstiväljad peavad olema täidetud")
            index = inputs.length;
            bad_input = true
        }
    }
    let radioButtons = document.getElementsByClassName("Radiobtn")
    
    if (radioButtons[0].checked === radioButtons[1].checked){
        bad_input = true
        alert("Vali pank")
    }
    
    if (bad_input){
        return
    }

    alert("Saatsime arve teie mailile.")
}

