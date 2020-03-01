import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent{

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }
  
  searchArtist(search: string){
    console.log(search);

    this.spotify.getArtist(search)
      .subscribe( (data: any) => {
        this.artists = data;
      });
  };

}
