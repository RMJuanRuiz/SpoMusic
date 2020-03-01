import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent{

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  searchArtist(search: string){
    this.loading = true;

    if(search.length > 0){
      this.spotify.getArtists(search)
        .subscribe( (data: any) => {
          this.artists = data;
          this.loading = false;
        });
    }else{
      this.loading = false;
    }
  }

}
