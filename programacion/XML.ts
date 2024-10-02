//  interface ProdsType {
//     id: number
//     title: string
//     price: number
//     description: string
//     category: string
//     image: string
//     rating: Rating
//   }
  
//    interface Rating {
//     rate: number
//     count: number
//   }
// //   https://fakestoreapi.com/products
// function FetchingProds( ) {

//     const elProds = document.querySelector(".products_class"),
//      xhr = new XMLHttpRequest(),
//      fragmento = document.createDocumentFragment()
//      xhr.addEventListener("readystatechange", () =>  {

//         if(xhr.readyState != 4 )  return console.log("Error de peticion")
            
//        if (xhr.status >= 200 && xhr.status < 400)  {
//         console.log(xhr.responseText)
//         //
//         const JsonProds = JSON.parse(xhr.responseText) as ProdsType[]
//             JsonProds.map(e => {
//             let el   = document.createElement("p")
//             el.classList.add("prods_style")
//             el.innerHTML = e.title + e.price + e.category
//             fragmento.appendChild(el)
//         })
        
//         elProds?.appendChild(fragmento)
//        }
//      })


//      xhr.open("GET", "https://fakestoreapi.com/products")
//      xhr.send()
// }
// FetchingProds()