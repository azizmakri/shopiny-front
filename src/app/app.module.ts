import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../frontoffice/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { NavbarComponent } from 'src/frontoffice/shared/navbar/navbar.component';
import { ListProductComponent } from 'src/frontoffice/product/list-product/list-product.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { ListeforumComponent } from '../frontoffice/forum/listeforum/listeforum.component';
import { ListcartComponent } from '../frontoffice/order/listcart/listcart.component';
import { ListdeliveryComponent } from '../frontoffice/delivery/listdelivery/listdelivery.component';
import { ListbillComponent } from '../frontoffice/bill/listbill/listbill.component';
import { ClaimComponent } from '../frontoffice/claim/claim/claim.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    NavbarComponent,
    FooterComponent,
    ListProductComponent,
    BackOfficeComponent,
    ListeforumComponent,
    ListcartComponent,
    ListdeliveryComponent,
    ListbillComponent,
    ClaimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
