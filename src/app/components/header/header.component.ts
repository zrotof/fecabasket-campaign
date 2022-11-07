import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGlobe,faCaretDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faGlobe=faGlobe;
  faAngleDown=faAngleDown;

  visibleSidebarMenu: boolean = false;

  isBurgerMenuClicked: boolean = false;
  isFirstNavigation: boolean = true;

  isNotYetImplemented: boolean = false;

  showActMenu = false; 

  constructor( 
    private router: Router
   ) {
    
   
  }

   ngOnInit(): void {

  }


  //Function used to hide or show services bloc when mouse overing the bloc
  showHideServices(): void{
    var serviceBottom = <HTMLElement>document.querySelector(".services-bloc ul");
    serviceBottom.classList.toggle("show-services-bottom");
  }

  //Handling click on burger menu
  onBurgerMenu(){
    let navSmallScreen = <HTMLElement>document.querySelector('.header-right');
    let inputstatus = <HTMLInputElement>document.querySelector('.burger input');
    let header = <HTMLElement>document.querySelector('header');

    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      
      navSmallScreen.classList.toggle("toggle-nav")

      if (window.pageYOffset <= header?.clientHeight) {
        header.classList.add('navbar-background-on-scroll');
      }
      this.isBurgerMenuClicked = true;

    }
    else{
      navSmallScreen.classList.toggle("toggle-nav");
      this.isBurgerMenuClicked = false;

      if(!this.router.url.includes('tourisme/')){
        if(window.pageYOffset <= header?.clientHeight) {
          header.classList.remove('navbar-background-on-scroll');
        }
      }

    
  }}}