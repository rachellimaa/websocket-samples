//file system

const fs = require("fs")

fs.mkdir("./teste", function(){
    console.log("criei carvalho!!");
});

fs.writeFile("./teste/abcd.txt", "oi carvalho", function(){
    console.log("criei arquivo");
});

fs.readFile('./teste/abcd.txt', (err, data) => {
    if (err) throw err;
    console.log("arquivo ", data.toString());
});