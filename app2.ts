// Uppgift 1
/*let förnamn= await read("Förnamn? ")
let efternamn = await read("Efternamn? ")
let initialer = förnamn[0].toLocaleUpperCase() + efternamn[0].toLocaleUpperCase()
   write("Dina initialer är " + initialer );
export { };*/



// Uppgift 2
/*let förnamn= await read("Förnamn? ")
let efternamn = await read("Efternamn? ")
let användarnamn = förnamn.slice(0,3) + efternamn.slice(0,3) 
   write("Ditt användarnamn är " + användarnamn. toLocaleLowerCase() );
export { };*/

// Uppgift 3
/*let telnummer = await read("Telefonnummer med bindestreck: ")
write("Telefonnummer utan bindestreck: " + telnummer.replace("-", " "))

export { }*/

// Uppgift 4
/*let telnummer = await read("Telefonnummer med bindestreck: ") 
let index = telnummer.indexOf("-")
let riktnummer = telnummer.slice(0,index);
    write("Riktnummer: " + riktnummer)
let abonnentnummer = telnummer.slice(index + 1); 
    write("Abonnentnummer: " + abonnentnummer)

export { } */

// Uppgift 5
/*let min = +await read("Minuter: ")
let tim = Math.floor(min / 60); 
    write("Timmar: " + tim)
let restmin = min % 60;
    write("Minuter: " + restmin)
export { };*/

// Uppgift 6
/*let radie = +await read("Radie: ")
let area = Math.PI * radie * radie;
    write("Area: " + area.toFixed(2))
let omkrets = 2 * Math.PI * radie;
    write("Omkrets: " + omkrets)
export { };*/

// Uppgift 7
/*let a = +await read("Sidlängd a: ") 
let b = +await read("Sidlängd b: ") 
let c = +await read("Sidlängd c: ") 
let ldiagonalen = Math.sqrt( a**2 + b**2 + c**2 );
    write("Längsta diagonalen: " + ldiagonalen)
export { }*/

// Uppgift 8 
/*let primtal = [2, 3, 5, 7, 11, 13, 17, 19]
    write(primtal[0])
    write(primtal[7])
    write(primtal.length)
    primtal.push(23)
    write(primtal.length)*/
    
// Uppgift 9
/*let städer = ["Rom", "Paris", "Berlin", "Moskva"]
let länder = ["Italien", "Frankrika", "Tyskland", "Ryssland"]
städer.push("Madrid")
länder.push("Spanien")  
for (let i = 0; i<städer.length; i++) {
    write(städer[i] + " är huvudstad i " + länder[i])
}*/

// Uppgift 10
/*let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 3: ")
let tal4 = +await read("Tal 4: ")
let tal5 = +await read("Tal 5: ")
let number = [tal1, tal2, tal3, tal4, tal5]
for(let i=number.length -1; i>=0; i--) {
    write(number[i])}

export { }*/

// Uppgift 11
/*let Antal = +await read("Antal: ")
let tal = []
for (let i = 1; i <= Antal; i++) {
  let tali= +await read("Tal " + i + ": " )
  tal.push(tali)
}
for (let i = tal.length -1; i >=0; i--) {
    write(tal[i])
}
export { }*/

// Extrauppgift 2

/*let a= +await read("Skriv ett andragradsekvation i formen ax^2 + bx + c. Ange a: ")
let b= +await read("Ange b:")
let c= +await read("Ange c: ")
if (a===0) { write("Det är inte en andragradsekvation.") }
else if(b**2 - 4*a*c < 0) {
    write("Det finns inga reella rötter.")
}
else{
let rot1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a)
let rot2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a)
write("Rötterna är: " + rot1.toFixed(1)  + " och " + rot2.toFixed(1))
}
export { };*/


// Extrauppgift 3
/*let m = array2D(4, 6, 0);
function show() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            write(m[i][j], "\t")
        }
        write()
    }
}
show()     
while (true) {
    let radindex = +await read("Radindex (0-3): ")
    let kolumnindex = +await read("Kolumnindex (0-5): ")
    let värde = +await read("Värde (ett heltal): ")
    m[radindex][kolumnindex] = värde;
    show()
}
export { };*/


