import fs from "fs"

fs.appendFile("my-file.txt", 'File created by Node.js', (err) => {
    if(err) throw err;
    console.log('File saved');
})

setTimeout(() => {
    console.log('Time ti inspect is over');
}, 600000);