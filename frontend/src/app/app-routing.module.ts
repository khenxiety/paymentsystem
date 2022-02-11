import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';


const routes: Routes = [
  {
    path:'payment',
    component:PaymentPageComponent
  },
  { path: '',
   redirectTo: '/payment',
    pathMatch: 'full' 
  },
  {
    path:'success',
    component:SuccesspageComponent
  },
  
  {
    path:'error',
    component:ErrorpageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
