import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects.model';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
