package com.example.drdo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.drdo.entity.Project;

import com.example.drdo.repository.ProjectRepo;

@RestController
@RequestMapping("/api/project")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

	@Autowired
	ProjectRepo projectRepo;

	@PostMapping("/insert")
	public Project createProject(@RequestBody Project project) {
		return projectRepo.save(project);
	}

	@GetMapping
	public List<Project> getallProjects() {
		return projectRepo.findAll();

	}
	
	@DeleteMapping("/delete/{id}")
	   public String  deleteProjectById( @PathVariable Long id) {
		projectRepo.deleteById(id);
		return "Project is deleted Successfully";
	}
	@GetMapping("/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
	    Project project = projectRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("Project not found"));
	    return ResponseEntity.ok(project);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
	    Project project = projectRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("Project not found"));

	    project.setProjectName(projectDetails.getProjectName());
	    // Add other fields if any

	    Project updatedProject = projectRepo.save(project);
	    return ResponseEntity.ok(updatedProject);
	}
}

