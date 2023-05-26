import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navLinks = [
    {item: 'Dashboard', img: '../../../assets/images/dashboard-icon.png', url: 'dashboard'},
    {item: 'Manage', img: '../../../assets/images/manage-icon.png', url: '#'},
    {item: 'Booking & Ticketing', img: '../../../assets/images/booking-ticketing-icon.png', url: 'bookingticketing'},
    {item: 'Booking & Ticketing', img: '../../../assets/images/booking-ticketing-icon2.png', url: '#'},
    {item: 'Invoice', img: '../../../assets/images/invoice-icon.png', url: '#'},
    {item: 'POS', img: '../../../assets/images/pos-icon.png', url: '#'},
    {item: 'Reports', img: '../../../assets/images/reports-icon.png', url: '#'},
    {item: 'Payment Link', img: '../../../assets/images/payment-link-icon.png', url: '#'},
    {item: 'Setting', img: '../../../assets/images/settings-icon.png', url: '#'},
    {item: 'Support Ticket', img: '../../../assets/images/support-ticket-icon.png', url: '#'}
  ]


}
