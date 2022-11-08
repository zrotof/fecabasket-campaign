import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-long',
  templateUrl: './program-long.component.html',
  styleUrls: ['./program-long.component.scss']
})
export class ProgramLongComponent implements OnInit {

  menus!: any[] ;
  activedMenuIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.menus = this.initMenus();
  }

  initMenus(){
    return [
      {
        label: "Ressources",
        opened: true,
        index: 0
      },
      {
        label: "Infrastructures",
        opened: false,
        index: 1
      },
      {
        label: "Commisions et Missions",
        opened: false,
        index: 2
      },
      {
        label: "Championnats",
        opened: false,
        index: 3
      },
      {
        label: "Marketing",
        opened: false,
        index: 4
      },
      {
        label: "Gouvernance",
        opened: false,
        index: 5
      },
      {
        label: "Formation",
        opened: false,
        index: 6
      },
      {
        label: "Direction Technique Nationale",
        opened: false,
        index: 7
      },
      {
        label: "Communication",
        opened: false,
        index: 8
      },
      {
        label: "Collaboration Internationale",
        opened: false,
        index: 9
      }
    ]
  }

  onActivateMenu(index: number){
    this.menus.map(menu =>{
      menu.opened = false
    })

    this.menus[index].opened = true;
    this.activedMenuIndex = index;
  }

}
