import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TD4');
}
