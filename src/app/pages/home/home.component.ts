import { Component, OnInit } from '@angular/core';
import { GameCardDb } from 'src/app/data/fakeData';
import { GameCard } from 'src/app/models/gameCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  gameCard_list: GameCard
  limit: string = '5'
  lastItem: number = GameCardDb.length + 1

  constructor() { 
    this.gameCard_list = [{
      gameCover: '',
      alt: '',
      gameLabel: '',
      gameType: '',
      gamePrice: ''
    }]
  }

  ngOnInit(): void {
    this.getSomeCards(this.limit)
    console.log(this.lastItem)
  }

  getSomeCards(limit: string | number) {
    this.gameCard_list = GameCardDb.filter((card) => card.id < limit)
  }
}
