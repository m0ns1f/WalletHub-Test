import { Component, Injector } from '@angular/core';
import { TopMenuService } from './top-menu/top-menu.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderBannerService } from './header-banner/header.service';
import { createCustomElement } from '@angular/elements';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  isHome : any;

  constructor(
    private location : Location,
    injector: Injector,
    public topMenu: TopMenuService, 
    public headerBanner: HeaderBannerService
    ){

    this.isHome = location.isCurrentPathEqualTo('/home');//(router.url == '/') ? true : false;
    const topMenuElement = createCustomElement(TopMenuComponent,{injector});
    customElements.define('top-menu-element',topMenuElement);
    const headerBannerElement = createCustomElement(HeaderBannerComponent,{injector});
    customElements.define('header-banner-element',headerBannerElement);

  }

}
