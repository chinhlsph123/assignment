import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { MenuComponent } from "./menu/menu.component";
import { AdminIndexComponent } from "./admin/admin-index/admin-index.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { ProductManagerComponent } from "./admin/product-manager/product-manager.component";
import { ControlComponent } from "./admin/control/control.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  // { path: "service", component: ServiceComponent },
  { path: "list", component: ProductListComponent },
  // { path: "list/add", component: ProductAddComponent },
  // { path: "list/:productID", component: ProductDetailComponent },
  // { path: 'list/edit/:productID', component: ProductEditComponent},
  // { path: "contact", component: ContactComponent },
  // { path: "product/:id", component: ProductDetailComponent},

  {
    path: "admin",component: AdminIndexComponent,
    children: [
      { path: "", redirectTo: "control", pathMatch: "full" },
      { path: "control", component: ControlComponent },
      { path: "product", component: ProductManagerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
