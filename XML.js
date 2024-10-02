//   https://fakestoreapi.com/products
function FetchingProds() {
    var elProds = document.querySelector(".products_class"), xhr = new XMLHttpRequest(), fragmento = document.createDocumentFragment();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState != 4)
            return console.log("Error de peticion");
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(xhr.responseText);
            //
            var JsonProds = JSON.parse(xhr.responseText);
            JsonProds.map(function (e) {
                var el = document.createElement("p");
                el.classList.add("prods_style");
                el.innerHTML = e.title + e.price + e.category;
                fragmento.appendChild(el);
            });
            elProds === null || elProds === void 0 ? void 0 : elProds.appendChild(fragmento);
        }
    });
    xhr.open("GET", "https://fakestoreapi.com/products");
    xhr.send();
}
FetchingProds();
