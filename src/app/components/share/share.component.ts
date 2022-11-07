import { Component, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  @ViewChild(Tooltip) tooltip!: Tooltip;
  
  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.tooltip.activate();
  }

}
