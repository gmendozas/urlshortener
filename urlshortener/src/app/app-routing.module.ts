import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenerComponent } from './shortener/shortener.component';

const routes: Routes = [
  {
    path: 'shortener',
    component: ShortenerComponent,
    data: { title: 'URL Shortener' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
