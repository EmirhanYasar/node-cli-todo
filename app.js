const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const gorevler = [];


console.log("=== Görev  Yönetim Sistemi ===")

console.log("1- Görev Ekle");
console.log("2- Görevleri Listele");
console.log("3- Çıkış");


r1.question("Seçiminiz: ", (secim)=>{
    if(secim==="1"){
        r1.question("Görevi girin: ", (gorev)=>{
            gorevler.push(gorev);
            console.log("Görev Eklendi: " + gorev);
            r1.close();
        });
    }
    else if(secim==="2"){
        console.log("Görevleri Listeleme Seçildi");
        r1.close();
    }
    else if(secim==="3"){
        console.log("Program Kapatılıyor");
        r1.close();
    }
    else{
        console.log("Geçersiz İşlem");
        r1.close();
    }

    
});




