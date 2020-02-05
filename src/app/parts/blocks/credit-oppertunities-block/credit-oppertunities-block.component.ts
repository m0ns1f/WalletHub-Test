import { Component, Injector } from '@angular/core';
import { CreditCardItemBlockComponent } from '../credit-card-item-block/credit-card-item-block.component';
import { CreditCardItemBlockService } from '../credit-card-item-block/credit-card-item-block.service';

import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-credit-oppertunities-block',
  templateUrl: './credit-oppertunities-block.component.html',
  styleUrls: ['./credit-oppertunities-block.component.scss']
})
export class CreditOppertunitiesBlockComponent {

  constructor(injector: Injector,public creditCardItemBlock: CreditCardItemBlockService) { 

    const creditCardItemBlockElement = createCustomElement(CreditCardItemBlockComponent,{injector}) 
    customElements.define('credit-card-item-block-element',creditCardItemBlockElement);
    
  }

}
