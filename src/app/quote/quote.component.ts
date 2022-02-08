import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [ 
    {id:1, quote:'Manners maketh a man.', author:'William Horman'}, 
    {id:2, quote:'The way to get started is to quit talking and begin doing.', author:'Walt Disney'}, 
    {id:3, quote:"Try to be a rainbow in someone's cloud.", author:'Maya Angelou'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
