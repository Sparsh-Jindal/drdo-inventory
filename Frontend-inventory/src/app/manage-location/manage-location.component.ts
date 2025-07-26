import { Component } from '@angular/core';
import { Loco } from '../loco';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-manage-location',
  standalone: false,
  templateUrl: './manage-location.component.html',
  styleUrl: './manage-location.component.css',
})
export class ManageLocationComponent {
  locationList: Loco[] = [];
  constructor(private locationService: LocationService) {}
  ngOnInit() {
    this.showAllLocations();
  }
  showAllLocations() {
    this.locationService.displayAllLocations().subscribe((data) => {
      this.locationList = data;
    });
  }

  editLocation(location: Loco) {
    // Add your update logic here
  }

  deleteLocation(id?: number) {
    //will add logic later
  }
}
