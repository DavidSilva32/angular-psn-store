import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = ''
  @Input()
  alt: string = 'Game Cover'
  @Input()
  gameLabel = ''
  @Input()
  gameType = 'XPTO | PS4'
  @Input()
  gamePrice = 'R$ 399,90'

  constructor() { }

  ngOnInit(): void {
  }

}
