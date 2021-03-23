function setLeft(){
    
    var testDiv = document.getElementById('topnav');
    var slider2 = document.getElementsByClassName('slider-2');
    var slider6 = document.getElementsByClassName('slider-6');
    var w = window.innerWidth;
    var distanciaTopnav = testDiv.offsetLeft;
    console.log("ancho de pantalla: "+w);
    console.log("distancia topNav:" +distanciaTopnav);
    
    if(w>=1400){
        var porcentaje1 = ((w-1400)/69)+34.5;
        var porcentaje2 = 51 - ((w-1400)/48);
        console.log(porcentaje1);
        console.log(porcentaje2);
        slider2[0].style.top = '55%';
        slider2[0].style.left = porcentaje1+"%";
        slider6[0].style.top = '55%';
        slider6[0].style.left = porcentaje2+"%";
        

    }else{
        slider2[0].style.top = '50%';
        slider2[0].style.left = "32%";
        slider6[0].style.top = '50%';
        slider6[0].style.left = "54.5%";
    }
    
    
}
setLeft();
