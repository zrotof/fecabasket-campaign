import { Component, OnInit } from '@angular/core';
import { faThLarge, faClock, faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss']
})
export class ProgramSummaryComponent implements OnInit {

  faClock = faClock;
  faAngleRight = faAngleRight;
  faThLarge = faThLarge;

  constructor() { }

  ngOnInit(): void {
  }

}
