import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() user: string = '';
  @Output() navigateEvent = new EventEmitter<string>();

  selectedMenu: string = '';

  constructor(){}

  navigateTo(route: string) {
    this.selectedMenu = route;
    this.navigateEvent.emit(route);
  }
}
