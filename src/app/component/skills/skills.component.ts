import { Component, OnInit } from '@angular/core';
import { faHtml5, faCss3, faJs, faAngular, faReact, faPhp, faPython, faGitAlt, faNodeJs, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Skills } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

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

  skills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }

}
