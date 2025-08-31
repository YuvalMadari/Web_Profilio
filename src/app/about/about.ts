import { Component, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  roleText = "Engineer. Coder. Problem Solver.";
  typingSpeed = 100;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);

      const typedRole = document.getElementById('typed-role');
      if (typedRole) typedRole.textContent = '';
      this.typeRole();
    }
  }

  typeRole(index = 0) {
    const typedRole = document.getElementById('typed-role');
    if (typedRole) {
      typedRole.textContent = this.roleText.slice(0, index + 1);
      if (index < this.roleText.length - 1) {
        setTimeout(() => this.typeRole(index + 1), this.typingSpeed);
      }
    }
  }
}
