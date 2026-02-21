function Player(ad) {
    this.Oyuncu_adi = ad;
    this.Score = 0;

    this.start = function() {
        console.log(`${this.Oyuncu_adi} Oyuna Başladi.`);
    }

    this.stop = function() {
        console.log(`${this.Oyuncu_adi} Oyundan Ayrıldı.`);
    }

    this.pause = function() {
        console.log(`${this.Oyuncu_adi} Oyunu Durdurdu..`);
    }

    this.add_score = function(point) {
        console.log(`${this.Oyuncu_adi} Adlı Oyuncuya ${score} puan eklendi.`);
        this.Score += point;
    }

    this.show_score = function() {
        console.log(`${this.Oyuncu_adi} Adlı Oyuncunun ${this.Score} puanı var.`);
    }
}

const oyuncu1 = new Player("Asım");
const oyuncu2 = new Player("Ali");
const oyuncu3 = new Player("Hasan");

oyuncu1.start();
oyuncu2.pause();
oyuncu3.stop();

oyuncu1.add_score(50);
oyuncu2.add_score(60);
oyuncu1.add_score(30);
oyuncu2.add_score(45);
oyuncu3.add_score(60);
oyuncu3.add_score(20);
oyuncu1.add_score(50);

oyuncu1.show_score();
oyuncu2.show_score();
oyuncu3.show_score();