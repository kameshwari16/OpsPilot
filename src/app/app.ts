import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FEATURE_FLAGS } from './core/config/feature-flags.token';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OpsPilot');
  protected readonly flags=inject(FEATURE_FLAGS);
  protected readonly authService=inject(AuthService);

  loginasAdmin(){
    this.authService.login({
      id:1,
      name:'Kameswari',
      role:'Admin'
    })
  }
}
