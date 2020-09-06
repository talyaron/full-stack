//Intro: https://www.youtube.com/watch?v=O6cmuiTBZVs

const bcrypt = require('bcrypt');
const saltRounds = 10; //"salt round" means the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//two steps method
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


//One step method
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if(err) console.log(err);

        console.log('hash:',hash)

        //check if password is correct (when it is correct)

        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            // result == true
            console.log('results-1:',result)
        });

         //check if password is correct (when it is incorrect)

        bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
            // result == true
            console.log('results-2:',result)
        });
});
