import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Autoplay} from "swiper";
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimoniesComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  testimoniesList!: any[];

  constructor() { }

  ngOnInit(): void {

    this.testimoniesList = this.getTestimoniesList();
  }

  getTestimoniesList(){
    return [
      {
        image: "../../../assets/img/home/testimonies/luc_mbah_a_moute.jpg",
        message: "Au vu de ce que le Président Yves Tsala a réalisé à la ligue du centre, je suis persuadé que le basketball camerounais prend la route du développement... avec tout l'engouement que dégage sa candidature, il est évident que je le soutienne à 100%!",
        name: "Luc Mbah A Moute",
        role:"Ex joueur NBA"
      },
      {
        image: "../../assets/img/home/testimonies/gaston_kelman.jpg",
        message: "En cours ...",
        name: "Gaston Kelman",
        role:"Écrivain"
      },
      {
        image: "../../../assets/img/home/testimonies/brice_vounang.jpg",
        message: "J'apporte mon soutien total à la candidature du Président Yves Tsala. Les enjeux sont si importants qu'il faut que tout les acteurs se mobilisent ...",
        name: "Brice Vounang",
        role:"Ex international camerounais"
      },
      {
        image: "../../assets/img/home/testimonies/brice_bisseni.jpg",
        message: "Depuis quelques années déjà, nous voyons les résultas du Président Yves Tsala. Cette réussite contribue fortement à redorer l'image du basketball camerounais. Je vote favorablement pour son projet de développement et je soutiens sa candidature pour devenir le nouveau Président de la FECABASKET",
        name: "Brice Bisseni",
        role:"Ex  joueur professionnel"
      },
      {
        image: "../../assets/img/home/testimonies/sacha_giffa.jpg",
        message: "J'ai suivi avec interet l'annonce de la candidature, puis la campagne de Yves Tsala. Sa mission en tant que Président de la ligue du Centre, au sein de  laquelle il a abattu un travail colossal, m'a démontré la solidité de ses qualités, de la force de son implication et de la sincérité de ses convictions. Je soutiens totalement la candidature du Président Yves Tsala ; il m'a en effet laissé l'impression profonde d'un professionnel et responsable en '3D' Trois dimensions en effet essentielles dans le climat difficile et les enjeux actuels : Dynamisme - Dévouement - Diversité.",
        name: "Sacha Giffa",
        role:"Ex head coach Lions Cameroun"
      }
    ]
  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
    }
    else{
      this.swiper?.swiperRef.slidePrev(700);
    }
  }
}
