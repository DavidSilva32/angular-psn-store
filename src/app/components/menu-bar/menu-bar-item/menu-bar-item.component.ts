import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar-item',
  templateUrl: './menu-bar-item.component.html',
  styleUrls: ['./menu-bar-item.component.sass']
})
export class MenuBarItemComponent implements OnInit {
  @Input()
  isActive: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
