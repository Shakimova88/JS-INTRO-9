class Actions {
    static visitUrl(url){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(url.startsWith('www') || url.startsWith('https://')){
                resolve('URL visited successfully');
            } else { 
                reject('Wrong URL');
               }
            }, 1000);
        });
    }
    static login(username, password){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(username === 'TechGlobal' && password === 'Test1234') {
                resolve('Logged in successfully');
                } else {
                     reject('Wrong credentials');
                }
            }, 3000);
        });
    }
    static validateTitle(title){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(title !== '' && title !== undefined && title !== null) {
                resolve('Title validated successfully');
                } else {
                     reject('Wrong title');
                }
            }, 500);
        });
    }
}

module.exports.Actions = Actions


const { Actions } = require('./../utils/Actions.js')

function test1() {
    Actions.visitUrl('https://')
    .then(() => Actions.login('TechGlobal', 'Test1234'))
    .then(() => Actions.validateTitle('Sam'))
    .catch(err => console.log(err));
}
test1()

async function test2 () {
    try {
        await Actions.visitUrl('https://');
        await Actions.login('TechGlobal', 'Test1234');
        await Actions.validateTitle('BIGGG');
    } catch(err) {
        console.log(err);
    }
}

test2 ()