import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
