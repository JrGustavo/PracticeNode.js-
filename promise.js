const {readFile} = require("fs/promises");
async function read(){

try {

    const result = await readFilePromise("./data/first.txt");
    const result2 = await readFilePromise("./data/second.txt");
    const result3 = await readFilePromise("./data/third.txt");
    console.log(result);
    console.log(result2);
    console.log(result3);
}catch (error){
    console.log(error);
    }
}

read();