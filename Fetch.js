// https://fakestoreapi.com/products
function FetchingProdsFeth() {
    var el_prods = document.querySelector(".products_class"), fragmento = document.createDocumentFragment();
    fetch("https://fakestoreapi.com/products")
        .then(function (req) { return req.ok ? req.json() : Promise.reject(req); })
        .then(function (res) {
        res.map(function (e) {
            var el = document.createElement("p");
            var img = document.createElement("img");
            img.setAttribute("src", "".concat(e.image));
            el.innerHTML = "".concat(e.category, " - ").concat(e.price, " - ").concat(e.title, " ");
            fragmento.appendChild(el);
        });
        el_prods === null || el_prods === void 0 ? void 0 : el_prods.appendChild(fragmento);
    });
}
FetchingProdsFeth();
