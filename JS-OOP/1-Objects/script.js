
const product = {

    //product1 = {ad: "Asım", aciklama: "Unexplained", Fiyat: "Pahabiçilemez", Stok: "!1"},

    title: "A1D",
    description: "Yeni bir drone prototipi",
    price: 10000,
    stock: 10,

    display: function() {
        return `Ürün başlıgı: ${this.product1.ad}, Ürün Açıklaması: ${this.product1.description}, Ürün Fiyatı: ${this.product1.price}`;
    },

    is_active: function() {
        return (this.stock > 0) ? "Stokta Var": "Stokta Yok";
    }
};

console.log(product.title)
console.log(product.description)
console.log(product.price)

console.log(product.display())

console.log(product.is_active())