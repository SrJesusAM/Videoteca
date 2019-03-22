import { Injectable } from '@angular/core';
import { Actor } from './actores.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private series: Serie[] = [
    {
      titulo: "Daredevil",
      sinopsis:
        "Matt Murdock, un abogado del barrio neoyorquino de Hell's Kitchen, que quedó ciego en un accidente que incrementó sus cuatro sentidos restantes y que lucha como un justiciero todas las noches contra el crimen bajo el sobrenombre de Daredevil,5​mientras que el descubrimiento de una conspiración del mundo criminal siendo dirigido por Wilson Fisk. En la segunda temporada, Murdock continúa equilibrando la vida como abogado y temerario, mientras se cruza con Frank Castle / Punisher, un vigilante con métodos mucho más letales, así como el regreso de una ex novia, Elektra Natchios. En la tercera temporada, después de que Fisk es liberado de la prisión, Murdock, quien ha estado desaparecido durante meses después de los eventos de Los Defensores, reaparece como un hombre quebrantado y debe decidir entre esconderse del mundo como abogado o abrazar su vida como un héroe vigilante.",
      img: "assets/img/series/daredevil.jpg",
      estreno: "2015-04-10",
      productora: "Marvel"
    },
    {
      titulo: "Supergirl",
      sinopsis:
        "Tras once años en la Tierra, Kara Zor-El decide seguir los pasos de su célebre primo y aprovechar sus superpoderes para salvar a los ciudadanos de National City de los criminales alienígenas que amenazan la paz. Pero si quiere continuar con su vida humana, primero tendrá que crear una nueva identidad secreta.",
      img: "assets/img/series/supergirl.jpg",
      estreno: "2015-10-26",
      productora: "DC"
    },
    {
      titulo: "Arrow",
      sinopsis:
        "Tras haber desaparecido y haber sido dado por muerto en un violento naufragio, el multimillonario playboy Oliver Queen es rescatado con vida cinco años después en una isla del Pacífico. Una vez en casa, su madre, su hermana y su mejor amigo notan que la terrible experiencia sufrida lo ha cambiado profundamente. Él, por su parte, trata de ocultar la verdad sobre sí mismo, pero se propone enmendar los errores que cometió en el pasado. Con la ayuda de su fiel chófer y guardaespaldas, vuelve a su antigua vida de mujeriego despreocupado, pero, en secreto, crea el personaje de un justiciero encapuchado que lucha contra el mal.",
      img: "assets/img/series/arrow.jpg",
      estreno: "2012-04-10",
      productora: "DC"
    },
    {
      titulo: "Agentes de SHIELD",
      sinopsis:
        "El agente Phil Coulson reune a un pequeño grupo de agentes de S.H.I.E.L.D. para investigar casos nuevos y extraños. Cada caso pondrá a prueba al equipo, que tratará de descubrir nuevos superhéroes en todo el mundo para frenarles si fuera necesario. Spin-off de la película Los Vengadores, que de inicio justo al final de ésta.",
      img: "assets/img/series/agents-of-shield.jpg",
      estreno: "2013-04-10",
      productora: "Marvel"
    },
    {
      titulo: "The Flash",
      sinopsis:
        "Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal. Spin-off de Arrow",
      img: "assets/img/series/the-flash.jpg",
      estreno: "2014-04-10",
      productora: "DC"
    },
    {
      titulo: "Legends of Tomorrow",
      sinopsis:
        "Después de haber visto el futuro, el viajero del tiempo Rip Hunter tratará desesperadamente de evitarlo logrando la tarea de reunir a un dispar grupo de héroes y villanos para enfrentar una amenaza imparable, en la que no sólo la seguridad del planeta está en juego, sino el tiempo mismo... Serie spin-off de 'Arrow' y 'The Flash'.",
      img: "assets/img/series/legends-of-tomorrow.jpg",
      estreno: "2016-04-10",
      productora: "DC"
    },
    
  ];

  constructor() { }

  getSeries(): Serie[] {
    return this.series;
  }
  
  getSerie(idx: string) {
    return this.series[idx];
  }
  
  buscarSeries(termino: string):Serie[] {
    let seriesArr: Serie[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i< this.series.length; i++) {
      let serie = this.series[i];
  
      let nombre = serie.titulo.toLowerCase();
  
      if (nombre.indexOf(termino) >= 0) {
        serie.idx = i;
        seriesArr.push(serie);
      }
    }
    return seriesArr;
  }

} 



export interface Serie {
  titulo: string;
  sinopsis: string;
  img: string;
  estreno: string;
  productora: string;
  idx?:number;

}