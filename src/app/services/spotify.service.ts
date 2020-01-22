import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotifyservicerunning...');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBbr1puL53qrH4Q36kwEDmQjTRgmPytlGSHjuZFWNl2MsiFm2KzYDDPllbiFOkh21vm1CiVXaFCSxkvVeI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=16', { headers}); 
  }
}
