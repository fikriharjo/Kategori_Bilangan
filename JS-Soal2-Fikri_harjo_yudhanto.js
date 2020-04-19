function angka(bilangan){
    var array = [];
    if(bilangan >= 0){
        array.push('Cacah');
    }
    if (bilangan < 0) {
        array.push('Negatif');
    }
    if(bilangan === 0){
        array.push('Nol');
    }
    if(bilangan > 0){
        array.push('Asli');
    }
    if((bilangan%2) > 0){
        array.push('Ganjil');
    }
    if((bilangan%2) === 0){
        array.push('Genap');
    }
    
    var hasil_akar = Math.sqrt(bilangan);
    var a = 0;
    var bool = true;

    while (a < hasil_akar) {
        a++;
        if((bilangan%a) == 0){
            a = hasil_akar;
            bool = false;
        }
    }

    if(bool == true){
        array.push('Prima')
    }
    if((bool == false) && (bilangan > 0)){
        array.push('Komposit');
    }
    
    return array;
}
console.log(angka(14));