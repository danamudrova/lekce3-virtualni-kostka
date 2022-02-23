// tady je místo pro náš program


function hazej(){
    let kostka = document. querySelector('#kostka') //element,co se bude měnit
    let zprava = document. querySelector('#zprava') // element, co se bude měnit
    let cislo = Math.floor(Math.random() * 6 + 1)
   
    if (cislo === 6){
        zprava.textContent = "Vyhrál jsi!";
    }   else {
        zprava.textContent = "Je to " + cislo + " Házej znovu";
    }

    if (cislo > 0 && cislo < 7){
        kostka.src = 'obrazky/' + cislo + ".png"
    }   else {
        alert("Chyba!")
    }
}
