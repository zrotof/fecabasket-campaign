import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

  allEvents(){
    console.log("Ok")
  }

  prevEvents(){
    console.log("Previous")
  }

  nextEvents(){
    console.log("Nest")
  }
}
