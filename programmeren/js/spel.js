/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Naam: Jade Schreuder
// Klas: Fuchsia
// Datum: 24-03-2019
// Docent: Laura Benvenuti

// ik maak alvast wat variabelen aan die ik later ga gebruiken
var plaatje;
var geluid;
var random;
var antwoord;

// hiermee maak ik een array aan voor de plaaatjes en voor de geluiden
var imgarray = ['tractor.png', 'varken.png', 'grasmaaier.png', 'paard.png'];
var soundarray = ['tractor.mp3', 'varken.mp3', 'grasmaaier.mp3', 'paard.mp3'];

// deze functie kiest een random object uit
function kiesrandom() {
    var resultaat = Math.floor(Math.random() * 4);
    return resultaat;
}

// random wordt een random getal en deze pakt bij plaatje en geluid het object dat op deze plek staat uit imgarray en soundarray
random = kiesrandom();
plaatje = imgarray[random];
geluid = soundarray[random];

// pakt de speaker img html elementen en maakt hier variabelen van 
var eerstegeluid = document.getElementById('eerstegeluid');
var tweedegeluid = document.getElementById('tweedegeluid');

// zorgt ervoor dat het geluidje hetzelfde is als het plaatje 
var geluidje = document.getElementById('audio1');
document.getElementById('audio1').src = 'sounds/' + geluid;
document.getElementById('plaatje').src = 'images/' + plaatje;

// zorgt ervoor dat geluid2 een ander random getal krijgt dan geluid1
var geluid2 = soundarray[Math.floor(Math.random() * soundarray.length)];
var geluidje2 = document.getElementById('audio2');
document.getElementById('audio2').src = 'sounds/' + geluid2;

// functie om geluid 1 af te spelen
function speeleerstegeluidaf() {
    geluidje.play();
}

//functie om geluid 2 af te spelen
function speeltweedegeluidaf() {
    geluidje2.play();
}
// eventlisteners aan de speakers toegevoegd
eerstegeluid.addEventListener('click', speeleerstegeluidaf);
tweedegeluid.addEventListener('click', speeltweedegeluidaf);

// pakt de speaker img html elementen en maakt hier variabelen van
var kiesgeluid1 = document.getElementById('kieseerstegeluid');
var kiesgeluid2 = document.getElementById('kiestweedegeluid');

// functie om eerste geluid te checken
function check1() {
    if (geluid && plaatje) {
        antwoord = 'Dit antwoord was goed!';
        document.getElementById('antwoord').innerHTML = antwoord;
    } else {
        antwoord = 'Helaas, dit antwoord was fout. Probeer het opnieuw!';
        document.getElementById('antwoord').innerHTML = antwoord;
    }
}

// functie om tweede geluid te checken
function check2() {
    if (geluid2 == geluid) {
        antwoord = 'Dit antwoord was goed!';
        document.getElementById('antwoord').innerHTML = antwoord;
    } else {
        antwoord = 'Helaas, dit antwoord was fout. Probeer het opnieuw!';
        document.getElementById('antwoord').innerHTML = antwoord;
    }
}

// adventlisteners zodat als je klikt op kies geluid dat het gegeven antwoord gecheckt wordt
kiesgeluid1.addEventListener('click', check1);
kiesgeluid2.addEventListener('click', check2);


// checken of plaatje en 1 knop gelijk zijn
console.log('het plaatje is ' + plaatje);
console.log('bijbehorende geluid is ' + geluid);
// checken wat het tweede geluid is
console.log('tweede geluid is ' + geluid2);
