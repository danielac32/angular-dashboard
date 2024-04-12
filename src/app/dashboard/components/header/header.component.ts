import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule/*,FormsModule*/} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../../auth/services/auth.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [AuthService]
})

export class HeaderComponent implements OnInit {
	admin?:boolean;

	constructor(private authService: AuthService,private router: Router) {}
    ngOnInit(): void {
	      this.admin=this.authService.isAdmin();
	}
	logout(): void {
	    this.authService.logout();
	    this.router.navigate(['/auth/login']);
    }

}
