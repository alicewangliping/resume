import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements AfterViewInit, OnInit {
  ngOnInit() {
    this.loadGoogleMapsScript();
  }

  ngAfterViewInit() {
    this.initMap();
  }

  loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  initMap() {
    
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 12
    });

   
  }
}
