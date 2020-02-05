import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CreditCardItemBlockComponent } from './credit-card-item-block.component';


@Injectable()
export class CreditCardItemBlockService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const CreditItemBlock = document.createElement('credit-card-item-block-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(CreditCardItemBlockComponent);
    const CreditItemBlockComponentRef = factory.create(this.injector, [], CreditItemBlock);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(CreditItemBlockComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(CreditItemBlock);
  }

  // This uses the new custom-element method to add the credit-item-block to the DOM.
  showAsElement(message: string) {
    // Create element
    const CreditItemBlockEl: NgElement & WithProperties<CreditCardItemBlockComponent> = document.createElement('credit-card-item-block-element') as any;
    // Add to the DOM
    document.body.appendChild(CreditItemBlockEl);
  }

}