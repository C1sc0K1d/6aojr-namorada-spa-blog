import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '6aojr-vue-spa-blog';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  
  height = 0;

  ngAfterViewInit() {
    this.height = this.headerComponent.getContainerHeight();
  }
}

