import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass'],
})
export class MenuBarComponent implements OnInit {
  isActive: string = 'menuOff';

  constructor() {}

  ngOnInit(): void {}

  handleSideBar() {
    this.isActive != 'menuOn'
      ? (this.isActive = 'menuOn')
      : (this.isActive = 'menuOff');
  }
}
