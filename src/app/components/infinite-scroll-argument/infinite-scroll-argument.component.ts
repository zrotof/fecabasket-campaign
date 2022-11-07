import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Autoplay} from "swiper";
SwiperCore.use([Autoplay]);

import { faPlane, faBed, faCarSide, faHome, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { OfficeMemberService } from 'src/app/services/office-member/office-member.service';

import { OfficeMemberDetailsComponent } from '../office-member-details/office-member-details.component';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-infinite-scroll-argument',
  templateUrl: './infinite-scroll-argument.component.html',
  styleUrls: ['./infinite-scroll-argument.component.scss'],
  providers:[MessageService, DialogService],
  encapsulation: ViewEncapsulation.None
})
export class InfiniteScrollArgumentComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  
  faPlane = faPlane;
  faBed = faBed;
  faHome = faHome;
  faCarSide = faCarSide;
  faCubes = faCubes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGlobeAfrica = faGlobeAfrica;
  faAddressCard = faAddressCard;

  officeMemberList! : any[] ;

  ref! : DynamicDialogRef;
  constructor(
    private officeMemberService: OfficeMemberService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initArgument();
    this.getOfficeMemberList();
  }

  initArgument(){
    this.officeMemberList = this.officeMemberService.officeMembers;
  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
    }
    else{
      this.swiper?.swiperRef.slidePrev(700);
    }
  }

  getOfficeMemberList(){
    this.officeMemberList = this.officeMemberService.getOfficeMemberDataList()
  }


  showOfficeManagerDetails(param: number) {

    const officeMemberData = this.officeMemberService.getOfficeMemberData(param);

    if(typeof officeMemberData !== "undefined"){
        this.ref = this.dialogService.open(OfficeMemberDetailsComponent, {
          data: {
            officeMemberData: officeMemberData
          },
          baseZIndex: 10000
        });
    }
    else{
      this.messageService.add({severity:'warn', detail: "Projet en phase d'initialisation. Veuillez re-essayer plus tard."});
    }
        
}
}
