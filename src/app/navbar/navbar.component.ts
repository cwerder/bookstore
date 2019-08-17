import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: boolean;
  private accountName: string;

  constructor() { }

  ngOnInit() {
    this.accountName = null;
    this.isLoggedIn = false;
  }

}
