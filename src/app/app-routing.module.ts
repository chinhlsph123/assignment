import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  // { path: "service", component: ServiceComponent },
  { path: "list", component: ProductListComponent },
  // { path: "list/add", component: ProductAddComponent },
  // { path: "list/:productID", component: ProductDetailComponent },
  // { path: 'list/edit/:productID', component: ProductEditComponent},
  // { path: "contact", component: ContactComponent },
  // { path: "product/:id", component: ProductDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }