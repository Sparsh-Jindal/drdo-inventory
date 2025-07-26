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

import com.example.drdo.entity.InventoryItem;
import com.example.drdo.entity.User;
import com.example.drdo.repository.InventoryItemRepo;

@RestController
@RequestMapping("/api/item")
@CrossOrigin(origins = "http://localhost:4200")
public class InventoryItemController {
	@Autowired
	InventoryItemRepo itemRepo;

	@PostMapping("/insert")
	public InventoryItem createItems(@RequestBody InventoryItem item) {
		return itemRepo.save(item);
	}

	@GetMapping
	public List<InventoryItem> getAllItems() {
		return itemRepo.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public String deleteItemById(@PathVariable Long id) {
		itemRepo.deleteById(id);
		return "Item is deleted Successfully";
	}

	@GetMapping("/condemned")
	public List<InventoryItem> getCondemnedtems() {
		return itemRepo.findByCondemnedQtyGreaterThan(0);
	}

	@GetMapping("/{id}")
	public ResponseEntity<InventoryItem> getItemById(@PathVariable Long id) {
		InventoryItem item = itemRepo.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
		return ResponseEntity.ok(item);
	}

	@PutMapping("/{id}")
	public InventoryItem updateItem(@PathVariable Long id, @RequestBody InventoryItem itemDetails) {
		InventoryItem item = itemRepo.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));

		item.setItemName(itemDetails.getItemName());
		item.setLfNo(itemDetails.getLfNo());
		item.setCrvNo(itemDetails.getCrvNo());
		item.setQuantity(itemDetails.getQuantity());
		item.setAmount(itemDetails.getAmount());
		item.setConsumable(itemDetails.isConsumable());
		item.setCondemnedQty(itemDetails.getCondemnedQty());
		item.setUser(itemDetails.getUser());
		item.setProject(itemDetails.getProject());
		item.setLocation(itemDetails.getLocation());

		return itemRepo.save(item);
	}

}
