import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
