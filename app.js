const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const gorevler = [];


function menuGoster() {
    console.log("=== Görev  Yönetim Sistemi ===")

    console.log("1- Görev Ekle");
    console.log("2- Görevleri Listele");
    console.log("3- Çıkış");
    
    r1.question("Seçiminiz. ",(secim)=>{
        if(secim==="1"){
            r1.question("Görevi Girin: ", (gorev)=>{
                gorevler.push(gorev);
                console.log("Görev Eklendi: " + gorev);
                menuGoster();
            })
        }
        else if(secim==="2"){
            if(gorevler.length===0){
                console.log("Henüz Görev Eklenmedi");
            }
            else{
                console.log("\n=== Görevler ===");
                gorevler.forEach((gorev,index)=>{
                    console.log((index+1) + "-" + gorev);
                });
            }
            menuGoster();
        }
        else if(secim==="3"){
            console.log("Program Kapatılıyor...");
            r1.close();
        }
        else{
            console.log("Geçersiz İşlem");
            menuGoster();
        }

    });
}
menuGoster();




