import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';

import { DatePipe, CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'', redirectTo:'/pages', pathMatch:'full'},

  {path: 'pages', 
  loadChildren: () => import(`./pages/pages.module`).then(
    module => module.PagesModule
  )},

  {path:'admin', loadChildren: () => import(`./admin/admin.module`).then(
    module => module.AdminModule
  )}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    SharedModule,
    PagesModule,
    AdminModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
