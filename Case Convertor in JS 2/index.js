const text = document.getElementById("input-text");
const button = document.getElementById("button");
let isUpperCase = false;

button.addEventListener("click", function() {
    if(isUpperCase) {
        text.value = text.value.toLowerCase();
        isUpperCase = false;
    } else {
        text.value = text.value.toUpperCase();
        isUpperCase = true;
    }
});