import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { TopMenuComponent } from './top-menu.component';


@Injectable()
export class TopMenuService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const topMenu = document.createElement('topMenu-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(TopMenuComponent);
    const TopMenuComponentRef = factory.create(this.injector, [], topMenu);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(TopMenuComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(topMenu);
  }

  // This uses the new custom-element method to add the topMenu to the DOM.
  showAsElement(message: string) {
    // Create element
    const topMenuEl: NgElement & WithProperties<TopMenuComponent> = document.createElement('topMenu-element') as any;
    // Add to the DOM
    document.body.appendChild(topMenuEl);
  }

}