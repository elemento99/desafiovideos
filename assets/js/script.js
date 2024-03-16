

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

iffeDOM.funcionPublica("https://www.youtube.com/watch?v=4L_1COHkjuY", "musica")
iffeDOM.funcionPublica("https://www.tokyvideo.com/es/video/trailer-vose-requiem-el-exorcismo-de-micaela", "pelicula")
iffeDOM.funcionPublica("https://www.youtube.com/watch?v=i1eJMig5Ik4", "serie")


class Multimedia{
    #url;
    constructor(url){
        this.#url = url
    }
    get url(){
        return this.#url
    }
    set url(value) {
        this.#url = value
    }
    setInicio(tiempoEnSegundos) {
        this.#url += `?&t=${tiempoEnSegundos}`;
        return `Se ha establecido el tiempo de inicio en ${tiempoEnSegundos} segundos.`;
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


    setInicio(tiempoEnSegundos) {
        this.url += `;start=${tiempoEnSegundos}`;
        return `Se ha establecido el tiempo de inicio en ${tiempoEnSegundos} segundos.`;
    }
}

//instancias

const musica1 = new Reproductor ("https://www.youtube.com/embed/QCr9kHfditE?si=ZujueozIFck3bPKf", "musica")
const pelicula1 = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "pelicula")
const series1 = new Reproductor("https://www.youtube.com/embed/1iTMm7agE3M?si=3nkvt_Tmv1uibFGt", "series")

musica1.setInicio(100)
pelicula1.setInicio(5)
series1.setInicio(160)

musica1.playMultimedia()
pelicula1.playMultimedia()
series1.playMultimedia()