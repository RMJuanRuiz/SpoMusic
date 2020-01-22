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
      'Authorization': 'Bearer BQDDdyZZz_pNpI_ZZS-l0IS9JbMgdnmQm_z2GeiAA5chjlH-YGaaLbke6S7EKxh0h7udzRilhbyC6ULc4nk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=16', { headers}); 
  }

  getArtist(search: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDdyZZz_pNpI_ZZS-l0IS9JbMgdnmQm_z2GeiAA5chjlH-YGaaLbke6S7EKxh0h7udzRilhbyC6ULc4nk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ search }&type=artist&limit=15`, { headers}); 
  }
}
