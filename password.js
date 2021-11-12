console.log('Welcome to the Password Validator Tool!')

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})





const userPassword = reader.question("Please validate your password?", function(input){

    if (input.includes("123")){
        console.log('Too weak of a password. Do not use "123"')
    }
    else if (input === "passwordpassword"){
        console.log('Now thats just LAZY. Failed to validate password!')}
    else if (input.length >= 10){
        console.log('Successfully validated password.')
    }else if (input.length < 10){
        console.log('Too few characters.\n' + 'Failed to Validate')    // i was trying to get ASCII working here but i didnt really understand it
    }
    
    
})
