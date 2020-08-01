let completed1 = false;
let completed2 = false;

function sendRequest1() {
    return new Promise((resolve, reject) => {
        let xhr1 = new XMLHttpRequest();
        xhr1.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        xhr1.send();
        xhr1.onload = function() {
               resolve(completed1 = true);
        };
        xhr1.onerror = function() {
            reject("Запрос 1 не удался");
        };
    })
}
function sendRequest2() {
    return fetch('https://reqres.in/api/users?per_page=12').then(completed2 = true)
}



sendRequest1().then(sendRequest2()).then(() => {completed1 && completed2 && console.log("Оба запроса получены")})
