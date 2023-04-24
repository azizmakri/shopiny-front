import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from 'src/frontoffice/product/list-product/list-product.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { ListeforumComponent } from 'src/frontoffice/forum/listeforum/listeforum.component';
import { ListcartComponent } from 'src/frontoffice/order/listcart/listcart.component';
import { ListdeliveryComponent } from 'src/frontoffice/delivery/listdelivery/listdelivery.component';
import { ListbillComponent } from 'src/frontoffice/bill/listbill/listbill.component';
import { ClaimComponent } from 'src/frontoffice/claim/claim/claim.component';

const routes: Routes = [
  {path:"frontoffice",component:FrontOfficeComponent, children:[
    {path:"listproduct", component: ListProductComponent},
    {path:"listeforum", component: ListeforumComponent},
    {path:"cart", component: ListcartComponent},
    {path:"delivery", component: ListdeliveryComponent},
    {path:"bill", component: ListbillComponent},
    {path:"claim", component: ClaimComponent}
    ]},
  {path:"",component:FrontOfficeComponent},
 
  {path:"backoffice",component:BackOfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
