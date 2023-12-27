import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent {
  locations = [
    { lat: 40.1824, lng: 29.0670, label: 'Bursa - Recycling Gate Pick-Up Station' },
    { lat: 38.4192, lng: 27.1287, label: 'Izmir - Recycling Gate Pick-Up Station' },
    { lat: 39.9334, lng: 32.8597, label: 'Ankara - Recycling Gate Pick-Up Station' },
    { lat: 41.0082, lng: 28.9784, label: 'Istanbul - Recycling Gate Pick-Up Station' },
  ];
}
