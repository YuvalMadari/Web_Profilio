import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
    standalone: true,
    imports: [Toolbar, AvatarModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
