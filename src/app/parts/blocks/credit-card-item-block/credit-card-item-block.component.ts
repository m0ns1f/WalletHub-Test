import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card-item-block',
  templateUrl: './credit-card-item-block.component.html',
  styleUrls: ['./credit-card-item-block.component.scss']
})
export class CreditCardItemBlockComponent {

  constructor() { }
  
  showMore(e){
    
    var el = e.target;
    while ((el = el.parentElement) && !el.classList.contains('show-less'));
    el.classList.remove('show-less');

  }

}
