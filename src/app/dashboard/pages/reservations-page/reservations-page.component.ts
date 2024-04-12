import { Component } from '@angular/core';
import { LeftPaneComponent } from '../../components/left-pane/left-pane.component';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reservations-page',
  standalone: true,
  imports: [LeftPaneComponent,RouterOutlet,RouterLink,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css'
})
export class ReservationsPageComponent {

}
