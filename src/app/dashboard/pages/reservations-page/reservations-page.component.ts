import { Component } from '@angular/core';
import { LeftPaneComponent } from '../../components/left-pane/left-pane.component';

@Component({
  selector: 'app-reservations-page',
  standalone: true,
  imports: [LeftPaneComponent],
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css'
})
export class ReservationsPageComponent {

}
