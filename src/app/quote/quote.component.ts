import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'It is better to be feared than loved, if you cannot be both.','Niccolo Machiavelli',88,9,new Date(2004,8,22)),
    new Quote(2,'The only true wisdom is in knowing you know nothing.','Ki',8,9,new Date(2019,3,29))
  ]

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
