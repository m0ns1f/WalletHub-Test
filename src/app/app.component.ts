import { Component, Injector } from '@angular/core';
import { HeaderComponent } from './parts/header/header.component';
import { HeaderService } from './parts/header/header.service';

import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wallethub Angular2 App';
  constructor(injector: Injector,public header: HeaderService){

    const headerElement = createCustomElement(HeaderComponent,{injector});
    customElements.define('header-element',headerElement);

  }
}
