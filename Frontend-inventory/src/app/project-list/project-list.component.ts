import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  projects: Project[] = [];
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.displayAllProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
