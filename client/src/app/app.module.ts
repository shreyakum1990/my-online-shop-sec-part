import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
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

@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot([
      {
        path : '',component : LoginComponent
      },
      {
        path : 'register',component : RegisterComponent
      },
      {
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
  bootstrap: [AppComponent]
})
export class AppModule { }