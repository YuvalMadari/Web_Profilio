import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-education',
    standalone: true,
    imports: [CommonModule, TabsModule, BadgeModule, AvatarModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

}
