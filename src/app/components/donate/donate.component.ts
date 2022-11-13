import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  hashtagsList =  ['#YT22', '#YVESTSALA2022', '#ELECTIONS', '#CANDIDAT', '#PRESIDENT', '#BASKETBALL', '#CAMEROUN', '#CAMEROON', '#FECABASKET'];
  constructor() { }

  ngOnInit(): void {
  }

}
