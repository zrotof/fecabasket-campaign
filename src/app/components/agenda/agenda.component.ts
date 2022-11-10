import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {


  events = [ 
    
    {
      title: "Assemblées Générales Électives",
      date: "27 Novembre 2022",
      hour: "à partir de 10h00",
      text: "Elections au bureau Fédéral. Le lieu exact étant à communiquer au plus tard une semaine avant tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/election.jpeg"
    },
    {
      title: "Assemblées Générales Électives",
      date: "19 Novembre 2022",
      hour: "à partir de 10h00",
      text: "Dans les ligues régionales du CENTRE et du NORD. Le lieux étant arrêté par le Président de la ligue par tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/election.jpeg"
    },
    {
      title: "Assemblées Générales Électives",
      date: "16 Novembre 2022",
      hour: "à partir de 10h00",
      text: "Dans les ligues régionales du SUD, de l'OUEST et du LITTORAL. Le lieux étant à communiquer aux acteurs de la ligue ainsi quau bureau Fédéral au par les Présidents au plus tard 48h avant par le Président de la Ligue par tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/election.jpeg"
    },
    {
      title: "Assemblées Générales Électives",
      date: "12 Novembre 2022",
      hour: "à partir de 10h00",
      text: "Dans les rédions de l'EST, de l'EXTREME-NORD, du SUD-OUEST, de l'ADAMAOUA et du NORD_OUEST. Le lieux étant communiqué aux acteurs de la ligue ainsi qu'au bureau Fédéral au plus tard 48h avant par le Président de la ligue.",
      link: "",
      image: "../../../assets/img/agenda/election.jpeg"
    },
    {
      title: "Assemblées Générales Électives",
      date: "10 Novembre 2022",
      hour: "à partir de 10h00",
      text: "Dans toutes les ligues d'Arrondissement existantes. Le lieux étant arrêté par les Présidents des ligues existantes et la Délégation d'Arrondissement le cas échéant. Information à relayer à l'instance supérieur au plus tard 48h avant la tenue.",
      image: "../../../assets/img/agenda/election.jpeg"
    },
    {
      title: "Conférence de presse pour l'annonce de candidature",
      date: "05 novembre 2022",
      hour: "10h00",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: "https://youtu.be/8F1pCiB3n5o",
      image: "../../../assets/img/agenda/campain-crtv.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initAllEvents();
  }

  initAllEvents(){

    
  }

  prevEvents(){
    console.log("Previous")
  }

  nextEvents(){
    console.log("Nest")
  }
}
