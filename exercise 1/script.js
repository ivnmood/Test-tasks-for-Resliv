const inputText = document.getElementById("name_input");
const hardValue = 'Xxxx';

inputText.addEventListener("input", function () {

    if (inputText.value !== hardValue)
        inputText.className = "red";

    else
        inputText.className = "";
});

