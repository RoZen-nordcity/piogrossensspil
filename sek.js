// Sandhed spørgsmål
const truthQuestions = [
    "Har du nogensinde haft sex et offentligt sted? Hvor?", 
    "Hvilket kropsområde på en person tiltrækker dig mest?",
    "Hvad var din vildeste fantasie, du har haft under sex?",
    "Hvornår var du sidste gang på en date, og hvordan gik det?",
    "Hvem i rummet ville du gerne kysse?",
    "Hvad er den mest pinlige ting, der er sket for dig under sex?",
    "Hvilken berømthed har du haft de vildeste fantasier om?",
    "Har du nogensinde sendt nudes? Hvem?",
    "Hvad er den vildeste ting, du har gjort for at score nogen?",
    "Hvornår var du sidste gang, du var nøgen foran et spejl, og hvad tænkte du på?",
    "Hvilken sexstilling er din favorit?",
    "Har du nogensinde haft et one-night stand? Hvad skete der?",
    "Hvad er den sjoveste kommentar, du har fået under sex?",
    "Hvem i rummet tror du ville være bedst i sengen?",
    "Hvad er din største frygt i et forhold?",
    "Har du nogensinde kysset nogen af samme køn?",
    "Hvornår var du sidste gang, du var i seng med nogen uden at have planer om det?",
    "Har du nogensinde været til en striptease?",
    "Hvilken person ville du helst gerne tage på en vild date med?",
    "Har du nogensinde fløjtet på en fest og fået nogen til at falde for dig?",
    "Hvilken film har du set, der virkelig har tænt dig?",
    "Hvornår var du sidste gang, du så en voksenfilm, og hvad tænkte du på?",
    "Hvad er din største hemmelighed i dit sexliv?",
    "Hvem er den bedste du har kysset?",
    "Har du nogensinde haft sex med nogen, du ikke burde have været sammen med?",
    "Hvad er den vildeste ting, du har gjort i et forhold?",
    "Hvad er den pinligste ting, du har gjort, når du har været sammen med en, du godt kunne lide?",
    "Hvad ville du gøre, hvis du havde én vild nat med din crush?",
    "Hvilket kropsområde elsker du at få kys på?",
    "Hvem i rummet ville du helst tage på en vild tur?"
];

// Konsekvenser (dare)
const dareConsequences = [
    "Giv et kys til den person til venstre for dig.",
    "Sut på din egen finger i 10 sekunder.",
    "Løb rundt om bordet 5 gange og råb 'Jeg elsker fest!'",
    "Efterlign en superhelt i 1 minut.",
    "Lav en dance challenge i 30 sekunder som en berømthed.",
    "Kald din telefon og sig til personen, at du har noget vigtigt at fortælle, og læg på hurtigt.",
    "Find et kæledyr og lav en 'kramme-dukke'-dans.",
    "Giv et tilfældigt kompliment til alle i gruppen.",
    "Find et skjult kamera og lav en 30 sekunders reklame for det sjoveste produkt, du kan finde.",
    "Spis en skefuld mayonnaise eller sennep hurtigt.",
    "Skab din egen sjove lyd og få alle til at gentage det i 30 sekunder.",
    "Syng en sang som en opera-sanger og lav en dramatisk optræden.",
    "Tænk på en berømthed og grine som dem i 30 sekunder.",
    "Hvem i rummet ville du gerne kysse? Giv et kys til den person.",
    "Hvad er din mærkeligste vane? Udfør den foran alle.",
    "Gør 10 burpees hurtigt og syng en sang samtidig.",
    "Lav en skør dans og få alle til at følge med.",
    "Spis et hotdog på en sjov måde uden hænder.",
    "Syng en pop-sang mens du laver en dramatisk performance.",
    "Find en person og opfør en teater-scene med dem i 2 minutter.",
    "Hop rundt som en kanin i 30 sekunder.",
    "Tæl til 20, mens du laver mærkelige lyde.",
    "Lav en fjollet selfie og del det med gruppen.",
    "Forestil dig, at du er en reklamesælger og sælg noget, der ikke eksisterer i 2 minutter.",
    "Lav en sjov reklame for en tændstik og få alle til at se.",
    "Skift tøj med en ven i 2 minutter.",
    "Lad en ven skrive noget på din ansigt og gå rundt i 5 minutter.",
    "Find på en sjov imitations-dans og få alle til at gøre den sammen.",
    "Lav en reklame for din yndlingsdrik og få folk til at købe den."
];

// Funktion til at vælge et tilfældigt element fra en array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Hent knapperne og output div
const truthButton = document.getElementById('truthButton');
const dareButton = document.getElementById('dareButton');
const outputDiv = document.getElementById('output');

// Når sandhed-knappen bliver trykket
truthButton.addEventListener('click', () => {
    const randomTruth = getRandomElement(truthQuestions);
    outputDiv.textContent = randomTruth;  // Vist på siden
});

// Når konsekvens-knappen bliver trykket
dareButton.addEventListener('click', () => {
    const randomDare = getRandomElement(dareConsequences);
    outputDiv.textContent = randomDare;  // Vist på siden
});
