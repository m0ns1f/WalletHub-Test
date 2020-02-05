import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { IsNewsLettreSubscribGuard } from '../guard/is-news-lettre-subscrib.guard';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'apply-now',
    loadChildren : () => import('./parts/blocks/apply-now/apply-now.module').then(m => m.ApplyNowModule)
  },
  {
    path : 'news-lettre-success',
    component : HomeComponent,
    canActivate: [
      IsNewsLettreSubscribGuard
    ]

  }
]

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
