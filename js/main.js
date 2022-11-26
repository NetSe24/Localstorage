const getInput = document.querySelector("#input"),
      h2 = document.querySelector("#text");
      h2.innerHTML = JSON.parse(localStorage.getItem("value"))


let displayText = () => {
    localStorage.setItem("value",getInput.value)
    h2.innerHTML = JSON.parse(localStorage.getItem("value"))
}

// store the input on localstorage 

// addEventListener use for click input 

getInput.addEventListener("click", displayText);