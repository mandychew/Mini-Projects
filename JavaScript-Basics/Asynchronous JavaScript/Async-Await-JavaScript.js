const url = `https://jsonplaceholder.typicode.com/todos/1`;

// using .then() - not as clean as async function
/*
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(error);
    });
*/





// async function
// must mark function as 'async' to use 'await' in function
// handle errors with try-catch
const LoadData = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
        const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
        const url3 = `https://jsonplaceholder.typicode.com/todos/3`;

        // Promise.all() let's all the input promises run in parallel - faster
        const results = Promise.all([
            fetch(url1), 
            fetch(url2), 
            fetch(url3)
        ])
        const dataPromises = results.map(result => result.json())
        const finalData = await Promise.all(dataPromises);
        console.log(finalData);
        return finalData;
    }
    catch(err) {
        console.log(err);
    }
};

// async functions return a promise
/* 
LoadData().then((data) => console.log(data));
*/





// IIfe for Top-Level Await
// function in () will run immediately
( async() => {
    const data = await LoadData();
    console.log(data)
})();