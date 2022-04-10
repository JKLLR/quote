import { Component, OnInit } from '@angular/core';

import { Quoteclass } from 'src/app/quoteclass';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes: Quoteclass[] = [ 
    new Quoteclass('Emancipate yourselves from mental slavery, None but ourselves can free our minds.', 'Bob Marley', 'Joe Karanja',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('The story of life is quicker than the wink of an eye, the story of love is hello and goodbye...until we meet again', ' Jimi Hendrix', 'Owen',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass("The game aint always fair and that is the thing though. You can play your heart out, everybody do not get a ring though.", 'Drake', 'Mburu',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('Ahhh,  finesse If I broke na my business', 'Pheelz', 'Anonymous',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('You have every right to a beautiful life.', 'Selena Gomez', 'Austin Obim',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('And anytime you feel the pain refrain. Do not carry the world upon your shoulders. For well you know that it iss a fool who plays it cool by making his world a little colder.', 'The Beatles', 'Martin Kimani',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.', ' Bob Marley', 'Derrick Maina',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('You have to hurt in order to know. Fall in order to grow. Lose in order to gain. Because most of lifes lessons are learned in pain.', 'J Cole', 'Huria',  0, 0, new Date(2020, 12, 5)),
   
  ];

  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
