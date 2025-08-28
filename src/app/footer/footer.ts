import { Component } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';

import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FocusTrapModule, ButtonModule, FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, AutoFocusModule, ProgressBar],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  providers: [MessageService]
})
export class Footer {
    name: string = '';

    email: string = '';

    accept: boolean = false;

}
