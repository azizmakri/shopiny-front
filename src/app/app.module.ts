import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatefrontComponent } from './FrontOffice/templatefront/templatefront.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { LoginComponent } from './FrontOffice/user/login/login.component';
import { AboutpageComponent } from './FrontOffice/aboutpage/aboutpage.component';
import { ProductsComponent } from './FrontOffice/Shop/products/products.component';
import { ClaimfrontComponent } from './FrontOffice/claimfront/claimfront.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { UpdateuserComponent } from './FrontOffice/user/updateuser/updateuser.component';
import { ErrornotfontComponent } from './FrontOffice/errornotfont/errornotfont.component';
import { AddPostFrontComponent } from './FrontOffice/forum/add-post-front/add-post-front.component';
import { ListForumFrontComponent } from './FrontOffice/forum/list-forum-front/list-forum-front.component';
import { PostDetailsComponent } from './FrontOffice/forum/post-details/post-details.component';
import { UpdatePostComponent } from './FrontOffice/forum/update-post/update-post.component';
import { FilterComponent } from './FrontOffice/forum/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    TemplatefrontComponent,
    FooterComponent,
    HeaderComponent,
    HomepagefrontComponent,
    LoginComponent,
    AboutpageComponent,
    ProductsComponent,
    ClaimfrontComponent,
    ListuserComponent,
    UpdateuserComponent,
    ErrornotfontComponent,



    AddPostFrontComponent,
    ListForumFrontComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
