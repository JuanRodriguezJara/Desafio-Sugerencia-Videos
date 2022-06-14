const suggestionVideo = (() => {
    let variableVideoPrivado = (url, id) => {
        document.getElementById(id).setAttribute("src", url);
    };
    return {
        funcionVideoPublica: (url, id) => {
            variableVideoPrivado(url, id);
        },
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    };
    get url() {
        return this.getUrl();
    };
    setInicio = () => {
        return console.log("Este metodo es para realizar un cambio en la Url del Video");
    };
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    };
    playMultimedia() {}
    setInicio = (time) => {
        let inicio = document.getElementById(this.id);
        return inicio.setAttribute("src", `${this.getUrl()}?start=${time}`);
        };
    }; 


const musica = new Reproductor("https://www.youtube.com/embed/1TwI2zCekIY", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/6uYNiZQqwSc", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/buKOsAudZkA", "series");
musica.playMultimedia(musica.getUrl(), musica.id);
pelicula.playMultimedia(pelicula.getUrl(), pelicula.id);
serie.playMultimedia(serie.getUrl(), serie.id);
musica.setInicio(50)
pelicula.setInicio(1900)
serie.setInicio(35)