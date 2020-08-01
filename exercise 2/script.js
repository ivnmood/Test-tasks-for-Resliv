let select = document.getElementById("selectForm");
let sendForm = document.getElementById("send_form");
let form = document.querySelector("form")

sendForm.onclick = function (event) {
    event.preventDefault();
    console.log(new URL(`http://any.com/filter?${serialize(form)}?manufacturer=${select.value}`));
}

let searchParams = new URLSearchParams("size=M&color=2&manufacturer=b%26c");

for (let pair of searchParams.entries()) {

    let compareQuires = (name, value, id) => {
        if (name === pair[0] && (name === 'size' || name === 'color') && value === pair[1] ) {
            id.setAttribute("checked", "checked");
        } else if(name === pair[0] && name === 'manufacturer' && value === pair[1] ) {
            id.setAttribute("selected", "selected");
        }
    }

    let sizeParams = document.querySelectorAll("input[name='size']");

    let colorParams = document.querySelectorAll("input[name='color']");

    let manufacturerParams = document.querySelectorAll("option[name='manufacturer']");


    sizeParams.forEach(element => {
            compareQuires(element.name, element.value, element);
        }
    );
    colorParams.forEach(element => {
            compareQuires(element.name, element.value, element);
        }
    );
    manufacturerParams.forEach(element => {
            compareQuires(element.attributes[0].value, element.value, element);
        }
    );

}


