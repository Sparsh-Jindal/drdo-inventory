import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  standalone: false,
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css',
})
export class ProjectFormComponent {
  project: Project = new Project();
  successMessage: string = '';
  constructor(private projectService: ProjectService, private router: Router) {}

  onSubmit() {
    this.createProject();
  }

  createProject() {
    this.projectService.addProject(this.project).subscribe((data) => {
      console.log(data);
      this.successMessage = '✅ New item added successfully!';
      setTimeout(() => {
        this.router.navigate(['/manage-project']);
      }, 3000);
    });
  }
}
