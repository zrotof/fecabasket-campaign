import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-office-member-details',
  templateUrl: './office-member-details.component.html',
  styleUrls: ['./office-member-details.component.scss']
})
export class OfficeMemberDetailsComponent implements OnInit {

  officeMemberData : any;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.getOfficeMemberData();
  }

  //getting project data
  getOfficeMemberData(){
    this.officeMemberData = this.config.data.officeMemberData;
  }
}
