import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-login',
  templateUrl: './partner-login.component.html',
  styleUrls: ['./partner-login.component.css', '../../../../../src/app/shared/custom-css/login.css']
})
export class PartnerLoginComponent implements OnInit {

  timer = 30;
  
  constructor() { }

  ngOnInit(): void {
  }

}
