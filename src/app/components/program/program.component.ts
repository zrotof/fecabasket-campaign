import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  providers:[MessageService, DialogService],
  encapsulation: ViewEncapsulation.None
})
export class ProgramComponent implements OnInit {

  videosList = [
    {
      image: "../../../assets/img/program/yves.jpeg",
      title: "L'essentiel du programme",
      link: "",
      time: "03:20"
    },
    {
      image: "../../../assets/img/program/marie.jpeg",
      title: "Le basket féminin",
      link: "",
      time: "03:20"
    },
    {
      image: "../../../assets/img/program/louis.jpeg",
      title: "La vision technique et sportive",
      link: "",
      time: "03:20"
    },
    {
      image: "../../../assets/img/program/condense.jpeg",
      title: "Quelques thèmes du programme",
      link: "https://www.youtube.com/embed/k2_xLlDkVfI",
      time: '02:22'    
    }
  ]

  ref! : DynamicDialogRef;

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  openYoutubePlayer(link: string){
    if(link.length == 0){
      return;
    }

    this.ref = this.dialogService.open(YoutubePlayerComponent, {
      data: {
        link: link
      },
      baseZIndex: 10000
    });
  }

}
