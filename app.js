const readline = requrie("readline");

const r1 = readline.CreateInterFace({
    input: process.stdin,
    output: process.stdout
})

r1.question("Seçiminiz: ", (secim)=>{
    if(secim==="1"){
        console.log("Görev Ekleme Seçildi");
    }
    else if(secim==="2"){
        console.log("Görevleri Listeleme Seçildi");
    }
    else if(secim==="3"){
        console.log("Program Kapatılıyor");
    }
    else{
        console.log("Geçersiz İşlem");
    }

    r1.close();
})


console.log("=== Görev  Yönetim Sistemi ===")

console.log("1- Görev Ekle");
console.log("2- Görevleri Listele");
console.log("3- Çıkış");


