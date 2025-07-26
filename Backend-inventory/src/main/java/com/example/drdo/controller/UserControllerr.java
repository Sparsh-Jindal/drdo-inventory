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

import com.example.drdo.entity.User;
import com.example.drdo.repository.UserRepo;



@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserControllerr {

	@Autowired
	UserRepo userRepo;

	@PostMapping("/insert")
	public User createUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	

	@GetMapping
	public List<User> getallUser() {
		return userRepo.findAll();

	}
//
//	@GetMapping("/{id}")
//	public User getUserById(@PathVariable Long id) {
//		return userService.getUserById(id);
//	}
	
	@DeleteMapping("/delete/{id}")
	 public String	deleteUserById( @PathVariable Long id){
			userRepo.deleteById(id);
			return "User Deleted Successfully";
		 
		}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
	    User user = userRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("User not found"));
	    return ResponseEntity.ok(user);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
	    User user = userRepo.findById(id)
	        .orElseThrow(() -> new RuntimeException("User not found"));

	    user.setUserName(userDetails.getUserName());
	    user.setDesignation(userDetails.getDesignation());
	    // Add other fields if any

	    User updatedUser = userRepo.save(user);
	    return ResponseEntity.ok(updatedUser);
	}
		
		
	}
	
	

