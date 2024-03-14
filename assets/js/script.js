// const musica = document.querySelector("#musica")
// const pelicula = document.querySelector("#peliculas")
// const serie = document.querySelector("#series")

const iffeDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()

// iffeDOM.funcionPublica("https://www.youtube.com/watch?v=T8JdWs3jtcs&list=RDT8JdWs3jtcs&start_radio=1", "musica")
// iffeDOM.funcionPublica("https://www.tokyvideo.com/es/video/trailer-vose-requiem-el-exorcismo-de-micaela", "pelicula")
// iffeDOM.funcionPublica("https://www.youtube.com/watch?v=i1eJMig5Ik4", "serie")


class Multimedia{
    #url;
    constructor(url){
        this.#url = url
    }
    get url(){
        return this.#url
    }
    
    setInicio(tiempoEnSegundos){
        return "Método para realizar cambio en la URL de video"
    }
}


class Reproductor extends Multimedia{
    _id;
    constructor(url, id){
        super(url)
        this._id = id
    }
    
    playMultimedia(){
        iffeDOM.funcionPublica(this.url, this._id)
    }
    setInicio(tiempoEnSegundos){
        return `Duración de video en: ${tiempoEnSegundos}`
    }
}

//instancias

const musica1 = new Reproductor ("https://www.tokyvideo.com/es/video/trailer-vose-requiem-el-exorcismo-de-micaela", "musica")
const pelicula1 = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "pelicula")
const series1 = new Reproductor("https://www.youtube.com/watch?v=i1eJMig5Ik4", "series")

musica1.playMultimedia()
pelicula1.playMultimedia()
series1.playMultimedia()

musica1.setInicio(10)
pelicula1.setInicio(5)
series1.setInicio(160)