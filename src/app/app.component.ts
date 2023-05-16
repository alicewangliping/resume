import { Component } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Skill, skills } from './components/skills/skills.data';
import { Card } from './model/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'humber-demo';
  cards: Card[] = cardData;
  card: Card[] =cardData;
  skill:Skill[]=skills;

  handleCardSelect(card: any) {
    console.log("Selected", card)
  }
}
