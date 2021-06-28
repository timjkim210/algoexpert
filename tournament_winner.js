function tournamentWinner(competitions, results) {
    debugger
  let standings = {};
	for (let i = 0; i < competitions.length; i++) {
		let game = competitions[i];
		let winner = results[i];
		if (winner === 0) {
			if (standings[game[1]]) {
				standings[game[1]] += 3
			} else {
				standings[game[1]] = 3
			}
		} else {
			if (standings[game[0]]) {
				standings[game[0]] += 3
			} else {
				standings[game[0]] = 3
			}
		}
	}
	let highScore = Math.max(...Object.values(standings));
	let winningTeam = Object.keys(standings).find(key => standings[key] === highScore)
  return winningTeam;
}
