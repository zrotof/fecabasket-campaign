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
        message: "Au vu de ce que le Président Yves Tsala a réalisé à la ligue du centre, je suis persuadé que le basketball camerounais prend la route du développement... avec tout l'engouement que dégage sa candidature, il est évident que je le soutien à 100%!",
        name: "Luc Mbah A Moute",
        role:"Ex joueur NBA"
      },
      {
        image: "../../assets/img/home/testimonies/gaston_kelman.jpg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Gaston Kelman",
        role:"Écrivain"
      },
      {
        image: "../../../assets/img/home/testimonies/brice_vounang.jpg",
        message: "Apporter mon soutien total à la candidature du Président Yves Tsala. Les enjeux sont si important qu'il faut que tout les acteurs se mobilisent ...",
        name: "Brice Vounang",
        role:"Ex joueur NBA"
      },
      {
        image: "../../assets/img/home/testimonies/brice_bisseni.jpg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Brice Bisseni",
        role:"Ex professionnel français"
      },
      {
        image: "../../assets/img/home/testimonies/sacha_giffa.jpg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
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
