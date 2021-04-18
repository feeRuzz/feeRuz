function calcola(){
    var materiale, volume;
    var scelta;
    var peso;

    volume = document.getElementById("vol").value;



    scelta = document.getElementById("materiale").selectedIndex;
    switch(scelta){

        case 0:
            materiale = 7.8;
            break;
        case 1:
            materiale = 2.75;
            break;
        case 2:
            materiale = 8.7;
            break;
        case 3:
            materiale = 8.93;
            break;                                                      

    }

    peso = volume*materiale;
    document.getElementById("peso").innerHTML = "Peso: " + peso;

}