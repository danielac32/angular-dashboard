import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LeftPaneComponent } from '../components/left-pane/left-pane.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
      HeaderComponent,
      FooterComponent,
      LeftPaneComponent,
      RouterLink,
      CommonModule,
      RouterModule,
      HttpClientModule,
      RouterLink,
      RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
