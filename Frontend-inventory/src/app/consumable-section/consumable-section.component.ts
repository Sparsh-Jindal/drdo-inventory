import { Component } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-consumable-section',
  standalone: false,
  templateUrl: './consumable-section.component.html',
  styleUrl: './consumable-section.component.css',
})
export class ConsumableSectionComponent {
  filteredItems: InventoryItem[] = [];
  inventoryItems: InventoryItem[] = [];
  showType: string = '';

  constructor(private inventoryService: InventoryItemService) {}

  ngOnInit() {
    this.getAllItems();
  }

  showConsumable() {
    this.filteredItems = this.inventoryItems.filter(
      (item) => item.consumable === true
    );
    this.showType = 'Consumable';
  }

  showNonConsumable() {
    this.filteredItems = this.inventoryItems.filter(
      (item) => item.consumable === false
    );
    this.showType = 'Non-Consumable';
  }

  getAllItems() {
    this.inventoryService.displayAllItems().subscribe((data) => {
      this.inventoryItems = data;
    });
  }
}
