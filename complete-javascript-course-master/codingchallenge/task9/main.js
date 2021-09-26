'use strict';

console.log('hello js');

//#1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };
  
  // const player1 = game.players[0];

  //   console.log(player1);
    
  //   const gk = player1[0];
  //   const fieldPlayers = player1.slice(1);
  //   console.log(gk);
  //   console.log(fieldPlayers);

  // const player2 = game.players[1];

  //     console.log(player2);


  // const allPlayers = player1.concat(player2);
  //   console.log(allPlayers);

  // const players1Final = player1;
  //   player1.push('Thiago','Coutinho', 'Perisic');
  //   console.log(players1Final);

  //   const printGoals = function(i){
  //     for(let i = 0; i < game.scored.length; i++){
  //     console.log(`${game.scored[i]} is make a goal. Total score is ${game.score}`)
  //   }
  //   };
  //   printGoals();

  //answer
    const [players1, players2] = game.players;

    const [gk, ...fieldPlayers] = players1;

    const allPlayers = [...players1, ...players2];

    const players1Final = [...players1, 'Thiago','Coutinho', 'Perisic'];

    const {
      odds: {team1, x:draw, team2}
    } = game;
  console.log(team1, draw, team2);

  const printGoals = function(...players){
  console.log(`${players.length} goals were scored`);
  }
    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    printGoals('Davies', 'Muller');
    printGoals(...game.scored);

  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');


  //#2
  for(const [num,name] of game.scored.entries()){
    console.log(`Goal${num+1}: ${name}`);
  };

  // const [odd1, odd2, odd3] = [team1, draw, team2];
  // console.log(odd1);
  // const odd = [];
  // odd.push(odd1);
  // odd.push(odd2);
  // odd.push(odd3);
  // console.log(odd);

  // const oddsAverage = function(odd){
  //   let total = 0;
  //   for(let i = 0; i < odd.length; i++){
  //   total += odd[i]
  // }
  // return total / odd.length

  // };

  // console.log(oddsAverage(odd));

  // const teamName = [game.team1, 'draw', game.team2];
  // console.log(teamName);

  // for(let i = 0; i < odd.length; i++){
  //   console.log(i % 2 === 0 ? `Odd of ${teamName}: ${odd[i]}` : `Odd of victory ${teamName[i]}: ${odd[i]}`);

  // }

  // const scorers = {
  //   Gnarby: 1,
  //   Hummels: 1,
  //   Lewandowski: 2
  // }
  
  //answer

  const odds = Object.values(game.odds);
  console.log(odds);
  let average = 0;
  for(const odd of odds)
    average += odd;
    average /= odds.length;
  console.log(average);

  for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} : ${odd}`);
}


//#3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents.delete(64));
console.log(gameEvents);

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

const events = [new Set(gameEvents.values())];
console.log(events);

for(const [time, events] of gameEvents){
  const el = time <= 45 ? `[FIRST HALF]${time}` : `[SECOND HALF]${time}`
  console.log(`${el}: ${events}` )
};

const time = [...gameEvents.keys()].pop();
console.log(time);

//#4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
  
//   for(const [i, row] of rows.entries()){
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

//     console.log(`${output.padEnd(20, ' ')}${
//     '✅'.repeat(i + 1)}`)

//   }
// })

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.toLowerCase().split('\n');

  for(const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');

    const total = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    console.log(`${total.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  };

})

