package com.example.drdo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class InventoryItem {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	private Long id;
	private String itemName;
	private String lfNo;
	private String crvNo;
	private int quantity;
	private double amount;
	private boolean consumable;
	private int condemnedQty;

	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="project_id")
	private Project project;
	
	@ManyToOne
	@JoinColumn(name="location_id")
	private Location location;
	
	
	
	
}
