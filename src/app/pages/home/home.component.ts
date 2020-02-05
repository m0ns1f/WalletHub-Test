import { Component, Injector } from '@angular/core';
import { CreditOppertunitiesBlockComponent } from '../../parts/blocks/credit-oppertunities-block/credit-oppertunities-block.component';
import { CreditOppertunitiesBlockService } from '../../parts/blocks/credit-oppertunities-block/credit-oppertunities-block.service';

import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(injector: Injector,public creditCardOppBlock: CreditOppertunitiesBlockService) { 

    const creditCardsOppertunitiesBlockElement = createCustomElement(CreditOppertunitiesBlockComponent,{injector}) 
    customElements.define('credit-oppertunities-block-element',creditCardsOppertunitiesBlockElement);
    
  }

}
