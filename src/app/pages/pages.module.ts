import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PropertiesComponent } from './properties/properties.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'index', component:IndexComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'properties', component:PropertiesComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/details/:id', component:BlogDetailsComponent},
  {path:'property/:id/:estate/:username', component:PropertyDetailsComponent},
  {path:'contact', component:ContactComponent}

]

@NgModule({
  declarations: [FooterComponent, NavbarComponent, IndexComponent, AboutComponent, ContactComponent, PropertiesComponent, BlogComponent, BlogDetailsComponent, PropertyDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ]
})
export class PagesModule { }
