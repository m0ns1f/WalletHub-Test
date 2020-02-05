import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { HeaderBannerComponent } from './header-banner.component';


@Injectable()
export class HeaderBannerService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const HeaderBanner = document.createElement('header-banner-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(HeaderBannerComponent);
    const HeaderBannerComponentRef = factory.create(this.injector, [], HeaderBanner);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(HeaderBannerComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(HeaderBanner);
  }

  // This uses the new custom-element method to add the header-banner to the DOM.
  showAsElement(message: string) {
    // Create element
    const HeaderBannerEl: NgElement & WithProperties<HeaderBannerComponent> = document.createElement('header-banner-element') as any;
    // Add to the DOM
    document.body.appendChild(HeaderBannerEl);
  }

}