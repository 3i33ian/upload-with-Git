const randomizeFunction = function (){

 return Math.floor(Math.random() * 4)
}

const parteDelCorpo =["cranio","sedere","coccige","tallone"]
const animale =["opossum","tricheco","macaco","ghiro"]
const colore = ["lapislazzuli","rododendro","verde vomito","rosa shockking"]


function getPhrase(){
  let random1 =  randomizeFunction();
  let random2 =  randomizeFunction();
  let random3 =  randomizeFunction();
return `Hai il ${parteDelCorpo[random1]} grande come un ${animale[random2]} di colore ${colore[random3]}`
}


console.log(getPhrase())
