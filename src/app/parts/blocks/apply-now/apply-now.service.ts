import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { ApplyNowComponent } from './apply-now.component';


@Injectable()
export class ApplyNowService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const applyNow = document.createElement('apply-now-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(ApplyNowComponent);
    const ApplyNowComponentRef = factory.create(this.injector, [], applyNow);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(ApplyNowComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(applyNow);
  }

  // This uses the new custom-element method to add the applyNow to the DOM.
  showAsElement(message: string) {
    // Create element
    const applyNowEl: NgElement & WithProperties<ApplyNowComponent> = document.createElement('apply-now-element') as any;
    // Add to the DOM
    document.body.appendChild(applyNowEl);
  }

}