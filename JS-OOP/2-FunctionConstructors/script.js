//Constructors
//const product = {
//
//    //product1 = {ad: "Asım", aciklama: "Unexplained", Fiyat: "Pahabiçilemez", Stok: "!1"},
//
//    title: "A1D",
//    description: "Yeni bir drone prototipi",
//    price: 10000,
//    stock: 10,
//
//    display: function() {
//        return `Ürün başlıgı: ${this.product1.ad}, Ürün Açıklaması: ${this.description}, Ürün Fiyatı: ${this.price}`;
//    },
//
//    is_active: function() {
//        return (this.stock > 0) ? "Stokta Var": "Stokta Yok";
//    }
//};

function Product(title, description, price, stock) {
    //Properties
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    //Methods
    this.display = function() {
        return `Ürün başlıgı: ${this.title}, Ürün Açıklaması: ${this.description}, Ürün Fiyatı: ${this.price}`;
    },

    this.is_active = function() {
        return (this.stock > 0) ? "Stokta Var": "Stokta Yok";
    }
}

const product1 = new Product("Samsung S25","İyi Telefon", 60000, 1000);
const product2 = new Product("Samsung S26","İyi Telefon", 70000, 100);
const product3 = new Product("Samsung S27","İyi Telefon", 80000, 10);

console.log(product1.title, product1.description, product1.price, product1.stock)
console.log(product2.title, product2.description, product2.price, product2.stock)
console.log(product3.title, product3.description, product3.price, product3.stock)

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());