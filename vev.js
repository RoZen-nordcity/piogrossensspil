// Hent knappen og resultatområde
const challengeButton = document.getElementById('challengeButton');
const resultText = document.getElementById('resultText');

// Event listener på knappen
challengeButton.addEventListener('click', function() {
    generateChallenge();
});

// Funktion til at generere en tilfældig udfordring
function generateChallenge() {
    const challenges = [
        "Tag 1 slurk!",
        "Tag 2 slurke!",
        "Tag 3 slurke!",
        "Tag 4 slurke!",
        "Tag 5 slurke!",
        "Tag 6 slurke!",
        "Tag 7 slurke!",
        "Tag 8 slurke!",
        "Tag 9 slurke!",
        "Tag 10 slurke!",

        "Tag 1 shot!",
        "Tag 2 shots!",
        "Tag 3 shots!",
        "Tag 4 shots!",
        "Tag 5 shots!",
    ];

    // Generer et tilfældigt tal fra 0 til længden af udfordringerne
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

    // Vis udfordringen på skærmen
    resultText.textContent = randomChallenge;
}
