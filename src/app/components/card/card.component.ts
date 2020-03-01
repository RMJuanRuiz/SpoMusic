import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  watchArtist(item:any){

    let artistId: number;

    if( item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistId]);
  }

}
