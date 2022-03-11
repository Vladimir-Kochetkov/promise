"use strict";
const getData = () => {
    return fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};

const user = getData();

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
    .then(response => {
        console.log("Данные отправлены");
    })
    .catch(e => {
        console.log('ошибка:', e);
    });