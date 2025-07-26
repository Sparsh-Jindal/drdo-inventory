package com.example.drdo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.drdo.entity.Project;

public interface ProjectRepo extends JpaRepository<Project, Long> {

}
