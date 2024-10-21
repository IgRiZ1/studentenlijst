
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let namen = [];
for ( let i = 0; i < Infinity; i++) {
  let name = await userInput.question("geef een naam ")
  namen.push(name); 
 if(name ==''){break;}
}


    
console.log(namen);
process.exit()

