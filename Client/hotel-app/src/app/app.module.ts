import { FormsModule } from '@angular/forms';
import { AdminRoleGuard } from './helpers/adminGuard';
import {UserRoleGuard} from './helpers/userGuard';
import { StaticDetails } from './helpers/staticDetails';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import JwtHelper from './helpers/jwtHelper';
import { JwtInterceptor } from './helpers/interceptors/jwtInterceptor';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AuthModule,
    AdminModule,
    UserModule,
    HttpClientModule,
    AgGridModule,

    ReactiveFormsModule,

    RouterModule.forRoot([
      {
        path: '', loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)
      },
      {
        path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
      },
      {
        path: 'user', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule), canActivate: [UserRoleGuard]
      },
      {
        path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule), canActivate: [AdminRoleGuard]
      },
    ]),
  ],
  providers: [
    // JwtHelper,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
