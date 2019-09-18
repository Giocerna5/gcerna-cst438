import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SignComponent } from './sign/sign.component';
import { ThanksComponent } from './thanks/thanks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'list', component: ListComponent },
  { path: 'sign', component: SignComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
  	imports: [ RouterModule.forRoot(routes) ],
	exports: [RouterModule]
	})
  export class
  AppRoutingModule { }
