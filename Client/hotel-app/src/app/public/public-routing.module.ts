import { ContactComponent } from './../user/shared/contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { OfferComponent } from './offer/offer.component';
import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './public-layout.component';

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'register',component:RegisterComponent},
      {path:'offer',component:OfferComponent},
      {path:'feature',component:FeatureComponent},
      {path:'contact',component:ContactComponent}


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
