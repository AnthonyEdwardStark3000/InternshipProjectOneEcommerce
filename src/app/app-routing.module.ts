import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'',component:MainpageComponent},
  {path:'wish',component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
