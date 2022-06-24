const fetch = require('node-fetch'); // 1,2K (gzipped: 580)
const fs = require('fs');

// **********************Callbacks**********************

// setTimeout
// it is asynchronous as it calls the function after the appropriate amount of time
setTimeout(() => {
    console.log("waited 1 second");
}, 1000)

// nested setTimeouts AKA Callback Hell :)
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    }, 1000);
}, 1000);

// button event handler in browser JavaScript
// const btn;
// btn.addEventListener('click', () => {

// })

// error first callback
fs.readFile('./test.txt', { encoding: 'utf' }, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.error(err);
    }
    else {
        console.error('GOT DATA');
        console.log(data);
    }
});

// **********************Promises**********************

// Create a promise
// a promise is a function that can accept a resolve and a reject callback
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    // if successful, call resolve; if not, call reject
    if (rand === 0) {
        resolve();
    }
    else {
        reject();
    }
});

// .then() only handles success cases (resolve);
// .catch() only handles failed cases (reject)
myPromise
    .then(() => console.log('Success'))
    .catch(() => console.error('Something went wrong'));

// fs readFile with promises
// less code needed than 'error first callback' above
fs.promises
    .readFile('./test.txt', {encoding: 'utf-8'})
    .then((data) => console.log(data))
    .catch((err) => console.errer(err));

// fetch with promises
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())                    // in success case, need to convert response to json
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

// **********************Async/Await**********************

// load file with async/await
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {
            encoding: 'utf-8', 
        });
    }
    catch (error) {
        console.error(error);
    }
};
// loadFile();

// fetch pokemon with async/await without error handling
// makes fetch request, awaits response, then awaits the res.json() response, and then we get our data
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
};
fetchPokemon(2);