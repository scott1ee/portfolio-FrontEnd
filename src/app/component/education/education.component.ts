import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from '../../service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((education) => {
      this.education = education;
    });
  }
}
