import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CreditOppertunitiesBlockComponent } from './credit-oppertunities-block.component';


@Injectable()
export class CreditOppertunitiesBlockService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const CreditOppertunitiesBlock = document.createElement('credit-oppertunities-block-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(CreditOppertunitiesBlockComponent);
    const CreditOppertunitiesBlockComponentRef = factory.create(this.injector, [], CreditOppertunitiesBlock);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(CreditOppertunitiesBlockComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(CreditOppertunitiesBlock);
  }

  // This uses the new custom-element method to add the credit-oppertunities-block to the DOM.
  showAsElement(message: string) {
    // Create element
    const CreditOppertunitiesBlockEl: NgElement & WithProperties<CreditOppertunitiesBlockComponent> = document.createElement('credit-oppertunities-block-element') as any;
    // Add to the DOM
    document.body.appendChild(CreditOppertunitiesBlockEl);
  }

}