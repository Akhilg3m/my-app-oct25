import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { DirectivesComponent } from './directives/directives.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { NotifyGuard } from './notify.guard';
import { AdminGuard } from './admin.guard';
import { AboutCeoComponent } from './aboutus/about-ceo/about-ceo.component';
import { PaymentModule } from './payment/payment.module';

const routes: Routes = [
  {path:'login', component:LoginComponent}, // general route
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[ //children routes
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'cars', component: CarsComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'create-vehicle', component:CreateVehicleComponent, canDeactivate:[NotifyGuard]},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent, canActivate:[AdminGuard]},
    {path:'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'create-user', component:CreateUserComponent, canDeactivate:[NotifyGuard]},
    {path:'parent', component: ParentComponent},
    {path:'flipkart', component: FlipkartComponent },
    {path:'about-ceo', component: AboutCeoComponent},
    {path:'payment', loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)},
    {path:'', component:HomeComponent}
  ]},
  {path:'', component:LoginComponent}, // empty route
  {path:'**', component:PageNotFoundComponent} // wild card route
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
