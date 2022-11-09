import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-program-short',
  templateUrl: './program-short.component.html',
  styleUrls: ['./program-short.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgramShortComponent implements OnInit {

  programs!: any[] ;
  activedMenuIndex: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.programs = this.initProgram();
  }

  initProgram(){
    return [
      {
        label: "Ressources",
        data: {
          images: [
            {source: "../../../../assets/img/home/program/ressource/image-one.png"},
            {source: "../../../../assets/img/home/program/ressource/image-two.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Infrastructures",
        data: {
          images: [
            {source: "../../../assets/img/home/program/infrastructure/image-one.png"},
            {source: "../../../assets/img/home/program/infrastructure/image-two.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Commisions et Missions",
        data: {
          images: [
            {source: "../../../assets/img/home/program/commission_mission/image-one.png"},
            {source: "../../../assets/img/home/program/commission_mission/image-two.png"},
            {source: "../../../assets/img/home/program/commission_mission/image-three.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Championnats",
        data: {
          images: [
            {source: "../../../assets/img/home/program/championnat_nationaux_regionaux/image-one.png"},
            {source: "../../../assets/img/home/program/championnat_nationaux_regionaux/image-two.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Marketing",
        data: {
          images: [
            {source: "../../../assets/img/home/program/marketing/image-one.png"},
            {source: "../../../assets/img/home/program/marketing/image-two.png"},
            {source: "../../../assets/img/home/program/marketing/image-three.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Gouvernance",
        data: {
          images: [
            {source: "../../../assets/img/home/program/gouvernance/image-one.png"},
            {source: "../../../assets/img/home/program/gouvernance/image-two.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Formation",
        data: {
          images: [
            {source: "../../../assets/img/home/program/formation/image-one.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          ]
        }
      },
      {
        label: "Direction Technique Nationale",
        data: {
          images: [
            {source: "../../../assets/img/home/program/direction_technique_nationale/image-one.png"},
            {source: "../../../assets/img/home/program/direction_technique_nationale/image-two.png"},
            {source: "../../../assets/img/home/program/direction_technique_nationale/image-three.png"},
            {source: "../../../assets/img/home/program/direction_technique_nationale/image-four.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Communication",
        data: {
          images: [
            {source: "../../../assets/img/home/program/communication/image-two.png"},
            {source: "../../../assets/img/home/program/communication/image-three.png"},
            {source: "../../../assets/img/home/program/communication/image-four.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      },
      {
        label: "Collaboration Internationale",
        data: {
          images: [
            {source: "../../../assets/img/home/program/collaboration_internationale/image-one.png"}
          ],
          texts: [
            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facilis nobis minima doloribus reprehenderit quaerat voluptatum sequi, maiores cumque omnis aliquam natus facere corrupti vero atque, error fugit expedita."},
            {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel maiores expedita sequi error facere ratione minus, sit laborum quaerat aliquid enim minima! Quis quasi, temporibus omnis sapiente pariatur incidunt. Obcaecati, eos officiis! In maiores magni aliquam exercitationem corporis, officia voluptatem quia ab, molestias ex maxime aperiam esse explicabo dolorem delectus sequi minima debitis nobis nulla velit tempora! Impedit, minima."}
          
          ]
        }
      }
    ]
  }
}
