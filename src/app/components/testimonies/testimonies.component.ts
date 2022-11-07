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
        image: "../../assets/img/home/candidates/image.jpeg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Mbah Mouté",
        role:"Ex-joueur NBA"
      },
      {
        image: "../../assets/img/home/candidates/image.jpeg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Martin Paul Samba",
        role:"Ex-joueur NBA"
      },
      {
        image: "../../assets/img/home/candidates/image.jpeg",
        message: " pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Patrick boma",
        role:"Ex-joueur NBA"
      },
      {
        image: "../../assets/img/home/candidates/image.jpeg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Roger Mila",
        role:"Ex-joueur NBA"
      },
      {
        image: "../../assets/img/home/candidates/image.jpeg",
        message: "Je suis un témoignage. Cliquez pour me modifier et valoriser votre activité. Vos clients peuvent ici partager leur expérience.Vos clients peuvent ici partager leur expérience. Vos clients peuvent ici partager leur expérience.",
        name: "Janet Jackson",
        role:"Ex-joueur NBA"
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
