import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sidebar: MatSidenav;
  // Above is same property/name as sidebar property defined in app-navbar of
  // sidebar html file

  constructor() { }

  ngOnInit(): void {
  }

}
