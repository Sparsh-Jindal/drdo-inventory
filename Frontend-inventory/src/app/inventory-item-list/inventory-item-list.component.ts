import { Component } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable'; // ✅ Make sure it's named 'autoTable'

import { InventoryItem } from '../inventory-item';

@Component({
  selector: 'app-inventory-item-list',
  standalone: false,
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.css'],
})
export class InventoryItemListComponent {
  constructor(private inventoryItemService: InventoryItemService) {}

  ngOnInit() {
    this.getAllItems();
  }
  items: InventoryItem[] = [];
  getAllItems() {
    this.inventoryItemService.displayAllItems().subscribe((data) => {
      this.items = data;
    });
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.text('DRDO Inventory List', 14, 10);
    autoTable(doc, {
      head: [['S.No', 'Item', 'LF No', 'CRV No', 'Qty', 'Amount', 'User']],
      body: this.items.map((item, index) => [
        index + 1,
        item.itemName ?? 'N/A',
        item.lfNo ?? 'N/A',
        item.crvNo ?? 'N/A',
        item.quantity ?? 0,
        item.amount ?? 0,
        item.user?.userName ?? 'N/A',
      ]),
    });
    doc.save('inventory-list.pdf');
  }
}
