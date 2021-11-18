/* function word () {
    console.log("Hallo")
    document.write("<p>Hallo</p>")
}
word ()

let x = 2
let y = 3

summe = () =>{
    console.log(x + y)
    document.write(x + y)
}
summe ()

let par = 1234
type = () => {
    console.log(typeof par)
    document.write(typeof par)
}
type () */

/* let hero = (heroName, heroPower, heroEnemy) =>{
    let name = "Mein Lieblingsheld aus Marvel ist: " + heroName
    let power = "Er/Sie hat die Fähigkeit: " + heroPower
    let enemy = "Sein/Ihr größter Gegner ist: " + heroEnemy
    console.log(name, power, enemy)
}
hero ("Superman", "Fliegen", "Steffen") */

/* let returnOne = () =>{
    return 1;
}
let x = 1;
let y = returnOne();

if (x === y) {
    console.log("Wird das gedruckt?");
}
 */

/* function lev17(par1){
    return par1 * 2
}
let ergebnis = lev17 (3)
console.log(ergebnis) */

/* function age(yearBorn){
    return yearBorn
}
let ergebnis = age(28)
console.log(ergebnis) */


/* compare = (ich, anders) =>{
    return ich - anders;
}
let ergebnis = compare(27, 17)

console.log(ergebnis) */

function vorstellung(vorname, nachname, geburtsort, alter, wohnort) {
    return vorname + " " + nachname + " ist mein Name und geboren bin ich in " + geburtsort + " aber dort wohne ich nicht mehr sondern in " + wohnort + " mit meinem schnuckeligen jahren mit der anzahl: " + alter
}

let ergebnis = vorstellung("lukas", "Schornstein", "HEF", 18, "Odensachsen")

console.log(ergebnis)