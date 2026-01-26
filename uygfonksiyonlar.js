function yazdir(kelime, sayi) {
    for(i = 0; i < sayi ;i++)
    {
        console.log(kelime)
    }
}
yazdir("Asım", 5)

function bolenleriBul(sayi) {

    let bolenler = []

    for (i = 2; i < sayi ;i++)
    {
        if (sayi % i == 0)
        {
            bolenler.push(i);
        }
    }
    return bolenler;
}

console.log(bolenleriBul(20));

function topla() {
    let sonuc = 0;
    for (i = 0; i < arguments.length ;i++)
    {
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(topla(22, 64, 36, 78));
sonuc = topla(92, 36, 24, 58);
console.log(sonuc);