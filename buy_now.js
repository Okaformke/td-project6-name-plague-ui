//name is for the name plague
let nameTag = document.getElementById ('name');
// amount is for the price
let amountTag = document.getElementById ('amount');
// text-value is for my input box
const textValue = document.getElementById('text-value');


textValue.addEventListener('input' , dunno);
function dunno(e) {
nameTag.textContent = e.target.value;
// amount part
let noahO = nameTag.textContent.replaceAll('' , '');
let total = noahO.length * 5 ;
amountTag.innerText = '$' + total;

}




// for my buynow own....not easy at all to get to this point

const button = document.querySelector(".btn")
let container = document.querySelector(".text-area")
let message = document.querySelector(".message")
let refreshBtn = document.querySelector(".btn-refresh")

button.addEventListener("click", () =>{
    if (container.value.length == 0) {
        message.innerText = " Please Input Only Letters. Thank You. "
    }
    else if (container.value === "YOUR NAME") {
        message.innerText = "Please enter a Unique Name"
    }
    else if (container.value.length > 15) {
        message.innerText = "You have exceeded the number of available letters"
    }
    else {
        message.innerText = "Sucessful!"
    }

}
)
refreshBtn.addEventListener('click' , resetPlague)
function resetPlague() {
    location.reload()
}



