import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases(){
    return this.getQueryConsult('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));
  }

  getArtist(search: string){
    return this.getQueryConsult(`search?q=${ search }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items)); 
  }

  getQueryConsult(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCLbXRaoaGmaPxF_BpeFItPEY5R0iH5QPY5F1R3Xd5xudt0epP7QIHaODYqIPOwkc5umHt0txkiFObfpVo'
    });

    return this.http.get(url, {headers});
  }
}
