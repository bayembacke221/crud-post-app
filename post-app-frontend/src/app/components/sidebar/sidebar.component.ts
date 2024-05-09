import {Component, EventEmitter, Output} from '@angular/core';
import {NavItemComponent} from "../nav-item/nav-item.component";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroUsers} from "@ng-icons/heroicons/outline";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NavItemComponent, NgIconComponent, NgForOf
  ],
  providers: [provideIcons({  heroUsers })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() closeMenu = new EventEmitter<void>();
  menuItems = [
    {
      title: 'Home',
      link: '/posts',
      icon: heroUsers ,
    },
    {
      title: 'Ajouter un post',
      link: '/post/create',
      icon : heroUsers,
    },
    {
      title: 'List post',
      link: '/posts',
      icon: heroUsers ,
    },
  ]
  toggleCloseMenu() {
    this.closeMenu.emit();
  }
}
