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
  error: boolean;
  msgError: string;

  constructor(private spotify: SpotifyService) {}

  searchArtist(search: string){
    this.loading = true;
    this.error = false;

    if(search.length > 0){
      this.spotify.getArtists(search)
        .subscribe( (data: any) => {
          this.artists = data;
          this.loading = false;
        }, (serviceError) => {
          this.error = true;
          this.loading = false;
          this.msgError = serviceError.error.error.message;
        });
    }else{
      this.loading = false;
    }
  }

}
