const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const HSQue= function (){
    rl.question('Would you like to hit or stay?: (h/s)\n', (hitOrStay) =>{
        if (hitOrStay == 'h'){
            // return rl.close()
        console.log('You chose h')
        HSQue()
        
        }
        else{
            console.log('s')
        }
        console.log('This should run')
    })
    
}

HSQue()