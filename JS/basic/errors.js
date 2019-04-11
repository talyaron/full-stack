let a = 5, b = 6;
//syntex errors

// console.log(a + b

// handeling runtime errors
// console.log(openDoor());


function trying() {
    try {
        console.log(openDoor())
    } catch (e) {
        console.error(e)
    } finally {
        console.log('finnaly')
    }
}
trying();

console.log('cont')

//handeling logical errors:

function divide(numerator, denominator) {
    try {
        if (denominator == 0) {
            throw {
                error: 'division by Zero',
                message: "Denominator cant be zero"
            }
        } else {
            return numerator / denominator;
        }
    } catch (err) {
        console.log(err)
        console.error('Error:', err.error, 'Message:', err.message);
        return false;
    }
}

console.log(divide(1, 0));

//uncatched errors:

window.onerror = function (message, url, line, col, error) {
    console.log(`${message}\n At ${line}:${col} of ${url}`);
}

function readData() {
    badFunc(); // Whoops, something went wrong!
}

readData();

console.log('test')


