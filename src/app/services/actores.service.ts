import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private actores: Actor[] = [
    {
      nombre: "Jason Momoa",
      biografia:
        "Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino: ser rey, y convertirse en Aquaman.",
      img: "assets/img/actores/jason-momoa.jpg",
      nombreCompleto: "Joseph Jason Namakaeha Momoa",
      nacimiento: "01/08/1979",
      nacionalidad: "Estadounidense",
      peliculas: [
        {
          titulo: "Aquaman",
          sinopsis:
            "Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino: ser rey, y convertirse en Aquaman.",
          img: "assets/img/peliculas/aquaman.jpg",
          estreno: "2018-12-21",
          productora: "DC"
        },
      ]
    },
    {
      nombre: "Gal Gadot",
      biografia:
        "Gal Gadot es una actriz y modelo israelí. Nació en Rosh Ha'ayin, Israel, en el seno de una familia judía asquenazí (de Polonia, Austria, Alemania y Checoslovaquia). Trabajó en las FDI durante dos años y ganó el título de Miss Israel en 2004. Gal comenzó a modelar a finales de los años 2000, y debutó en la cuarta película de la franquicia Fast and Furious, Fast & Furious (2009), como Gisele, una asociada del villano principal de la película. Su papel se amplió en las secuelas Fast Five (2011) y Fast & Furious 6 (2013), en las que su personaje estaba ligado románticamente a Han Seoul-Oh (Sung Kang). En las películas, Gal realizó sus propias acrobacias. También apareció en las películas 2010 Date Night (2010) y Knight and Day (2010). A principios de diciembre de 2013, Gal fue elegida Mujer Maravilla en el Universo Extendido de DC. Gal es un entusiasta de las motos, y posee una Ducati Monster-S2R 2006 negra. Está casada con Yaron Versano desde el 28 de septiembre de 2008. Tienen un hijo.",
      img: "assets/img/actores/gal-gadot.jpg",
      nombreCompleto: "Gal Gadot",
      nacimiento: "30/04/1985",
      nacionalidad: "Israelí",
      peliculas: [
        {
          titulo: "Wonder Woman",
          sinopsis:
            "Antes de ser Wonder Woman (Gal Gadot) era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano (Chris Pine), que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo [Primera Guerra Mundial]. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino",
          img: "assets/img/peliculas/wonder-woman.jpg",
          estreno: "2017-05-15",
          productora: "DC"
        },
      ]
    },
    {
      nombre: "Chris Evans",
      biografia:
        "Christopher Robert 'Chris' Evans (nacido el 13 de junio de 1981) es un actor y cineasta estadounidense. Evans es más conocido por sus papeles de superhéroe, como Capitán América en el Marvel Cinematic Universe, y como Human Torch en Fantastic Four. En 2015, debutó como director con el drama romántico Before We Go.",
      img: "assets/img/actores/chris-evans.jpg",
      nombreCompleto: "Christopher Robert Evans",
      nacimiento: "13/06/1981",
      nacionalidad: "Estadounidense",
      peliculas: [
        {
          titulo: "Avengers: Infinity War",
          sinopsis:
            "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
          img: "assets/img/peliculas/avengers-3.jpg",
          estreno: "2018-05-15",
          productora: "Marvel"
        },
        {
          titulo: "Capitan America",
          sinopsis:
            "Nacido durante la Gran Depresión (años 30), Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el General Chester Phillips le ofreció la oportunidad de participar en un experimento especial: la Operación Renacimiento. Tras administrarle el “Suero Super-Soldado” y bombardearlo con “vitarrayos”, el cuerpo de Steve se hace perfecto. A continuación, se sometió a un intensivo programa de entrenamiento físico y táctico. Tres meses después, le encomendaron su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como centinela de la libertad y líder de los Vengadores",
          img: "assets/img/peliculas/capitan-america-1.jpg",
          estreno: "2011-05-15",
          productora: "Marvel"
        },
      ]
    },

  ];

  constructor() { }

  getActores(): Actor[] {
    return this.actores;
  }
  
  getActor(idx: string) {
    return this.actores[idx];
  }

  buscarActores(termino: string):Actor[] {
    let actoressArr: Actor[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i< this.actores.length; i++) {
      let actor = this.actores[i];
  
      let nombre = actor.nombre.toLowerCase();
  
      if (nombre.indexOf(termino) >= 0) {
        actor.idx = i;
        actoressArr.push(actor);
      }
    }
    return actoressArr;
  }
}



export interface Actor {
  nombre: string;
  biografia: string;
  img: string;
  nombreCompleto: string;
  nacimiento: string;
  nacionalidad: string;
  peliculas?: Pelicula[];
  idx?:number;

}