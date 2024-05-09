import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgComponentOutlet} from "@angular/common";
@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgComponentOutlet
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
