import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { HeaderComponent } from './header.component';


@Injectable()
export class HeaderService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const header = document.createElement('header-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
    const HeaderComponentRef = factory.create(this.injector, [], header);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(HeaderComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(header);
  }

  // This uses the new custom-element method to add the header to the DOM.
  showAsElement(message: string) {
    // Create element
    const headerEl: NgElement & WithProperties<HeaderComponent> = document.createElement('header-element') as any;
    // Add to the DOM
    document.body.appendChild(headerEl);
  }

}