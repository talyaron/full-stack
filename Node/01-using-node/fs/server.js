const fs = require('fs');
debugger;
try {
    fs.readFile('./hello.md', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)

        fs.writeFile('./hello.md',`${data}!`,(err)=>{
             if (err) throw err;
        console.log('The file has been saved!');
        })
    })
} catch (err) {
    console.log(err)
}
