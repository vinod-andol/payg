import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingTicketingComponent } from './pages/booking-ticketing/booking-ticketing.component';

const routes: Routes = [
  { path: '**', component: BookingTicketingComponent },
  { path: 'bookingticketing', component: BookingTicketingComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
