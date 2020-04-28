import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { AdminIndexComponent } from './admin/admin-index/admin-index.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './admin/control/control.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NbarComponent } from './nbar/nbar.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,NgbModule, FormsModule,HttpClientModule,Ng2SearchPipeModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent, AboutComponent, HomeComponent, ContactComponent, SaleComponent, TypeComponent, NewspComponent, AdminIndexComponent, ProductManagerComponent, MenuComponent, FooterComponent, ControlComponent, ProductAddComponent, ProductEditComponent, NbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
