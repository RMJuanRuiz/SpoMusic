import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.less']
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) { 
      this.loading = true;
      this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  async getArtist(id: string) {
    (await this.spotify.getArtist(id))
      .subscribe( artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  async getTopTracks(id: string){
    (await this.spotify.getArtistTopTracks(id))
      .subscribe( topTracks => {
        this.topTracks = topTracks;
        console.log(this.topTracks);
      })
  }

}
