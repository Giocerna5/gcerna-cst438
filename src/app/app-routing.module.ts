import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThanksComponent } from './thanks/thanks.component';   

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'sign', component: SignComponent},
	{ path: 'products', component: ProductsComponent},
	{ path: 'cart', component: CartComponent},
	{ path: 'details', component: DetailsComponent},
	{ path: 'checkout', component: CheckoutComponent},
	{ path: 'thanks', component: ThanksComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
