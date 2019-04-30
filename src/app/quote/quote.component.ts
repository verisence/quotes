import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'It is better to be feared than loved, if you cannot be both','Niccolo Machiavelli',0,0,new Date(2018,8,22)),
    new Quote(2,'The only true wisdom is in knowing you know nothing','Clara Blair',0,0,new Date(2019,3,22)),
    new Quote(2,'Be yourself; everyone else is already taken','Oscar Wilde',0,0,new Date(2019,2,22)),
    new Quote(2,'Be the change that you wish to see in the world','Mahatma Gandhi',0,0,new Date(2019,3,10)),
    new Quote(2,'Without music, life would be a mistake','Friedrich Nietzsche',0,0,new Date(2019,2,20))
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
  
  upVote(up, index){
    if (up) {
      this.quotes[index].upvotes +=1;
    }
  }

  downVote(down, index){
    if (down) {
      this.quotes[index].downvotes +=1;
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
