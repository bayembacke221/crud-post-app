import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() title!: string;
  @Input() icon: any;
  @Input() link!: string;
  @Input() href!: string;
}
