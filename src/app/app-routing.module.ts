import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatefrontComponent } from './FrontOffice/templatefront/templatefront.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { LoginComponent } from './FrontOffice/user/login/login.component';
import { AboutpageComponent } from './FrontOffice/aboutpage/aboutpage.component';
import { ProductsComponent } from './FrontOffice/Shop/products/products.component';
import { ClaimfrontComponent } from './FrontOffice/claimfront/claimfront.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { UpdateuserComponent } from './FrontOffice/user/updateuser/updateuser.component';
import { ErrornotfontComponent } from './FrontOffice/errornotfont/errornotfont.component';
import { ListForumFrontComponent } from './FrontOffice/forum/list-forum-front/list-forum-front.component';
import { AddPostFrontComponent } from './FrontOffice/forum/add-post-front/add-post-front.component';
import { PostDetailsComponent } from './FrontOffice/forum/post-details/post-details.component';
import { UpdatePostComponent } from './FrontOffice/forum/update-post/update-post.component';

const routes: Routes = [
  
{
  path:'',
  component:TemplatefrontComponent, pathMatch: 'full'
 
},
  
  {
  path:'front',
  component:TemplatefrontComponent,
  children:[
    {
      path:'about',
      component:AboutpageComponent
    },
    {
      path:'home',
      component:HomepagefrontComponent
    },


    {
      path:'listforum',
      component:ListForumFrontComponent
    },
    {
      path:'addpost',
      component:AddPostFrontComponent
    },
    {
      path:'detailpost/:id',
      component: PostDetailsComponent
    },
    {
      path:'edit/:id',
      component: UpdatePostComponent
    },


    {
      path:'login',
      component:LoginComponent
    }
    ,
    {
      path:'shop',
      component:ProductsComponent
    }
    ,
    {
      path:'claim',
      component:ClaimfrontComponent
    },
    {
      path:'profile',
      component:UpdateuserComponent
    },
    {
      path:'error',
      component:ErrornotfontComponent
    }
  ]

},
{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'listeusers',
      component:ListuserComponent
    }
  ]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
