import { Component, OnInit } from '@angular/core';
import { Store } from '../@shared/models/store';
import { StepsService } from '../@shared/services/steps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: [ './maps.component.scss' ],
})
export class MapsComponent implements OnInit {
  options: { latitude: number; longitude: number; zoom: number };
  markers: { latitude: number; longitude: number; store: Store }[] = [];
  selectedStore: Store;
  showDialog = false;
  showGoogleMaps = navigator.onLine;

  constructor(private service: StepsService) {}

  ngOnInit(): void {
    this.buildGoogleMapsOptions();
  }

  onMapReady() {
    this.buildMarkers();
  }

  onMarkerClick(index: number) {
    this.selectedStore = this.markers[index].store;
    this.showDialog = true;
  }

  onChooseStoreClick() {
    this.showDialog = false;
    this.service.saveStepStore(this.selectedStore);
  }

  private buildGoogleMapsOptions() {
    this.options = {
      latitude: -12.0552477,
      longitude: -77.0802423,
      zoom: 14,
    };
  }

  private buildMarkers() {
    let marker = {
      latitude: -12.0552477,
      longitude: -77.0802423,
      store: { id: 1, name: 'Store name', address: 'Store address' },
    };
    this.markers.push(marker);
    marker = {
      latitude: -12.0502477,
      longitude: -77.0782423,
      store: { id: 2, name: 'Store name', address: 'Store address' },
    };
    this.markers.push(marker);
    marker = {
      latitude: -12.0502477,
      longitude: -77.0702423,
      store: { id: 3, name: 'Store name', address: 'Store address' },
    };
    this.markers.push(marker);
  }
}
