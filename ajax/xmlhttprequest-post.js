let xhr = new XMLHttpRequest();

let json = JSON.stringify({
    name: "Peter",
    surname: "Parker"
});

xhr.open("POST", '/submit')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);