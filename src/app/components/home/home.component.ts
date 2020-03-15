import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  msgError: string;

  constructor( private spotify: SpotifyService){
    this.loading = true;
    this.error = false;
  }

  ngOnInit(){
    this.getNewReleases();
  }
  
  async getNewReleases(){
    (await this.spotify.getNewReleases()).subscribe( (data: any ) => {
      this.newSongs = data;
      this.loading = false;
    }, ( serviceError ) => {
      this.error = true;
      this.loading = false;
      this.msgError = serviceError.error.error.message;
    });
  }

}
