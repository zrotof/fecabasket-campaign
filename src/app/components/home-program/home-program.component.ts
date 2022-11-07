import { Component, OnInit } from '@angular/core';
import { faThLarge, faClock, faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-program',
  templateUrl: './home-program.component.html',
  styleUrls: ['./home-program.component.scss']
})
export class HomeProgramComponent implements OnInit {

  faClock = faClock;
  faAngleRight = faAngleRight;
  faThLarge = faThLarge;
  
  constructor() { }

  ngOnInit(): void {
  }

}
