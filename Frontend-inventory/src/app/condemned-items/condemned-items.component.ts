import { Component } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-condemned-items',
  standalone: false,
  templateUrl: './condemned-items.component.html',
  styleUrl: './condemned-items.component.css',
})
export class CondemnedItemsComponent {
  condemnedItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryItemService) {}

  ngOnInit() {
    this.inventoryService.getCondemnedItems().subscribe((data) => {
      this.condemnedItems = data;
    });
  }

  downloadPDF(): void {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Condemned Inventory Items', 14, 20);

    const headers = [['#', 'Item', 'L/F No', 'CRV No', 'Condemned Qty']];

    const data = this.condemnedItems.map((item, index) => [
      index + 1,
      item.itemName,
      item.lfNo,
      item.crvNo,
      item.condemnedQty,
    ]);

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 30,
    });

    doc.save('condemned-inventory.pdf');
  }
}
