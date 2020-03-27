import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    // { path: 'home', component: HomeComponent},
  // { path: "about", component: AboutComponent },
  // { path: "manager", component: ProductManagerComponent },
  // { path: "service", component: ServiceComponent },
  { path: "list", component: ProductListComponent },
  // { path: "list/add", component: ProductAddComponent },
  // { path: "list/:productID", component: ProductDetailComponent },
  // { path: 'list/edit/:productID', component: ProductEditComponent},
  // { path: "contact", component: ContactComponent },
  // { path: "product/:id", component: ProductDetailComponent},
  // { path: "home", component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }