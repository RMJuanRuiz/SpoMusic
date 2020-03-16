import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import {TopGlobalComponent} from './components/top-global/top-global.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'topGlobal', component: TopGlobalComponent},
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]