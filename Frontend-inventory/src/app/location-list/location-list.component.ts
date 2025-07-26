import { Component } from '@angular/core';
import { LocationService } from '../location.service';

import { Loco } from '../loco';

// import { Location } from '../location'; // ✅ Add this line

@Component({
  selector: 'app-location-list',
  standalone: false,
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent {
  locations: Loco[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.displayAllLocations();
  }
  displayAllLocations() {
    this.locationService.displayAllLocations().subscribe((data) => {
      this.locations = data;
    });
  }
}
