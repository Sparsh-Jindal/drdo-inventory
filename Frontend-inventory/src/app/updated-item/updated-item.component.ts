import { Component } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updated-item',
  standalone: false,
  templateUrl: './updated-item.component.html',
  styleUrl: './updated-item.component.css',
})
export class UpdatedItemComponent {
  item: InventoryItem = new InventoryItem();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private inventoryItemService: InventoryItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventoryItemService.getItemById(this.id).subscribe((data) => {
      this.item = data;
    });
  }

  onSubmit(): void {
    this.inventoryItemService.updateItem(this.id, this.item).subscribe(() => {
      alert('✅ Inventory item updated successfully!');
      this.router.navigate(['/manage-item']);
    });
  }
}
