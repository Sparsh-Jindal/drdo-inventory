import { Component, OnInit } from '@angular/core'; // ✅ Add OnInit
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../location.service';
import { Loco } from '../loco';

@Component({
  selector: 'app-update-location',
  standalone: false,
  templateUrl: './update-location.component.html',
  styleUrl: './update-location.component.css',
})
export class UpdateLocationComponent implements OnInit {
  // ✅ Implement OnInit
  location: Loco = new Loco();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationService.getLocationById(this.id).subscribe((data) => {
      this.location = data;
    });
  }

  onSubmit(): void {
    this.locationService
      .updateLocation(this.id, this.location)
      .subscribe(() => {
        alert('✅ Location updated successfully!');
        this.router.navigate(['/manage-location']);
      });
  }
}
