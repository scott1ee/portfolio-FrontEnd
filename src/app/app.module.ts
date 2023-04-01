import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { BannerComponent } from './component/banner/banner.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    BannerComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
