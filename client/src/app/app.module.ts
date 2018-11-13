import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './services/rest.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './productlist/product/product.component';
=======
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';


import { RestService } from './services/rest.service';
import { MessageService } from './services/message.service';
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    VendorProductsComponent,
    ProductlistComponent,
    ProductComponent,
    //VendorProductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
=======
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule,
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
    RouterModule.forRoot([
      {
        path : '',component : LoginComponent
      },
      {
        path : 'register',component : RegisterComponent
      },
      {
<<<<<<< HEAD
        path : 'home',component : HomeComponent,
        children : [
          {path : 'vendorproducts',component : VendorProductsComponent}
        ]
      }
    ])
  ],
  providers: [RestService,MessageService,{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true
  }],
=======
        path : 'home',component : HomeComponent
      }
    ])
  ],
  providers: [RestService,MessageService],
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
  bootstrap: [AppComponent]
})
export class AppModule { }
