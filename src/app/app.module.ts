import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SaleComponent } from './sale/sale.component';
import { TypeComponent } from './type/type.component';
import { NewspComponent } from './newsp/newsp.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent, AboutComponent, HomeComponent, ContactComponent, SaleComponent, TypeComponent, NewspComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
