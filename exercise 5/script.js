addEventListener("DOMContentLoaded", function() {

    window.addEventListener('message', function (e) {
        let message = e.data;
    });

    localStorage.setItem('test1', 'Hello');
    localStorage.setItem('test2', 'Hi');

    console.log(localStorage.getItem('test1'));
    console.log(localStorage.getItem('test2'));


    const receiver = document.getElementById('receiver').contentWindow;

    const send = document.getElementById('send');
    const remove = document.getElementById('remove');
    const read = document.getElementById('read');

    const objMessage = {};
    objMessage.color = 'hhh';
    objMessage.createText = "localStorage.setItem('test3','Holla')";


    function sendMessage(e) {
        e.preventDefault();
        objMessage.action = 'send';
        objMessage.key = 'test3';
        objMessage.val = 'TextForLocalStorage';
        objMessage.callback = "alert('successful')";
        receiver.postMessage(objMessage, 'http://domain.two/other.html');
    }

    function removeMessage(e) {
        e.preventDefault();
        objMessage.action = 'remove';
        objMessage.key = 'test3';
        objMessage.val = '';
        receiver.postMessage(objMessage, 'http://domain.two/other.html');
    }

    function readMessage(e) {
        e.preventDefault();
        objMessage.action = 'read';
        objMessage.key = 'test3';
        objMessage.val = '';
        receiver.postMessage(objMessage, 'http://domain.two/other.html');
    }

    send.addEventListener('click', sendMessage);
    remove.addEventListener('click', removeMessage);
    read.addEventListener('click', readMessage);


});