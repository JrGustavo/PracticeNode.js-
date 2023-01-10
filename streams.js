const {writeFile} = require('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', 'Hello world'.repeat(1000))
}

createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt')

stream.on('data', function (chunk){
    console.log(chunk)
})
