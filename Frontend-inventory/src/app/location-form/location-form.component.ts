import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { Loco } from '../loco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-form',
  standalone: false,
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.css',
})
export class LocationFormComponent {
  location: Loco = new Loco();
  successMessage: string = '';
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  onSubmit() {
    this.createLocation();
  }
  createLocation() {
    this.locationService.addLocation(this.location).subscribe((data) => {
      console.log(data);
      this.successMessage = '✅ New item added successfully!';
      setTimeout(() => {
        this.router.navigate(['/manage-location']);
      }, 3000);
    });
  }
}
