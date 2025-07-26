package com.example.drdo.controller;





import java.util.List;
import java.util.Optional;

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

import com.example.drdo.entity.Location;
import com.example.drdo.entity.User;
import com.example.drdo.repository.LocationRepo;



@RestController
@RequestMapping("/api/location")
@CrossOrigin(origins = "http://localhost:4200")
public class LocationController {
	@Autowired
	LocationRepo locationRepo;

	@PostMapping("/insert")
	public Location createLocation(@RequestBody Location location) {
		return locationRepo.save(location);
	}

	@GetMapping
	public List<Location> getAllLocation() {
		return locationRepo.findAll();
	}


	
   @DeleteMapping("/delete/{id}")
  public String  deleteLocationById(@PathVariable Long id) {
	   locationRepo.deleteById(id);
	   return "Location is deleted Successfully";
   }
   
   @GetMapping("/{id}")
	public ResponseEntity<Location> getLocationById(@PathVariable Long id) {
	    Location location = locationRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("Location not found"));
	    return ResponseEntity.ok(location);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Location> updateUser(@PathVariable Long id, @RequestBody Location locationDetails) {
	    Location location = locationRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("Loaction not found"));

	    location.setLocationName(locationDetails.getLocationName());


	    // Add other fields if any

	    Location updatedLocation = locationRepo.save(location);
	    return ResponseEntity.ok(updatedLocation);
	}
}



