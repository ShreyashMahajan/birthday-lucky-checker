const birthDate= document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#display-msg");
btnCheck.addEventListener("click",isBirthdateLucky);

function isBirthdateLucky(){
     if(birthDate.value && luckyNumber.value){
             var dateTotal = calculateDateSum();
             var nuberLucky = luckyNumber.value;
             if( dateTotal%nuberLucky ===0){
                 showMessage("Your Birthday Is Lucky");
             }else {
                 showMessage("Your Birthday Is Not Lucky but your Hardwork can bring so many lucky days than your birthday")
             }
     }else {
            showMessage("Please Input Fields");
     }
}
function calculateDateSum(){
    var dateOfBirth = birthDate.value;
   var newDob = dateOfBirth.replaceAll("-","");
   var sum =0;
   for (let index=0;index < newDob.length;index++){
       sum =sum+ Number(newDob.charAt(index));
   }

return sum;

   
}

function showMessage(msg){
    displayMessage.innerText = msg;
}


