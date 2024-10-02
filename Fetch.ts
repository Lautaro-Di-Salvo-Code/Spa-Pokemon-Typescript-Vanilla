interface ProdsType {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
   interface Rating {
    rate: number
    count: number
}
// https://fakestoreapi.com/products
function FetchingProdsFeth(){
    const el_prods = document.querySelector(".products_class"),
    fragmento = document.createDocumentFragment()
    fetch("https://fakestoreapi.com/products")
    .then(req => req.ok ? req.json(): Promise.reject(req))
    .then((res : ProdsType[])  => {
        res.map(e => {
            const el = document.createElement("p")
            const img = document.createElement("img")
            img.setAttribute("src",  `${e.image}`)
            el.innerHTML = `${e.category} - ${e.price} - ${e.title} `
            fragmento.appendChild(el)
        })
        el_prods?.appendChild(fragmento)
    } )
    
} 
FetchingProdsFeth()