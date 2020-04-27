const xhr = new XMLHttpRequest();

// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');

xhr.open("GET", "https://rickandmortyapi.com/api/character/");

xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(xhr.response);
    }
}

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
        console.log(`Получено ${event.loaded} байт`);
    }
};

xhr.onerror = function () {
    console.error("Запрос не удался");
};

// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('X-Auth', '123');

xhr.send();
// xhr.abort();