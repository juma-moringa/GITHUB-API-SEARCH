import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepooComponent } from './repoo/repoo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: 'home', component:  LandingPageComponent},
  { path: 'repositories', component: RepooComponent },
  { pathMatch: 'full', redirectTo: 'home', path: '' },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
