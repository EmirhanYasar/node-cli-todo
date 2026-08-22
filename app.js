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
    console.log("3- Görev Sil");
    console.log("4- Görev Tamamla")
    console.log("5- Çıkış");
    
    r1.question("Seçiminiz. ",(secim)=>{
        if(secim==="1"){
            r1.question("Görevi Girin: ", (gorev)=>{

                gorevler.push({
                    ad: gorev,
                    tamamlandı: false
                });

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
                    const durum = gorev.tamamlandı ? "✓" : " ";
                    console.log((index+1) + "- [" + durum + "] " + gorev.ad);
                });
            }
            menuGoster();
        }
        else if(secim==="3"){
            if(gorevler.length===0){
                console.log("Silinecek Görev Yok");
                menuGoster();
                return;
            }

            console.log("\n=== Görevler ===");

            gorevler.forEach((gorev, index) => {
                const durum = gorev.tamamlandı ? "✓" : " ";
                console.log((index + 1) + "- [" + durum + "] " + gorev.ad);
            });
            r1.question("Silmek İstediğiniz Görev Numarası: ",(numara)=>{
                const index = Number(numara)-1;

                if(index >=0 && index< gorevler.length){
                    const silinenGörev = gorevler.splice(index,1);
                    console.log("Silinen Görev: " + silinenGörev[0].ad);
                }
                else{
                    console.log("Geçersiz görev numarası.");
                }

                menuGoster();

                    
            })
        }

        else if(secim==="4"){

            if(gorevler.length === 0){
                console.log("Tamamlanacak Görev Yok. ");
                menuGoster();
                return;
            }

            console.log("\n=== Görevler ===")

            gorevler.forEach((gorev,index)=>{
                const durum = gorev.tamamlandı ? "✓" : " ";
                console.log((index + 1) + "- [" + durum + "] " + gorev.ad);
            });

            r1.question("Tamamlanan Görev Numarası: ", (numara)=>{
                const index = Number(numara) -1;
                if(index>=0 && index < gorevler.length){
                    gorevler[index].tamamlandı = true;

                    console.log("Görev Tamamlandı: " + gorevler[index].ad);

                     
            }
                else{
                    console.log("Geçersiz Görev Numarası. ")
                }
                menuGoster();
            });
        }
        else if(secim==="5"){
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




