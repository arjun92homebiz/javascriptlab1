"user strict";

let user = undefined;
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let game = prompt("Do you want to play a game with Almighty Grant", "yes or no");

if (game === "yes") {
    user = prompt("Choose your username", "Arjun Prakash");
    while (grantWins < 1 && userWins < 3) {
        if (userHealth > 0 && grantWins > 0) {
            userDamage = Math.floor((Math.random() * 2) + 1);
            grantDamage = Math.floor((Math.random() * 2) + 1);
            userHealth = userHealth - userDamage;
            grantHealth = grantHealth - grantDamage;
            console.log(`${user} has ${userHealth} left`);
            console.log(`Grant has ${grantHealth} left`);
            if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
            console.log(`${user} wins ${userWins} rounds`);
            } else if (userHealth <= 0) {
            console.log(`Grant Wins!!!!`);
            grantWins++;
            break;
            }
            else if (userWins === 3) {
            console.log(`${user} wins!!!!`);
            break;
            }    
        }
    }
}