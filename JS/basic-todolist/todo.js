var one = document.getElementById("ww");

var two = document.getElementsByClassName("alternate");
for (var i=0; i<two.length; i++){
    two[i].style.color ="blue";
}

var list = document.querySelector("ul");
var product = document.querySelector("#veri");
var addition =  document.querySelector("#ekle");

addition.addEventListener("click", function(){
    var item = document.createElement("li");// createElement ile yeni bir listItem (li) oluşturuyoruz
    item.textContent = product.value;   // Input ile gelen veriyi "item" içerisine metin olarak giriyoruz.
    
    list.appendChild(item); // appendChild ile oluşturduğumuz elementi "list" isimli değişkenimizin içerisine ekliyoruz.
    product.value = ""; // Veri inputu içerisindeki metni siliyoruz.

});