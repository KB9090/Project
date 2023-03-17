import { SpotifyService } from '../spotify.service';
import { Subject } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls:  ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent {
  public searchStr: any;
  listOfMusic = null;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();
  constructor(private spotifyService: SpotifyService) {}

  searchSong() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      (response: any) => {
        console.log(response);
        this.listOfMusic = response.artists.items;
        console.log(this.listOfMusic, 'Result');
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }
}

