import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'It is better to be feared than loved, if you cannot be both','Niccolo Machiavelli',88,9,new Date(2018,8,22)),
    new Quote(2,'The only true wisdom is in knowing you know nothing','Clara Blair',8,9,new Date(2019,3,22)),
    new Quote(2,'Be yourself; everyone else is already taken.','Oscar Wilde',8,9,new Date(2019,2,22)),
    new Quote(2,'Be the change that you wish to see in the world.','Mahatma Gandhi',8,9,new Date(2019,3,10)),
    new Quote(2,'Without music, life would be a mistake.','Friedrich Nietzsche',8,9,new Date(2019,2,20)),
    new Quote(2,'Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.','Marilyn Monroe',8,9,new Date(2018,0,22))
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.date=new Date(quote.date);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`);
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
