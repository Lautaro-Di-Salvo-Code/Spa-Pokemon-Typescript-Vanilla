import { Poke, PokeEntireApi } from "../types"

 const url = "https://pokeapi.co/api/v2/pokemon/"
  async function PokeFetchFun(endpoint) {
    const main = document.querySelector(".main_class")
    const links = document.querySelector(".links")
    const links2 = document.querySelector(".links2")
    // Validacion para el objeto principal
    try {
        if(main){
            main.innerHTML = `<p>Cargando...</p>`
        }
        // Api del ojbeto que contiene el array de los pokemons
        let req = await fetch(endpoint)
        let res = await req.json()  as Poke,
        // la plantilla para iterar la informacion
        template ="",
        // si existe mas consenido en una segunda pagina o anterior pagina
        nextPage = "",
        backPage = ""

        // if(!req.ok)throw { status: req.status, statusText: req.statusText}

        for(let i = 0; i < res.results.length; i++ ){
            // Segunda validacion para el array dentro del objeto principal
            try {
                let reqResults = await fetch(res.results.slice(0, 10)[i].url)
                // El array que contiene todos los pokemons
                let resResults: PokeEntireApi =  await reqResults.json() 
                console.log(resResults)
                // if(!reqResults.ok) throw { status: req.status, statusText: req.statusText}
                template += `
                <ul class="">
                    <div class="div_poke">
                        <b class="">${resResults.name}</b>
                        <img src="${resResults.sprites.front_default}" alt="">
                    <div/>
                </ul>
                `
                if(main) main.innerHTML = template 
                backPage =  res.previous ? `<a  href="${res.previous}">◀  </a>`:" <a >Nada atras<a/>"
                nextPage =  res.next ? `<a  href="${res.next}"> ▶</a>` : "<a>No hay mas para cargar <"
                if(links) links.innerHTML = `${backPage}  ${nextPage}  `
            } catch (error) {
                console.log("Error de peticion")
            }
        } 
    } catch (error) {
        console.log("Error de peticion al hacer get")
    }
    
    document.addEventListener("click", e => {
            if(e.target?.matches(".links a")){
                    e.preventDefault()
                    PokeFetchFun(e.target.getAttribute("href"))
                }
            })
        } 

        document.addEventListener("DOMContentLoaded", e => PokeFetchFun("https://pokeapi.co/api/v2/pokemon/"))
