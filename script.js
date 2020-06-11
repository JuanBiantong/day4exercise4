//SOAL 1
/*
for(let i = 1; i<=100 ; i++){
    document.write('<br/>')
    document.write('User ke ', i)
}
*/

//SOAL 2
/*
var nilaiAwal = 0;
for (let i = nilaiAwal; i<=10; i++){
    nilaiAwal+=2;
    document.write('<br/>')
    document.write(nilaiAwal)
}
*/
//SOAL 3
/*
for(let i = 1; i<=20 ; i++){
    if(i%2){
        console.log('Ganjil', i)
    } else 
    console.log('Genap', i)
}
*/

//SOAL 4
/*
let conf = confirm("Apakah anda mau mengulang?")
let i = 0;
while (conf) {
    conf = confirm("Apakah anda mau mengulang?")
    i++;
}console.log(`Anda sudah mengulang sebanyak ${i} kali` )
*/

//SOAL 5
let guessedIt = prompt("Sebutkan kepanjangan dari nama IB?");
let answer = 'Impact Byte';
let i = 1;

while(guessedIt!==answer){
    guessedIt = prompt("Sebutkan kepanjangan dari nama IB?");
    i++;
}alert(`Selamat jawaban kamu benar!!! Percobaan ke-${i}`)
