import { Component } from '@angular/core';
import { faHtml5, faCss3, faJs, faAngular, faReact, faPhp, faPython, faGitAlt, faNodeJs, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faAngular = faAngular;
  faReact = faReact;
  faBootstrap = faBootstrap;
  faPhp = faPhp;
  faPython = faPython;
  faNodeJs = faNodeJs;
  faGit = faGitAlt;
  faGithub = faGithub;
  faDatabase = faDatabase;
}
