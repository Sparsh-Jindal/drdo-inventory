import { Component } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update-project',
  standalone: false,
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css',
})
export class UpdateProjectComponent {
  project: Project = new Project();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(this.id).subscribe((data) => {
      this.project = data;
    });
  }

  onSubmit(): void {
    this.projectService.updateProject(this.id, this.project).subscribe(() => {
      alert('✅ User updated successfully!');
      this.router.navigate(['/manage-project']);
    });
  }
}
