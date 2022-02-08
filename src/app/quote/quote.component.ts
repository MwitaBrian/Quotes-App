import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote (1, 'Manners maketh a man.', 'William Horman', 'Mwita'), 
    new Quote (2, 'The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Brian'), 
    new Quote (3, "Try to be a rainbow in someone's cloud.", 'Maya Angelou', 'Adams')
  ];

  toggleDetails(index){
    this.quotes[index].toggleDetails = !this.quotes[index].toggleDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
