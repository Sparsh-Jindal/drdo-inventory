package com.example.drdo.repository;





import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.drdo.entity.InventoryItem;





public interface InventoryItemRepo extends JpaRepository<InventoryItem, Long> {
	List<InventoryItem> findByCondemnedQtyGreaterThan(int quantity);
}


