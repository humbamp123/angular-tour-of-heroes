import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
