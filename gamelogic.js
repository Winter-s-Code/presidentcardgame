

// Make the starting deck
let cards = ["2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C","5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D","8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","JC","JD","JH","JS","QC","QD","QH","QS","KC","KD","KH","KS","AC","AD","AH","AS"]
// Shuffle the deck
let deck = cards.sort(() => Math.random() - 0.5);

// All players in game
let players = {}
// Player 1, Player 2, etc
let pslot = 1

// Add new player to the table
const addplayer = (pid, hands, position)=> {
    // unique player id
    players.id = pid
    // player 1, player 2, etc
    players.slot = pslot
    // cards in hand
    players.hand = hands
    // position in game (president, vice, etc)
    players.position = position
}

// Give player cards
const givecards = (p,c)=>{
    for(let i=0; i<=c-1;i++){
        // Add card to the player handd
        p.push(deck[0])
        // Remove card from the deck
        deck.shift()
    }
 }


 givecards(p1,5)
 console.log(p1)