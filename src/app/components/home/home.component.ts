import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  
  newSongs: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService){
  
    this.loading = true;
  
    this.spotify.getNewReleases().subscribe( (data: any )=> {
      this.newSongs = data;
      this.loading = false;
    });
  }

}
