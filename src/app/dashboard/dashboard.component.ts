import { Component } from '@angular/core';
import {HeaderComponent} from "../layout/header/header.component"
import {FooterComponent} from "../layout/footer/footer.component"
import {LeftPaneComponent} from "../layout/left-pane/left-pane.component"
import {MainContentComponent} from "../layout/main-content/main-content.component"


import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    LeftPaneComponent,
    MainContentComponent,
    RouterLink,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
