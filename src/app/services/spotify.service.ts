import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  async getNewReleases(){
    const obs = await this.getQueryConsult('browse/new-releases?limit=20');
    return obs.pipe( map( data => data['albums'].items));
  }

  async getTopGlobal(){
    const obs = await this.getQueryConsult('playlists/37i9dQZEVXbMDoHDwVN2tF');
    return obs.pipe( map( data => data['tracks'].items));
  }

  async getArtists(search: string){
    const obs = await this.getQueryConsult(`search?q=${ search }&type=artist&limit=15`);    
    return obs.pipe( map( data => data['artists'].items));
  }

  async getArtist(id: string){
    return await this.getQueryConsult(`artists/${ id }`);
  }

  async getArtistTopTracks(id: string){
    const obj = await this.getQueryConsult(`artists/${ id }/top-tracks?country=us`);
    return obj.pipe( map( data => data['tracks']));
  }

  async getQueryConsult(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const token = await this.getAccessToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(url, {headers});
  }

  getAccessToken(){
    const clientId = '6b3862f501dd416cbf6e31995e2b4ccf';
    const clientSecret = 'd4ccfb7ff8664b708849710e77cfda34';
    const url = `https://spomusic-backend.herokuapp.com/spotify/${clientId}/${clientSecret}`;

    return this.http.get(url).toPromise().then((data: any) => data.access_token);
  }
}
