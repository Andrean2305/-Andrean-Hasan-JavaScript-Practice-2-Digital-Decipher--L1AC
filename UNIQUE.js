function digitalDecipher(eMessage,key){
    splitted = key.split("");
    words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (eMessage.length > key.length){
        var missing = eMessage.length - key.length;
        missme = 0
        for (let z = 0; z<missing; z++ ){
            splitted.push(splitted[z]);
            missme = missme + 1;
            if (missme == splitted.length ){
                missme = 0
            }
        }
    }

    for(let a = 0; a<splitted.length; a++){
        eMessage[a] = eMessage[a] - splitted[a];
    }

    for(let b = 0; b<eMessage.length;b++){
        eMessage[b] = words[eMessage[b]-1]
    }
    result = eMessage.join('');
    return result
}
const prompt = require ('prompt-sync')();
var count = prompt("Enter the long of the word: ");

var list = [];
no = 0
for(let i = 0; i<count; i++){
    no += 1
    let word = prompt("The number "+  no + " number: ");
    list.push(word);
}

var not_a_list = prompt("Enter numbers to minus: ");
digi = digitalDecipher(list,not_a_list)
console.log(digi)