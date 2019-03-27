import { Injectable } from '@angular/core';
import { Actor } from './actores.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    {
      idx: 0,
      titulo: "Aquaman",
      sinopsis:
        "Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino: ser rey, y convertirse en Aquaman.",
      img: "assets/img/peliculas/aquaman.jpg",
      estreno: new Date(2018, 12, 21),
      productora: "DC",
      actores: [
        {
          idx: 0,
          nombre: "Jason Momoa",
          biografia:
            "Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino: ser rey, y convertirse en Aquaman.",
          img: "assets/img/actores/jason-momoa.jpg",
          nombreCompleto: "Joseph Jason Namakaeha Momoa",
          nacimiento: "01/08/1979",
          nacionalidad: "Estadounidense"
        }

      ]
    },
    {
      idx: 1,
      titulo: "Wonder Woman",
      sinopsis:
        "Antes de ser Wonder Woman (Gal Gadot) era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano (Chris Pine), que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo [Primera Guerra Mundial]. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino",
      img: "assets/img/peliculas/wonder-woman.jpg",
      estreno: new Date (2017, 5, 15),
      productora: "DC",
      actores: [
        {
      idx: 1,
      nombre: "Gal Gadot",
      biografia:
                  "Gal Gadot es una actriz y modelo israelí. Nació en Rosh Ha'ayin, Israel, en el seno de una familia judía asquenazí (de Polonia, Austria, Alemania y Checoslovaquia). Trabajó en las FDI durante dos años y ganó el título de Miss Israel en 2004. Gal comenzó a modelar a finales de los años 2000, y debutó en la cuarta película de la franquicia Fast and Furious, Fast & Furious (2009), como Gisele, una asociada del villano principal de la película. Su papel se amplió en las secuelas Fast Five (2011) y Fast & Furious 6 (2013), en las que su personaje estaba ligado románticamente a Han Seoul-Oh (Sung Kang). En las películas, Gal realizó sus propias acrobacias. También apareció en las películas 2010 Date Night (2010) y Knight and Day (2010). A principios de diciembre de 2013, Gal fue elegida Mujer Maravilla en el Universo Extendido de DC. Gal es un entusiasta de las motos, y posee una Ducati Monster-S2R 2006 negra. Está casada con Yaron Versano desde el 28 de septiembre de 2008. Tienen un hijo.",
      img: "assets/img/actores/gal-gadot.jpg",
      nombreCompleto: "Gal Gadot",
      nacimiento: "30/04/1985",
      nacionalidad: "Israelí",
        }
      ]
    },
    {
      idx: 2,
      titulo: "Avengers: Infinity War",
      sinopsis:
        "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
      img: "assets/img/peliculas/avengers-3.jpg",
      estreno: new Date (2018, 5, 15),
      productora: "Marvel",
      actores: [
        {
          idx: 2,
          nombre: "Chris Evans",
          biografia:
            "Christopher Robert 'Chris' Evans (nacido el 13 de junio de 1981) es un actor y cineasta estadounidense. Evans es más conocido por sus papeles de superhéroe, como Capitán América en el Marvel Cinematic Universe, y como Human Torch en Fantastic Four. En 2015, debutó como director con el drama romántico Before We Go.",
          img: "assets/img/actores/chris-evans.jpg",
          nombreCompleto: "Christopher Robert Evans",
          nacimiento: "13/06/1981",
          nacionalidad: "Estadounidense"
        }

      ]
    },
    {
      idx: 3,
      titulo: "Capitan America",
      sinopsis:
        "Nacido durante la Gran Depresión (años 30), Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el General Chester Phillips le ofreció la oportunidad de participar en un experimento especial: la Operación Renacimiento. Tras administrarle el “Suero Super-Soldado” y bombardearlo con “vitarrayos”, el cuerpo de Steve se hace perfecto. A continuación, se sometió a un intensivo programa de entrenamiento físico y táctico. Tres meses después, le encomendaron su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como centinela de la libertad y líder de los Vengadores",
      img: "assets/img/peliculas/capitan-america-1.jpg",
      estreno: new Date(2011, 5,15),
      productora: "Marvel",
      actores: [
        {
          idx: 2,
          nombre: "Chris Evans",
          biografia:
            "Christopher Robert 'Chris' Evans (nacido el 13 de junio de 1981) es un actor y cineasta estadounidense. Evans es más conocido por sus papeles de superhéroe, como Capitán América en el Marvel Cinematic Universe, y como Human Torch en Fantastic Four. En 2015, debutó como director con el drama romántico Before We Go.",
          img: "assets/img/actores/chris-evans.jpg",
          nombreCompleto: "Christopher Robert Evans",
          nacimiento: "13/06/1981",
          nacionalidad: "Estadounidense"
        }

      ]
    },
    {
      idx: 4,
      titulo: "Taxi a Gibraltar",
      sinopsis:
            "León Lafuente. Un taxista español. Siempre enfadado. Acosado por las deudas. Jodido por lo rápido que cambian las cosas: su taxi, su barrio, su mundo, y el vientre de su mujer embarazada. Todo está cambiando para León. Diego Manfredi. Tan mentiroso como encantador. Tan guapo como embaucador. Acaba de salir de la cárcel. Nadie ha venido a buscarlo. Los años en la cárcel lo han dejado sin familia ni porvenir. Y con un montón de deudas. Sandra Sánchez. Joven. Y aburrida como una ostra. Huyendo de su pueblo donde se ha pasado media vida rodeada de olivos. Huyendo de sus amigas, todas casadas, y de su novio. Tres perdedores que emprenden un viaje delirante con la promesa de un cargamento de oro perdido en los túneles del lugar más raro y desconocido de la Península Ibérica: Gibraltar.",
      img: "assets/img/peliculas/taxi-a-gibraltar.jpg",
      estreno: new Date (2019, 2, 15),
      productora: "Atresmedia",
      actores: [
        {
          idx: 6,
          nombre: "Dani Rovira",
          biografia:
            "Daniel Rovira de Rivas es un actor, humorista y monologuista español, ganador del Premio Goya al mejor actor revelación 2015 por la película Ocho apellidos vascos, dirigida por Emilio Martínez-Lázaro.",
          img: "assets/img/actores/dani-rovira.jpg",
          nombreCompleto: "Daniel Rovira de Rivas ",
          nacimiento: "01/11/1980",
          nacionalidad: "Español"
        }
      ]
    },
    {
      idx: 5,
      titulo: "Capitana Marvel",
      sinopsis:
        "La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, 'Capitana Marvel' es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.",
      img: "assets/img/peliculas/capitana-marvel.jpg",
      estreno: new Date(2019, 3, 8),
      productora: "Marvel",
      actores: [
        {
          idx: 7,
          nombre: "Brie Larson",
          biografia:
            "Brianne Sidonie Desaulniers, conocida como Brie Larson, es una actriz, directora, guionista y cantante estadounidense, ganadora, entre otros, del premio Óscar y del Globo de Oro a la mejor actriz de 2015. Larson fue educada en su casa antes de estudiar interpretación en el American Conservatory Theater",
          img: "assets/img/actores/brie-larson.jpg",
          nombreCompleto: "Brianne Sidonie Desaulniers",
          nacimiento: "01/10/1989",
          nacionalidad: "Estadounidense",
        }
      ]
    },
  ];


  constructor() { }

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }
  
  getPelicula(idx: string) {
    return this.peliculas[idx];
  }
  
  buscarPeliculas(termino: string):Pelicula[] {
    let peliculasArr: Pelicula[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i< this.peliculas.length; i++) {
      let pelicula = this.peliculas[i];
  
      let nombre = pelicula.titulo.toLowerCase();
  
      if (nombre.indexOf(termino) >= 0) {
        pelicula.idx = i;
        peliculasArr.push(pelicula);
      }
    }
    return peliculasArr;
  }

} 


export interface Pelicula {
  titulo: string;
  sinopsis: string;
  img: string;
  estreno: Date;
  productora: string;
  actores?: Actor[];
  idx:number;

}