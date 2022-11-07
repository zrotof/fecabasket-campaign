import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class DonateComponent implements OnInit {

  items!: MenuItem[];
  activeIndex: number = 1;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.initMenus();
  }

  initMenus(){
    this.items = [{
      label: 'Mon soutien'
  },
  {
      label: 'Mes Informations'
  },
  {
      label: 'Paiement'
  },
  {
      label: 'Validation'
  }
];
  }

}
