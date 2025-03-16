// Hent knappen og resultatområdet
const rollButton = document.getElementById('rollButton');
const diceResult = document.getElementById('diceResult');

// Event listener på knappen
rollButton.addEventListener('click', function() {
    rollDice();
});

// Funktion til at generere et tilfældigt tal mellem 1 og 6
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generer et tilfældigt tal mellem 1 og 6
    diceResult.textContent = `Resultat: ${randomNumber}`; // Vis resultatet på skærmen
}
