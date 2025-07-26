import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-manage-project',
  standalone: false,
  templateUrl: './manage-project.component.html',
  styleUrl: './manage-project.component.css',
})
export class ManageProjectComponent {
  projectList: Project[] = [];

  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.showAllProjects();
  }
  showAllProjects() {
    this.projectService.displayAllProjects().subscribe((data) => {
      this.projectList = data;
    });
  }
}
