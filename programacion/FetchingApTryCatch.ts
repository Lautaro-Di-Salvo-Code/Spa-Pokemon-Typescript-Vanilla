interface Poke {
    count: number
    next: string
    previous: any
    results: Result[]
    }
    
     interface Result {
    name: string
    url: string
    }
    
     interface PokeEntireApi {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
    }
    
     interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
    }
    
     interface Ability2 {
    name: string
    url: string
    }
    
     interface Cries {
    latest: string
    legacy: string
    }
    
     interface Form {
    name: string
    url: string
    }
    
     interface Index {
    game_index: number
    version: Version
    }
    
     interface Version {
    name: string
    url: string
    }
    
     interface HeldItem {
    item: Item
    version_details: VersionDetail[]
    }
    
     interface Item {
    name: string
    url: string
    }
    
     interface VersionDetail {
    rarity: number
    version: Version2
    }
    
     interface Version2 {
    name: string
    url: string
    }
    
     interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
    }
    
     interface Move {
    name: string
    url: string
    }
    
     interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
    }
    
     interface MoveLearnMethod {
    name: string
    url: string
    }
    
     interface VersionGroup {
    name: string
    url: string
    }
    
     interface Species {
    name: string
    url: string
    }
    
     interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
    }
    
     interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
    }
    
     interface DreamWorld {
    front_default: string
    front_female: any
    }
    
     interface Home {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface OfficialArtwork {
    front_default: string
    front_shiny: string
    }
    
     interface Showdown {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
    }
    
     interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
    }
    
     interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
    }
    
     interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
    }
    
     interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
    }
    
     interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
    }
    
     interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
    }
    
     interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
    }
    
     interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
    }
    
     interface Emerald {
    front_default: string
    front_shiny: string
    }
    
     interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    }
    
     interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    }
    
     interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
    }
    
     interface DiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface HeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface Platinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface GenerationV {
    "black-white": BlackWhite
    }
    
     interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface Animated {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
    }
    
     interface OmegarubyAlphasapphire {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface XY {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
    }
    
     interface Icons {
    front_default: string
    front_female: any
    }
    
     interface UltraSunUltraMoon {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    }
    
     interface GenerationViii {
    icons: Icons2
    }
    
     interface Icons2 {
    front_default: string
    front_female: any
    }
    
     interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
    }
    
     interface Stat2 {
    name: string
    url: string
    }
    
     interface Type {
    slot: number
    type: Type2
    }
    
     interface Type2 {
    name: string
    url: string
    }

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
                let resResults =  await reqResults.json() as PokeEntireApi
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
