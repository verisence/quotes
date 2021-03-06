import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote
  constructor() { }

  ngOnInit() {
  }

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Output() up = new EventEmitter<boolean>();
  @Output() down = new EventEmitter<boolean>();

  voteUp(add:boolean){
    this.up.emit(add);
  }

  voteDown(subtract){
    this.down.emit(subtract);
  }

}
