import { Component } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent {

  loadedAnimate : any;




  ngAfterViewInit(){
    setTimeout(()=>{
      this.loadedAnimate = true;
    },1000)
  }
}
