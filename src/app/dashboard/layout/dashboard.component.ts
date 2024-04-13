import { Component , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LeftPaneComponent } from '../components/left-pane/left-pane.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
      HeaderComponent,
      FooterComponent,
      LeftPaneComponent,
      CommonModule,
      RouterModule,
      HttpClientModule,
      RouterLink,
      RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  message:any;
    status:any;
    userName: string = '';
      rol?:string;
   constructor(private route: ActivatedRoute,private router: Router,private authService: AuthService/*,private dataService: DataService*/) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const parametro1 = params['status'];
      const parametro2 = params['message'];
      console.log(parametro1,parametro2)
      this.status=parametro1;
      this.message=parametro2;
    });

    this.userName = this.authService.getUserName();
    this.rol=this.authService.getRol();
    console.log("rol: ",this.rol)

  }
}
