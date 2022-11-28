import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  providers:[MessageService, DialogService],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {

  events: any[] = [ 
    
    {
      title: "Assemblées Générales Électives",
      date: {
        normal:"28 Novembre 2022",
        programatic: "2022-11-28"
      },
      hour: "à partir de 10h00",
      text: "Dans les ligues régionales du SUD et de l'EST. Le lieux étant arrêté par le Président de la ligue par tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/ag-28-11.jpeg",
      source: ""
    },{
      title: "Assemblées Générales Électives",
      date: {
        normal:"26 Novembre 2022",
        programatic: "2022-11-26"
      },
      hour: "à partir de 10h00",
      text: "Elections au bureau Fédéral. Le lieu exact étant à communiquer au plus tard une semaine avant tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/ag-26-11.jpeg",
      source: ""
    },
    {
      title: "La zone extrême ne sera plus abandonnée ",
      date: {
        normal:"24 novembre 2022",
        programatic: "2022-11-24"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: '',
      image: "../../../assets/img/agenda/extreme-nord.jpeg",
      source: ""
    },
    {
      title: "Face au manque de soutien à Garoua, le Président Yves Tsala va apporter des solution",
      date: {
        normal:"23 novembre 2022",
        programatic: "2022-11-23"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/NA5MA7lNpzo',
      image: "../../../assets/img/agenda/garoua.jpeg",
      source: "youtube"
    },
    {
      title: "Les jeunes de l'Adamaoua veulent imposer leur Président à la Fecabasket",
      date: {
        normal:"22 novembre 2022",
        programatic: "2022-11-22"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/8F1pCiB3n5o',
      image: "../../../assets/img/agenda/adamaoua.jpeg",
      source: "youtube"
    },
    {
      title: "Une autre dynamique est encore possible à Bertoua",
      date: {
        normal:"22 novembre 2022",
        programatic: "2022-11-22"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: '',
      image: "../../../assets/img/agenda/bertoua.jpeg",
      source: "youtube"
    },
    {
      title: "Présentation du programme",
      date: {
        normal:"20 novembre 2022",
        programatic: "2022-11-20"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://fb.watch/h0-f7U8mnI/',
      image: "../../../assets/img/agenda/presentation-programme.jpeg",
      source: "facebook"
    },
    {
      title: "Assemblées Générales Électives",
      date: {
        normal:"19 Novembre 2022",
        programatic: "2022-11-19"
      },
      hour: "à partir de 10h00",
      text: "Dans les ligues régionales du CENTRE et du NORD. Le lieux étant arrêté par le Président de la ligue par tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/ag-19-11.jpeg",
      source: ""
    },
    {
      title: "Propulsons nos catégories jeunes",
      date: {
        normal:"18 novembre 2022",
        programatic: "2022-11-18"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/ve7xPW1nVKQ',
      image: "../../../assets/img/agenda/young-league.jpeg",
      source: "youtube"
    },
    {
      title: "La DTN vue par votre Président",
      date: {
        normal:"17 novembre 2022",
        programatic: "2022-11-17"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/os1pOs_lNd4',
      image: "../../../assets/img/agenda/campain-crtv.png",
      source: "youtube"
    },
    {
      title: "Trouvons de nouvelles ressources financières",
      date: {
        normal:"17 novembre 2022",
        programatic: "2022-11-17"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/CpT0H9fGXuo',
      image: "../../../assets/img/agenda/campain-crtv.png",
      source: "youtube"
    },
    {
      title: "Assemblées Générales Électives",
      date: {
        normal:"16 Novembre 2022",
        programatic: "2022-11-16"
      },
      hour: "à partir de 10h00",
      text: "Dans les ligues régionales du SUD, de l'OUEST et du LITTORAL. Le lieux étant à communiquer aux acteurs de la ligue ainsi quau bureau Fédéral au par les Présidents au plus tard 48h avant par le Président de la Ligue par tout moyen laissant trace.",
      link: "",
      image: "../../../assets/img/agenda/election.jpeg",
      source: ""
    },
    {
      title: "Yves Tsala se présente à tous les élécteurs",
      date: {
        normal:"15 novembre 2022",
        programatic: "2022-11-15"
      },
      hour: "",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/SPq1VcEd4Zo',
      image: "../../../assets/img/agenda/campain-crtv.png",
      source: "youtube"
    },
    {
      title: "Conférence de presse pour l'annonce de candidature",
      date: {
        normal:"05 novembre 2022",
        programatic: "2022-11-05"
      },
      hour: "à 10h00",
      text: "Le 05 novembre 2022 à 10h00, Yves Tsala prononçait une allocution suite au dépôt de sa candidature aux élections du bureau national fédéral de la fecabasket. Il s’est exprimé dans la salle VIP au Palais des Sports de Yaoundé, puis devant la foule présente devant les lieux.",
      link: 'https://www.youtube.com/embed/8F1pCiB3n5o',
      image: "../../../assets/img/agenda/campain-crtv.png",
      source: "youtube"
    }
  ];

  allEvents!: any[];
  pastEvents!: any[];
  nextEvents!: any[];

  ref! : DynamicDialogRef;

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initAllEvents();
    this.initPastEvents();
    this.initNextEvents();
  }

  initAllEvents(){
    this.allEvents =  this.events;
  }

  getCurrentDateInTimeStamp(date: string){
    const dateSplited = date.split("-");
    const dateConstructed = new Date( +dateSplited[0], (+dateSplited[1] - 1), +dateSplited[2]);
    return dateConstructed.getTime();
  }

  initPastEvents(){
    this.pastEvents = this.allEvents.filter( event => {
      if(this.getCurrentDateInTimeStamp(event.date.programatic) < (new Date()).getTime()){
        return true;
      }
      return false;
    })
  }

  initNextEvents(){
    this.nextEvents = this.allEvents.filter( event => {
      if(this.getCurrentDateInTimeStamp(event.date.programatic) > (new Date()).getTime()){
        return true;
      }
      return false;
    })
  }

  showVideo(link: string, source: string){

    if(link.length == 0){
      return;
    }

    if(source == 'facebook'){
      window.open(link, "_blank");
      return ;
    }

    this.ref = this.dialogService.open(YoutubePlayerComponent, {
      data: {
        link: link
      },
      baseZIndex: 10000
    });
  }
}
