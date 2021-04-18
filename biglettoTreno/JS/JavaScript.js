function calcola(){
    var persone, km;
    var modPrezzo, scelta;
    var prezzo;

    km = document.getElementById("km").value;

    if(document.getElementById("classe1").value){
        modPrezzo = 0.43;
    }
    else if(document.getElementById("classe2").value){
        modPrezzo = 0.3;
    }


    scelta = document.getElementById("person").selectedIndex;
    switch(scelta){

        case 0:
            persone = 1;
            break;
        case 1:
            persone = 2;
            break;
        case 2:
            persone = 3;
            break;
        case 3:
            persone = 4;
            break;
        case 4:
            persone = 5;
            break;
        case 5:
            persone = 6;
            break;
                                                                    

    }

    prezzo = km*modPrezzo*persone;
    document.getElementById("prezzo").innerHTML = "Prezzo: " + prezzo;

}