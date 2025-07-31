let amountPaid = document.getElementById("amountPaid");
let balanceReceived = document.getElementById("balanceReceived");
let balanceSend = document.getElementById("balanceSend");
function countingBR() {
    if (amountPaid.value) {
        amountPaid.style.backgroundColor = "lime";
        balanceReceived.style.backgroundColor= "";
        let money = Number(amountPaid.value);
        let BR = 0.939 * money - 1337;
        let BS = BR / 0.95878;
        balanceReceived.value = BR;
        balanceSend.value = BS;
    } else {
        balanceReceived.value = "";
        balanceSend.value = "";
        amountPaid.style.backgroundColor = "";
    }
}
function countingAP() {
    if (balanceReceived.value) {
        amountPaid.style.backgroundColor = "";
        balanceReceived.style.backgroundColor = "lime";
        let BR = Number(balanceReceived.value);
        let AP = (BR + 1337) / 0.939;
        let BS = BR / 0.95878;
        amountPaid.value = AP;
        balanceSend.value = BS;
    }else{
        amountPaid.value="";
        balanceSend.value="";
        balanceReceived.style.backgroundColor="";
    }
}
amountPaid.addEventListener("keyup", countingBR);
balanceReceived.addEventListener("keyup", countingAP);
