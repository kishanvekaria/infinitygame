let character = {
    wisdom: 5,
    strength: 100,
}

let completedRooms = []
let rooms = ['strength', 'wisdom', 'courage']

const endGame = () => {
    alert(`You win!`)
}

function removeDoor(door, abbr){
    document.querySelector(`.${door}`).className += ' ' + abbr
}

const newRoom = () => {
    if(completedRooms.length > 1 && completedRooms.length < 3){
        alert(`You walk out of the room with your new treasure and arrive back in the main foyer, it seems as though your door has disappeared behind you`)
        alert(`Welcome back, I hope you had fun in that room! You seem to have acquired what it was you was searching for.`)
        alert(`You now have ${3 - completedRooms.length} rooms remaining, time to choose again`)
    } else if(completedRooms.length == 1) {
        alert(`You walk out of the room with your new treasure and arrive back in the main foyer, it seems as though your door has disappeared behind you`)
        alert(`Another one? You seem to be in a hurry to leave this place. The point of infinity is that you can take your time you know.`)
        alert(`You now have ${3 - completedRooms.length} room remaining, you're close to the end now`)
    } else {
        endGame()
    }
}

const completeRoom = (room) => {
    completedRooms.push(room)
    newRoom()
}

const roomCheck = () => {
    alert(`You’re standing in front of 3 doors that tower over you.`)
    alert(`Your first door seems too heavy for any person to open alone, you seem tired just looking at it.`)
    alert(`The second door is adorned with bejeweled numbers, you could probably pay a months rent if you pried one off... why would they waste it on numbers? on a door?`)
    alert(`The third emits an ominous aura, you can see a glimmer of unsettling and out of place light from the cracks.`)  
}

// ---------------------------------------------------------------------------------------------------------------
// Room of Wisdom


let wisdomAttempts = 10;

const rand = Math.ceil(Math.random()*50)


function randomMultiply(){
 let num1 = Math.ceil(Math.random()*50)
 let num2 = Math.ceil(Math.random()*50)
 let ans = num1 * num2
 let userValue = prompt(`what is ${num1} * ${num2}?`)
    if(userValue === ''){
        alert(`You didn't even try. Pathetic`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
    else if(userValue == ans) {
        alert(`You're ...`)
        alert(`Not as dumb as you look ...`)
        character.wisdom ++
        wisdomAttempts --
        console.log(character.wisdom)
        console.log(wisdomAttempts)
        mathQuiz()
    } else {
        alert(`You're ...`)
        alert(`Completely as expected. You weren't even close`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
}

function randomAdd(){
    let num1 = Math.ceil(Math.random()*50)
    let num2 = Math.ceil(Math.random()*50)
    let ans = num1 + num2
    let userValue = prompt(`what is ${num1} + ${num2}?`)
    if(userValue === ''){
        alert(`You didn't even try. Pathetic`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
    else if(userValue == ans) {
        alert(`You're ...`)
        alert(`Not as dumb as you look ...`)
        character.wisdom ++
        wisdomAttempts --
        console.log(character.wisdom)
        console.log(wisdomAttempts)
        mathQuiz()
    } else {
        alert(`You're ...`)
        alert(`Completely as expected. You weren't even close`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
}

function randomSubtract(){
    let num1 = Math.ceil(Math.random()*50)
    let num2 = Math.ceil(Math.random()*50)
    let ans = num1 - num2
    let userValue = prompt(`what is ${num1} - ${num2}?`)
    if(userValue === ''){
        alert(`You didn't even try. Pathetic`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
    else if(userValue == ans) {
        alert(`You're ...`)
        alert(`Not as dumb as you look ...`)
        character.wisdom ++
        wisdomAttempts --
        console.log(character.wisdom)
        console.log(wisdomAttempts)
        mathQuiz()
    } else {
        alert(`You're ...`)
        alert(`Completely as expected. You weren't even close`)
        wisdomAttempts --
        console.log(wisdomAttempts)
        mathQuiz()
    }
}


let functionArr = [randomMultiply, randomAdd, randomSubtract]    

let randomQuest = (arr) => {
    let i = Math.floor(Math.random()*arr.length)
    console.log(arr[i]())
}

const mathQuiz = () => {
    if(character.wisdom == 0 && wisdomAttempts == 10){
        alert(`First Question`)
        randomQuest(functionArr)
    } else if(character.wisdom < 5 && wisdomAttempts > 0){
        alert('Next Question')
        randomQuest(functionArr)
    } else if(wisdomAttempts == 0) {
        alert('Go back and try again')
        character.wisdom -= character.wisdom
        wisdomAttempts += 10;
    } else {
        alert(`I honestly didn't expect this, you actually have a brain knocking about in there`)
        alert(`Although if you used it a bit more you'd realise the stone you was looking for was left of the door when you came in`)
        alert(`No. Your left. LEFT.`)
        alert('You could have just taken it when you entered')
        alert(`You pick up the stone and walk out of the room with your head hung in shame. That didn't feel good`)
        completeRoom('wisdom')
        removeDoor('wisdom', 'wis')
    }  
}

const wisdomRoom = () => {
    alert(`Only those with the power of wisdom can progress through this room and claim their prize.`) 
    alert(`You will be asked an endless supply of questions to test your knowledge.` )
    alert(`If you can’t correctly answer to our satisfaction? `)
    alert(`You will remain here.`)
    alert(`Let us begin`)
    mathQuiz()
}


// ---------------------------------------------------------------------------------------------------------------
// strength Room

let strengthAttempts = 10     

let strengthRoom = () => { 
    alert(`In order to acquire and hold the strength stone you’ll need to prove you have enough strength, by wielding items of significant power.`)
    alert(`You see a stone laying on the ground - that has to be what they’re looking for. You attempt to pick up the stone but it weighs a ton! How are you meant to pick this thing up?!`)
    alert(`Look around the room and select your items carefully else you’ll remain too weak and puny to hold the stone.`)
    strengthAttempts = 10
    character.strength = 0   
    itemOptions()
}


let itemOptions = () => {
    let i= Math.floor(Math.random()*itemArray.length)
    itemArray[i]
    console.log(itemArray[i]())}


let axe = () => {
    let axeAnswer = prompt("You see an old trunk underneath a sheet. Do you want to open it?")
    if (axeAnswer == "yes") {
    alert ("you find an old axe. However you are too clumsy to handle it and end up dropping it on your foot. You feel significantly weaker than before!")
    character.strength -=4
    strengthAttempts --
    strengthCheck()
    } else if (axeAnswer != "yes" && axeAnswer != "no") {
        alert("You didn't type in yes or no! You lose an attempt. Here's another item")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck()
    } else { 
        alert("You have chosen not to open the trunk. You continue your search around the room for items")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck() 
        }
    }

let beer = () => {
    let beerAnswer = prompt("You turned left and you stumbled upon a can of beer. Would you like a drink?")
    if (beerAnswer == "yes") {
    alert ("The can of beer has given you a strength boost. Use it wisely!")
    character.strength +=2
    strengthAttempts --
    strengthCheck()
    } else if (beerAnswer != "yes" && beerAnswer != "no") {
        alert("You didn't type in yes or no! You lose an attempt. Here's another item")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck()
    } else {
        alert("You have chosen not to drink the beer. You continue your search around the room for items")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck() 
        }
    }

let fruit = () => {
    let fruitAnswer = prompt("You see a delicious bowl of fruit on the table containing your favourite fruit. Do you want to eat the fruit")
    if (fruitAnswer == "yes") {
    alert ("The bowl of fruit has increased your strength! YAY!")
    character.strength +=4
    strengthAttempts --
    strengthCheck()
    } else if (fruitAnswer != "yes" && fruitAnswer != "no") {
        alert("You didn't type in yes or no! You lose an attempt. Here's another item")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck()
    } else {
        alert("You have chosen not to eat the fruit. You continue your search around the room for items")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck() 
        }
    }

let dumbbells = () => {
    let dumbbellsAnswer = prompt("You see a set of dumbbells on the floor. Do you want to pick them up")
    if (dumbbellsAnswer == "yes") {
        alert ("Your hard work is rewarded. Your muscles have grown and you feel much stronger than before!")
        character.strength +=5
        strengthAttempts --
        strengthCheck()
        } else if (dumbbellsAnswer != "yes" && dumbbellsAnswer != "no") {
            alert("You didn't type in yes or no! You lose an attempt. Here's another item")
            strengthAttempts --
            alert (`You have ${strengthAttempts} attempts left!`)
            strengthCheck()
        } else {alert("You have chosen not to pick up the dumbbells. You continue your search around the room for items")
    strengthAttempts --
    alert (`You have ${strengthAttempts} attempts left!`)
    strengthCheck() }
    }

let marsbar = () => {
    let marsbarAnswer = prompt("You find a marsbar on a table to your right. Will you eat the chocolate bar?")
    if (marsbarAnswer == "yes") {
        alert ("You are not you when you are hungry….but unfortunately for you the Mars bars made you SLUGGISH! YOUR STRENGTH HAS DECREASED! AHHH")
        character.strength -=2
        strengthAttempts --
        strengthCheck()
    } else if (marsbarAnswer != "yes" && marsbarAnswer != "no") {
        alert("You didn't type in yes or no! You lose an attempt. Here's another item")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck()
    } else {alert("You have chosen not to eat the marsbar. You continue your search around the room for items")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck() }
    }   

let poncho = () => {
    let ponchoAnswer = prompt("You find an old mexican style poncho hanging from a coat hanger near the entrance of the room. Do you wish to wear it?")
    if (ponchoAnswer == "yes") {
        alert (" It’s made your fashion sense seem much more sophisticated and strikes fear into the heart of your enemies. Your strength has increased!")
        character.strength +=3
        strengthAttempts --
        strengthCheck()
    } else if (ponchoAnswer != "yes" && ponchoAnswer != "no") {
        alert("You didn't type in yes or no! You lose an attempt. Here's another item")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck()
    } else {alert("You have chosen not to wear the poncho. You continue your search around the room for items")
        strengthAttempts --
        alert (`You have ${strengthAttempts} attempts left!`)
        strengthCheck() }
    }   
    
let itemArray = [axe, beer, fruit, dumbbells, marsbar, poncho]

   
let strengthCheck = () => {
    if (strengthAttempts == 0 && character.strength <10 ) {
        alert("You lose! Try again.")
        character.strength = 0 
        strengthRoom() 
    } else if (character.strength <10 && strengthAttempts > 0 ) {
        itemOptions()
    } else { 
        alert(`You may have made some … questionable choices there but you now feel like you can take on any challenge.`)
        alert(`You attempt to pick the stone up and stumble, then look around to see if anyone witnessed your whoopsie moment before you go for another attempt.`)
        alert(`SUCCESS!`)
        alert(`You have acquired the strength stone.`)
        alert(`A weaker person would have never attempted again after embarrassing themselves so thoroughly - Good for you!`)
        completeRoom('strength')
        removeDoor('strength', 'str')
    }
}

// ---------------------------------------------------------------------------------------------------------------
//Courage Room

const courageRoom = () => { 
    alert(`As you walk through the door you see a strange and unfamiliar setting.`)
    alert(`You were meant to be in a room, right? As you glance around the area you seem to be surrounded by foliage - trees and grass as far as the eye can see.`)
    alert(`You think back to the strange man in the street and ponder on the amount of hallucinogens you must be on.`)
    alert(`At least 12, I’m betting.`)
    alert(`A voice warns you that this is the room of courage. To claim your prize you must show that you are a being worthy of it.`)
    battle()
}

let battle = () => {
    alert (`You see a “damsel in distress” type being carted away by an Ogre towards the north of the forest. He’s yelling something about it being his swamp but you’re sure he’s not that one.`)
    let battleAnswer = prompt("Do you fight the Ogre and try to save her?")
    if(battleAnswer == "yes") {
        alert ("You ready for battle and run in … the closer you get to the Ogre the more frightening he looks. It seems like you made the correct choice but it doesn’t feel like it!")
        attack()    
    } else if (battleAnswer != "yes" && battleAnswer != "no") {
        alert(`You stood there and shouted ${battleAnswer} to no one in particular, the Ogre can't seem to understand why - and neither can you. Maybe just a yes or a no next time`)
        battle()
    } else {
        alert("Wimp. Try again and this time try to find a backbone.")
        battle()
    }
}

let attack = () => {
    let attackAnswer = prompt("The Ogre stares you down and laughs, do you attack?")
    if(attackAnswer == "yes") {
        alert ("You swing at the Ogre and he laughs it off but doesn’t seem to move. You notice a giant club on his waist, thank god he wasn’t threatened by that.") 
        again()   
    } else if (attackAnswer != "yes" && attackAnswer != "no") {
        alert(`You stood there and shouted ${attackAnswer} to no one in particular, the Ogre can't seem to understand why - and neither can you. Maybe just a yes or a no next time`)
        attack()
    } else {
        alert("You walk away, the situation doesn’t change at all. You’ve done the bare minimum and you should be disappointed in yourself.")
        attack()
    } 

}
let again = () => {
    let againAnswer = prompt("Attack again??")
    if(againAnswer == "yes"){
        alert ("You attack again with all your strength. This seemed to annoy the Ogre, as he picks you up and throws you towards the entrance. Guess we’re going again.")
        again()
    } else if (againAnswer != "yes" && againAnswer != "no") {
        alert(`You stood there and shouted ${againAnswer} to no one in particular, the Ogre can't seem to understand why - and neither can you. Maybe just a yes or a no next time`)
        again()
    } else {
        alert("You speak to the Ogre about his disrespectful behaviour and he breaks down crying. He’d never noticed how rude he was being to his guest - maybe next time he should try his words.")
        alert(`It seems as though the situation is resolved. You used your words to be the bigger person and came to a compromise. Isn’t that a fun and valuable life lesson you’ve learnt?? You’re lucky he didn’t crush you where you stood.`)
        alert(`The Ogre looks down at you and laughs again, “You’re quite a brave one to attack me whilst being so tiny, I found this shiny stone by the stream over there - take it and disappear.”`)
        completeRoom('courage')
        removeDoor('courage', 'cou')
    }    
}