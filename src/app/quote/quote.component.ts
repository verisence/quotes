import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'phil','phil',8,9,new Date(2019,8,22)),
    new Quote(2,'phil','Ki',8,9,new Date(2019,7,22))
  ]

  constructor() { }

  ngOnInit() {
  }

}
