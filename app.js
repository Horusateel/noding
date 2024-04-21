// const { createServer } = require("http");

// const server = createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("This's the true homepage")
//     }
//     if (req.url === '/about') {
//         res.end("Our info")
//     }
//     res.end(
//         '<h1>No you don\'t</h1>'
//     )
// })

// server.listen(5000)


const _ = require('lodash');

const items = [1,[2,3,[4]]];
const ne = _.flattenDeep(items);
console.log(ne)
console.log("hello world")