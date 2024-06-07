import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './admin.component.html',
})
export class AdminComponent {}
