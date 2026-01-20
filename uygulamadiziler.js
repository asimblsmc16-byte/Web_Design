let meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik"];
console.log(meyveler);

sonuc = meyveler.length;
console.log(sonuc);

sonuc = meyveler[0];
console.log(sonuc);

sonuc = meyveler[meyveler.length - 1];
console.log(sonuc);

sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun");
console.log(sonuc);

sonuc = meyveler.push("Çilek");
console.log(sonuc);

sonuc = meyveler.pop();
sonuc = meyveler.pop();
console.log(sonuc);

let ogrenci1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [60, 90, 80]
];


yas = (2026 - ogrenci1[2]);
notort = ((ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3);
console.log(yas);
console.log(notort);


let ogrenci2 = [
    "Ada",
    "Bilgi",
    2012,
    [70, 80, 80]
];


yas = (2026 - ogrenci2[2]);
notort = ((ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3);
console.log(yas);
console.log(notort);


let ogrenci3 = [
    "Çınar",
    "Turan",
    2017,
    [60, 50, 80]
];


yas = (2026 - ogrenci3[2]);
notort = ((ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3);
console.log(yas);
console.log(notort);