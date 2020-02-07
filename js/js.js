const API_KEY = "944c2ef4a42045928d289ae98c2c1286";
let boardNoticias = document.getElementById("boardNoticia")
let btnCarregar = document.getElementById("carregar")

let config = {
    method: "GET"
}

btnCarregar.onclick = () => {

    let resposta = fetch('http://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta)=> {
        return resposta.json()
    })   
        .then((json) => {
        mostrarNaTela(json.articles)
    })
}

function mostrarNaTela (listaNoticias) {
    listaNoticias.forEach(noticia => {
    let novoCard = `<div class="col-md-4"> 
        <div class="card" style="width: 18rem;">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="Imagem da manchete">
                <div class="card-body text-justify">
                    <h4 class="card-title text-center">  
                    ${noticia.title}
                    </h4>
                    <p class="card-text"> ${noticia.description} </p>
                    <a href="${noticia.url}" class="btn btn-primary" style="background-color: rgb(54, 24, 82);">Ver artigo</a>
                </div>
            </div>
        </div>`
        boardNoticias.insertAdjacentHTML('beforeend', novoCard)
    });
}
