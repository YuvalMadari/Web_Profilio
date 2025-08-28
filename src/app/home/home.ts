import { Component } from '@angular/core';
import { About } from "../about/about";
import { Cert } from "../cert/cert";
import { Skills } from "../skills/skills";
import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-home',
  imports: [About, Cert, Skills, Experience, Education, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
