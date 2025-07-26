import { ChangeDetectorRef, Component } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-item',
  standalone: false,
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css',
})
export class ManageItemComponent {
  inventoryItems: InventoryItem[] = [];
  msg: string = '';
  constructor(
    private inventoryItemService: InventoryItemService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.showAllItems();
  }
  showAllItems() {
    this.inventoryItemService.displayAllItems().subscribe((data) => {
      this.inventoryItems = data;
    });
  }

  deleteItem(id: number) {
    const confirmed = confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      this.inventoryItemService.deleteItem(id).subscribe((data) => {
        this.msg = data;

        alert('deleted Successfully');
        this.showAllItems(); // ✅ Refresh only after delete completes
        this.cdr.detectChanges();
      });
    }
  }
}
