import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    CommonModule,
    RouterModule,
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
