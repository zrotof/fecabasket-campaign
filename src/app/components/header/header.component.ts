import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGlobe,faCaretDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  faGlobe=faGlobe;
  faAngleDown=faAngleDown;

  visibleSidebarMenu: boolean = false;

  isBurgerMenuClicked: boolean = false;
  isFirstNavigation: boolean = true;

  isNotYetImplemented: boolean = false;

  showActMenu = false; 
  previousUrl: any;

  visibleSidebar!: boolean;

  constructor( 
    private router: Router
   ) {
    
   
  }

   ngOnInit(): void {
    this.routingEvent();
  }


  routingEvent(){
    this.router.events.subscribe( event =>{

      if(event instanceof NavigationEnd){

        if(this.isFirstNavigation){
          this.isFirstNavigation = false;
          this.previousUrl = event.url ;
          this.visibleSidebar = false;
          return ;
        }

        else{
          if(this.previousUrl == event.url){
            return ;
          }
          this.visibleSidebar = false;
        }
      }
  

        
        
    })
  }

}