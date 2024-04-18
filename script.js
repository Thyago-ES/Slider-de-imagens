let count = 1;
document.querySelector("#radio1").checked = true;



function changeSlide() {
    count++;

    if(count > 5){
        count = 1;
    }

    document.querySelector("#radio"+count).checked = true;
}

document.querySelector("#radio1").addEventListener("click", () => {
    count = 1;
})

document.querySelector("#radio2").addEventListener("click", () => {
    count = 2;
})
document.querySelector("#radio3").addEventListener("click", () => {
    count = 3;
}) 
document.querySelector("#radio4").addEventListener("click", () => {
    count = 4;
})
document.querySelector("#radio5").addEventListener("click", () => {
    count = 5;
})

setInterval(() => {
    changeSlide();
}, 4500);