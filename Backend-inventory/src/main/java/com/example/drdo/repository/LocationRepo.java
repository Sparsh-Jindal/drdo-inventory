package com.example.drdo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.drdo.entity.Location;

public interface LocationRepo  extends JpaRepository<Location, Long>{

}
