addEventListener("DOMContentLoaded", function(){

    let messageEle = document.getElementById('message');

    function receiveMessage(e) {

        if (e.origin !== "http://domain.one")
            return;

        messageEle.innerHTML = "Receive message:" + e.data;

        if (e.data.action === 'send')
            localSend(e.data);
        if (e.data.action === 'remove')
            localRemove(e.data);
        if (e.data.action === 'read')
            localRead(e.data);
    }

    function localSend(data){
        localStorage.setItem(data.key, data.val);
        console.log('written');
        console.log(data.callback);
        eval(data.callb);
    }

    function localRemove(data){
        localStorage.removeItem(data.key);
        console.log('removed');
    }

    function localRead(data){
        let text = localStorage.getItem(data.key);
        console.log(text);
    }

    window.addEventListener('message', receiveMessage);

});