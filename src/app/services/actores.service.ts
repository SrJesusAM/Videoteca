import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas.service';
import { Serie } from './series.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private actores: Actor[] = [
    {
      idx: 0,
      nombre: "Jason Momoa",
      biografia:
        "Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino: ser rey, y convertirse en Aquaman.",
      img: "assets/img/actores/jason-momoa.jpg",
      nombreCompleto: "Joseph Jason Namakaeha Momoa",
      nacimiento: "01/08/1979",
      nacionalidad: "Estadounidense",
      peliculas: [
        {
          idx: 0,
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
      idx: 1,
      nombre: "Gal Gadot",
      biografia:
        "Gal Gadot es una actriz y modelo israelí. Nació en Rosh Ha'ayin, Israel, en el seno de una familia judía asquenazí (de Polonia, Austria, Alemania y Checoslovaquia). Trabajó en las FDI durante dos años y ganó el título de Miss Israel en 2004. Gal comenzó a modelar a finales de los años 2000, y debutó en la cuarta película de la franquicia Fast and Furious, Fast & Furious (2009), como Gisele, una asociada del villano principal de la película. Su papel se amplió en las secuelas Fast Five (2011) y Fast & Furious 6 (2013), en las que su personaje estaba ligado románticamente a Han Seoul-Oh (Sung Kang). En las películas, Gal realizó sus propias acrobacias. También apareció en las películas 2010 Date Night (2010) y Knight and Day (2010). A principios de diciembre de 2013, Gal fue elegida Mujer Maravilla en el Universo Extendido de DC. Gal es un entusiasta de las motos, y posee una Ducati Monster-S2R 2006 negra. Está casada con Yaron Versano desde el 28 de septiembre de 2008. Tienen un hijo.",
      img: "assets/img/actores/gal-gadot.jpg",
      nombreCompleto: "Gal Gadot",
      nacimiento: "30/04/1985",
      nacionalidad: "Israelí",
      peliculas: [
        {
          idx: 1,
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
      idx: 2,
      nombre: "Chris Evans",
      biografia:
        "Christopher Robert 'Chris' Evans (nacido el 13 de junio de 1981) es un actor y cineasta estadounidense. Evans es más conocido por sus papeles de superhéroe, como Capitán América en el Marvel Cinematic Universe, y como Human Torch en Fantastic Four. En 2015, debutó como director con el drama romántico Before We Go.",
      img: "assets/img/actores/chris-evans.jpg",
      nombreCompleto: "Christopher Robert Evans",
      nacimiento: "13/06/1981",
      nacionalidad: "Estadounidense",
      peliculas: [
        {
          idx: 2,
          titulo: "Avengers: Infinity War",
          sinopsis:
            "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
          img: "assets/img/peliculas/avengers-3.jpg",
          estreno: "2018-05-15",
          productora: "Marvel"
        },
        {
          idx: 3,
          titulo: "Capitan America",
          sinopsis:
            "Nacido durante la Gran Depresión (años 30), Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el General Chester Phillips le ofreció la oportunidad de participar en un experimento especial: la Operación Renacimiento. Tras administrarle el “Suero Super-Soldado” y bombardearlo con “vitarrayos”, el cuerpo de Steve se hace perfecto. A continuación, se sometió a un intensivo programa de entrenamiento físico y táctico. Tres meses después, le encomendaron su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como centinela de la libertad y líder de los Vengadores",
          img: "assets/img/peliculas/capitan-america-1.jpg",
          estreno: "2011-05-15",
          productora: "Marvel"
        },
      ]
    },
    {
      idx: 3,
      nombre: "Charlie Cox",
      biografia:
        "Charlie Thomas Cox es un actor británico famoso por interpretar a Matt Murdock en la serie producida por Netflix Marvel's Daredevil y Marvel's The Defenders",
      img: "assets/img/actores/charlie-cox.jpg",
      nombreCompleto: "Charlie Thomas Cox",
      nacimiento: "15/12/1982",
      nacionalidad: "Britanico",
      series: [
        {
          idx: 0,
          titulo: "Daredevil",
          sinopsis:
            "Matt Murdock, un abogado del barrio neoyorquino de Hell's Kitchen, que quedó ciego en un accidente que incrementó sus cuatro sentidos restantes y que lucha como un justiciero todas las noches contra el crimen bajo el sobrenombre de Daredevil,5​mientras que el descubrimiento de una conspiración del mundo criminal siendo dirigido por Wilson Fisk. En la segunda temporada, Murdock continúa equilibrando la vida como abogado y temerario, mientras se cruza con Frank Castle / Punisher, un vigilante con métodos mucho más letales, así como el regreso de una ex novia, Elektra Natchios. En la tercera temporada, después de que Fisk es liberado de la prisión, Murdock, quien ha estado desaparecido durante meses después de los eventos de Los Defensores, reaparece como un hombre quebrantado y debe decidir entre esconderse del mundo como abogado o abrazar su vida como un héroe vigilante.",
          img: "assets/img/series/daredevil.jpg",
          estreno: "2015-04-10",
          productora: "Marvel"
        },
      ]
    },
    {
      idx: 4,
      nombre: "Melissa Benoist",
      biografia:
        "Melissa Marie Benoist, conocida como Melissa Benoist, es una actriz y cantante estadounidense. Saltó a la fama en 2012 por su papel de Marley Rose en la serie de comedia musical Glee de FOX. Previamente a su popularidad, Melissa ha aparecido en varias series de televisión como Homeland, The Good Wife y Law & Order",
      img: "assets/img/actores/melissa-benoist.jpg",
      nombreCompleto: "Melissa Marie Benoist",
      nacimiento: "04/10/1988",
      nacionalidad: "Estadounidense",
      series: [
        {
          idx: 1,
          titulo: "Supergirl",
          sinopsis:
            "Tras once años en la Tierra, Kara Zor-El decide seguir los pasos de su célebre primo y aprovechar sus superpoderes para salvar a los ciudadanos de National City de los criminales alienígenas que amenazan la paz. Pero si quiere continuar con su vida humana, primero tendrá que crear una nueva identidad secreta.",
          img: "assets/img/series/supergirl.jpg",
          estreno: "2015-10-26",
          productora: "DC"
        },
        {
          idx: 2,
          titulo: "Arrow",
          sinopsis:
            "Tras haber desaparecido y haber sido dado por muerto en un violento naufragio, el multimillonario playboy Oliver Queen es rescatado con vida cinco años después en una isla del Pacífico. Una vez en casa, su madre, su hermana y su mejor amigo notan que la terrible experiencia sufrida lo ha cambiado profundamente. Él, por su parte, trata de ocultar la verdad sobre sí mismo, pero se propone enmendar los errores que cometió en el pasado. Con la ayuda de su fiel chófer y guardaespaldas, vuelve a su antigua vida de mujeriego despreocupado, pero, en secreto, crea el personaje de un justiciero encapuchado que lucha contra el mal.",
          img: "assets/img/series/arrow.jpg",
          estreno: "2012-04-10",
          productora: "DC"
        },
        {
          idx: 4,
          titulo: "The Flash",
          sinopsis:
            "Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal. Spin-off de Arrow",
          img: "assets/img/series/the-flash.jpg",
          estreno: "2014-04-10",
          productora: "DC"
        },
        {
          idx: 5,
          titulo: "Legends of Tomorrow",
          sinopsis:
            "Después de haber visto el futuro, el viajero del tiempo Rip Hunter tratará desesperadamente de evitarlo logrando la tarea de reunir a un dispar grupo de héroes y villanos para enfrentar una amenaza imparable, en la que no sólo la seguridad del planeta está en juego, sino el tiempo mismo... Serie spin-off de 'Arrow' y 'The Flash'.",
          img: "assets/img/series/legends-of-tomorrow.jpg",
          estreno: "2016-04-10",
          productora: "DC"
        },
      ]
    },
    {
      idx: 5,
      nombre: "Stephen Amell",
      biografia:
        "Stephen Adam Amell (Toronto, Canadá, 8 de mayo de 1981), es un actor y actor de voz canadiense, mayormente reconocido por interpretar a Oliver Queen / Green Arrow en la serie de televisión Arrow, y en las series derivadas de la misma, The Flash, Legends of Tomorrow y Vixen, así como por dar vida al personaje de Casey Jones en la película Teenage Mutant Ninja Turtles.",
      img: "assets/img/actores/stephen-amell.png",
      nombreCompleto: "Stephen Adam Amell",
      nacimiento: "08/05/1981",
      nacionalidad: "Canadiense",
      series: [
        {
          idx: 1,
          titulo: "Supergirl",
          sinopsis:
            "Tras once años en la Tierra, Kara Zor-El decide seguir los pasos de su célebre primo y aprovechar sus superpoderes para salvar a los ciudadanos de National City de los criminales alienígenas que amenazan la paz. Pero si quiere continuar con su vida humana, primero tendrá que crear una nueva identidad secreta.",
          img: "assets/img/series/supergirl.jpg",
          estreno: "2015-10-26",
          productora: "DC"
        },
        {
          idx: 2,
          titulo: "Arrow",
          sinopsis:
            "Tras haber desaparecido y haber sido dado por muerto en un violento naufragio, el multimillonario playboy Oliver Queen es rescatado con vida cinco años después en una isla del Pacífico. Una vez en casa, su madre, su hermana y su mejor amigo notan que la terrible experiencia sufrida lo ha cambiado profundamente. Él, por su parte, trata de ocultar la verdad sobre sí mismo, pero se propone enmendar los errores que cometió en el pasado. Con la ayuda de su fiel chófer y guardaespaldas, vuelve a su antigua vida de mujeriego despreocupado, pero, en secreto, crea el personaje de un justiciero encapuchado que lucha contra el mal.",
          img: "assets/img/series/arrow.jpg",
          estreno: "2012-04-10",
          productora: "DC"
        },
        {
          idx: 4,
          titulo: "The Flash",
          sinopsis:
            "Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal. Spin-off de Arrow",
          img: "assets/img/series/the-flash.jpg",
          estreno: "2014-04-10",
          productora: "DC"
        },
        {
          idx: 5,
          titulo: "Legends of Tomorrow",
          sinopsis:
            "Después de haber visto el futuro, el viajero del tiempo Rip Hunter tratará desesperadamente de evitarlo logrando la tarea de reunir a un dispar grupo de héroes y villanos para enfrentar una amenaza imparable, en la que no sólo la seguridad del planeta está en juego, sino el tiempo mismo... Serie spin-off de 'Arrow' y 'The Flash'.",
          img: "assets/img/series/legends-of-tomorrow.jpg",
          estreno: "2016-04-10",
          productora: "DC"
        },
      ]
    },
    {
      idx: 6,
      nombre: "Dani Rovira",
      biografia:
        "Daniel Rovira de Rivas es un actor, humorista y monologuista español, ganador del Premio Goya al mejor actor revelación 2015 por la película Ocho apellidos vascos, dirigida por Emilio Martínez-Lázaro.",
      img: "assets/img/actores/dani-rovira.jpg",
      nombreCompleto: "Daniel Rovira de Rivas ",
      nacimiento: "01/11/1980",
      nacionalidad: "Español",
      peliculas: [
        {
          idx: 4,
          titulo: "Taxi a Gibraltar",
          sinopsis:
                "León Lafuente. Un taxista español. Siempre enfadado. Acosado por las deudas. Jodido por lo rápido que cambian las cosas: su taxi, su barrio, su mundo, y el vientre de su mujer embarazada. Todo está cambiando para León. Diego Manfredi. Tan mentiroso como encantador. Tan guapo como embaucador. Acaba de salir de la cárcel. Nadie ha venido a buscarlo. Los años en la cárcel lo han dejado sin familia ni porvenir. Y con un montón de deudas. Sandra Sánchez. Joven. Y aburrida como una ostra. Huyendo de su pueblo donde se ha pasado media vida rodeada de olivos. Huyendo de sus amigas, todas casadas, y de su novio. Tres perdedores que emprenden un viaje delirante con la promesa de un cargamento de oro perdido en los túneles del lugar más raro y desconocido de la Península Ibérica: Gibraltar.",
          img: "assets/img/peliculas/taxi-a-gibraltar.jpg",
          estreno: "2019-02-15",
          productora: "Atresmedia"
        }
      ]
    },
    {
    idx: 7,
    nombre: "Brie Larson",
    biografia:
      "Brianne Sidonie Desaulniers, conocida como Brie Larson, es una actriz, directora, guionista y cantante estadounidense, ganadora, entre otros, del premio Óscar y del Globo de Oro a la mejor actriz de 2015. Larson fue educada en su casa antes de estudiar interpretación en el American Conservatory Theater",
    img: "assets/img/actores/brie-larson.jpg",
    nombreCompleto: "Brianne Sidonie Desaulniers",
    nacimiento: "01/10/1989",
    nacionalidad: "Estadounidense",
    peliculas: [
      {
        idx: 5,
        titulo: "Capitana Marvel",
        sinopsis:
          "La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, 'Capitana Marvel' es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.",
        img: "assets/img/peliculas/capitana-marvel.jpg",
        estreno: "2019-03-08",
        productora: "Marvel"
      }
    ]
    },
    {
      idx: 8,
      nombre: "Clark Gregg",
      biografia:
        "Robert Clark Gregg es un actor, guionista y director estadounidense. Es conocido sobre todo por su papel como Phil Coulson en las películas Iron Man, Iron Man 2, Thor y The Avengers y en la serie de televisión Agents of S.H.I.E.L.D., que se transmite por la cadena ABC",
      img: "assets/img/actores/clark-gregg.jpg",
      nombreCompleto: "Brianne Sidonie Desaulniers",
      nacimiento: "02/04/1962",
      nacionalidad: "Estadounidense",
      series: [
        {
          idx: 3,
          titulo: "Agentes de SHIELD",
          sinopsis:
            "El agente Phil Coulson reune a un pequeño grupo de agentes de S.H.I.E.L.D. para investigar casos nuevos y extraños. Cada caso pondrá a prueba al equipo, que tratará de descubrir nuevos superhéroes en todo el mundo para frenarles si fuera necesario. Spin-off de la película Los Vengadores, que de inicio justo al final de ésta.",
          img: "assets/img/series/agents-of-shield.jpg",
          estreno: "2013-04-10",
          productora: "Marvel",
        }
      ]
    }

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
  series?: Serie[];
  idx:number;
}