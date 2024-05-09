import { Component } from '@angular/core';
import {MainNavbarComponent} from "../../components/navbars/main-navbar/main-navbar.component";
import {RouterOutlet} from "@angular/router";
import {MainFooterComponent} from "../../components/footer/main-footer/main-footer.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MainNavbarComponent,
    RouterOutlet,
    MainFooterComponent,
    NgClass
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  onCloseMenu() {
    this.toggleSidebar();
  }

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('isSidebarOpen',this.isSidebarOpen)
  }
  ngOnInit(): void{
  }
}
