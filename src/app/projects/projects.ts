import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
    standalone: true,
    imports: [CardModule, ButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
