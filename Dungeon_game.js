let health = 100;
let gold = 50;
let inventory = ["sword(🗡️ )"];
let active_effects = [];
let monster_health = 30;
const arr =["monster","chest","nothing"];

let readline = require("readline-sync");
let playerName = readline.question("What is your player name?\nPlayerName: ");

function open_chest(){
const random_item = ["potion(🍇)","shield(🛡️ )","amulet(🏵️ )"];
    let reward = random_item[Math.floor(Math.random()*random_item.length)]
     console.log(`You got a reward : a/an ${reward}\n`)
            inventory.push(reward);
        }

function victory(){
    console.log("Congratulations!!!You have have cleared  the boss level 🎯😎\n")
        }


function use_item(){
    if(inventory.length===0){
        console.log("No items\n")
    }
    else{
        let item = readline.question("What item do you want to use?(potion,shield,amulet)\n");
        let index = inventory.indexOf(item);
         switch(item){
            case "potion":
                health+=20
                console.log(`You used a ${item}`)
                console.log(`Health      : ${health}\n`)
                inventory.splice(index,1)
                break
            case "shield":
                active_effects.push(item)
                console.log(`You used a ${item}\n`)
                inventory.splice(index,1)
                break
            case "amulet":
                active_effects.push(item)
                console.log(`You used an ${item}\n`)
                inventory.splice(index,1)
                break
                default:
                    console.log("Item is not in inventory\n")
                
        }}}


function showStats(){
    console.log("***********Current Status******************")
        console.log(`Playername        : ${playerName}`)
        console.log(`Health            : ${health}HP`)
        console.log(`Gold              :💰 ${gold}`)
        console.log(`My inventory      : [${inventory}]`)
         console.log(`My Active effects: [${active_effects}]`)
    console.log("*******************************************\n")
}


function battle_monster(){
    const monster = ["dinosaur","hydra","dragon","griffin"]
    let random_monster = monster[Math.floor(Math.random()*monster.length)];
    
    
    while(monster_health>0 && health>0){
        console.log("You encountered a monster 🐲")
let action = readline.question("Do you want to 'attack' or 'run''\n");
switch(action){
    case "attack":
        let damage = 12;
        if(active_effects.includes("amulet")){
            damage+=5;
            active_effects.splice(active_effects.indexOf("amulet"),1)
              monster_health-=damage;

              if(monster_health<0){
                monster_health=0
                victory()}
            }
        else{
            monster_health-=damage;
             if(monster_health<0){
                monster_health=0
                victory()}
              }
            
                if(monster_health>0){
                    let monster_damage = 10;
                    if(active_effects.includes("shield")){
                        monster_damage/=2;
                        active_effects.splice(active_effects.indexOf("shield"),1)
                        health-=monster_damage;
                        }
                    else{
                        health-=monster_damage
                    }}
           console.log(`Monster's health:\t${monster_health}HP`)//Monster_health check
           console.log(`${playerName}'s health:\t${health}HP\n`)//Player health check
        break

    case "run":
        if(health<=0){console.log("GAME OVER")}

            else if(monster_health<=0){
                let rewardPoint = 25;
                gold+=rewardPoint;
                victory();
        }
        else{console.log("You escaped the dungeon with your loot 😎🎉\n")}
}
break
}}

loop1:
while(health > 0 ){
const event = arr[Math.floor(Math.random() * arr.length)];
switch(event){
    case "monster":
        battle_monster();
        break
        
    case "chest":
        open_chest();
        break

    default:
        console.log("Room is empty");
        showStats();
       
}

let choice = readline.question("Do you wish to ('continue,use_item or quit') ?\n")
switch(choice){
    case "quit":
        console.log("You leave the dungeon with your loot🤩🎉\n")
        break loop1;

    case "use_item":
    if(monster_health<=0){
            console.log("Dungeon Cleared🎯\nYou teleported to the entrance⛩️ of the dungeon✨✨\n")
            break loop1
        }
    use_item();
    
        continue loop1;

    case "continue":
        if(monster_health<=0){
            console.log("Dungeon Cleared🎯\nYou leave the dungeon with your loot💰💰\n")
            break loop1
        }
        continue loop1;
    }
    

}



