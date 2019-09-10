const fs = require('fs');

try {
    fs.readFile('./hello.txt', 'utf8', (err, doc) => {
        if (err) throw err;
        console.log(doc)

        
        fs.writeFile('./hello.txt', `${doc}!`, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })

    })
} catch (err) {
    console.log(err)
}


