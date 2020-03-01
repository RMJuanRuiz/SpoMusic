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

  getArtists(search: string){
    return this.getQueryConsult(`search?q=${ search }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }

  getArtist(id: string){
    return this.getQueryConsult(`artists/${ id }`);
  }

  getArtistTopTracks(id: string){
    return this.getQueryConsult(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( data => data['tracks'])); 
  }

  getQueryConsult(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAHsJS4EnXeJcRtC9y6GrGTf40l9hGwFPzPo8c3LtdsAa3Ks6Sum2IcLlCxAkiOH1PeH3k209fvi8C1VYU'
    });

    return this.http.get(url, {headers});
  }
}
