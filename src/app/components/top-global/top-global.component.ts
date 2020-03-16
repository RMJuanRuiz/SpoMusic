import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-top-global',
  templateUrl: './top-global.component.html',
  styleUrls: ['./top-global.component.less']
})
export class TopGlobalComponent{

  topGlobal: any[] = [];
  loading: boolean;
  error: boolean;
  msgError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.getTopGlobal();
  }

  async getTopGlobal(){
    (await this.spotify.getTopGlobal()).subscribe( (data: any ) => {
      this.topGlobal = data;
      this.loading = false;
    }, ( serviceError ) => {
      this.error = true;
      this.loading = false;
      this.msgError = serviceError.error.error.message;
    });
  }

  watchSongOnSpotify(item:any){
    window.open(item.track.external_urls.spotify, '_blank');
  }

}
