import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  providers:[MessageService, DialogService],
  encapsulation: ViewEncapsulation.None
})
export class HomeAboutComponent implements OnInit {

  ref! : DynamicDialogRef;
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  showVideo(link: string){
    this.ref = this.dialogService.open(YoutubePlayerComponent, {
      data: {
        link: link
      },
      baseZIndex: 10000
    });
  }

}
