import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  dropdown = false;

  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  constructor(private router: Router) {}

  getContainerHeight() {
    return this.containerRef?.nativeElement.offsetHeight || 0;
  }

  showDropdown() : void {
    this.dropdown = !this.dropdown
  }

  goHoome() : void {
    this.router.navigate(['']);
  }

}
