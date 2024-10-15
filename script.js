function countingProd() {
    let  productAmount = document.querySelectorAll("#type").length;
    let changeText = document.getElementById ("changeText");

    if (productAmount == 1) {
        changeText.innerHTML = "Holanda 111"; 
        }   
    else if (productAmount > 1) {
    changeText.innerHTML = "Holanda 2o+";
        }
}