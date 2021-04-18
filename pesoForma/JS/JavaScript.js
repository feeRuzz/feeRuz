function calcola(){
    var altezza, sex, eta, scelta, peso, altezzaMetri, ris;


    altezza = document.getElementById("altezza").value;

    
    eta = document.getElementById("eta").value;
    peso = document.getElementById("peso").value;

    scelta = document.getElementById("sex").selectedIndex;

    switch(scelta){

        case 0:
            sex = 1;
            break;
        case 1:
            sex = 2;
            break;                                                    

    }

     //formula di Lorenz
     if(sex==1){
        ris=altezza-100-(altezza-150)/4;
    }
    else if(sex==2){
        ris=altezza-100-(altezza-150)/2;
    }
    document.getElementById("fLorenz").innerHTML = ris + "kg";

    //formula di Broca
    if(sex==1){
        ris=altezza-100;
    }
    else if(sex==2){
        ris=altezza-104;
    }
    document.getElementById("fBroca").innerHTML = ris + "kg";

    //formula di Wan der Vae
    if(sex==1){
        ris=(altezza-150)*0.75+50;
    }
    else if(sex==2){
        ris=(altezza-150)*0.6+50;
    }
    document.getElementById("fWan").innerHTML = ris + "kg";


    //formula di Perrault
    ris=altezza-100+eta/10*0.9;
    document.getElementById("fPerr").innerHTML = ris + "kg";

    //formula di BMI
    altezzaMetri=altezza/100;
    ris=peso/(altezzaMetri*altezzaMetri);
    document.getElementById("bmiIndex").innerHTML = ris;

}