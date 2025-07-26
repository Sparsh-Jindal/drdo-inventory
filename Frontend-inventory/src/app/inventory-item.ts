export class InventoryItem {
  id?: number;
  itemName: string = '';
  lfNo: string = '';
  crvNo: string = '';
  quantity: number = 0;
  amount: number = 0;
  consumable: boolean = true;
  condemnedQty: number = 0;

  user: {
    id: number;
    userName: string;
    designation: string;
  } = { id: 0, userName: '', designation: '' };

  project: {
    id: number;
    projectName: string;
  } = { id: 0, projectName: '' };

  location: {
    id: number;
    locationName: string;
  } = { id: 0, locationName: '' };
}
