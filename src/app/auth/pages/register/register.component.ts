import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
