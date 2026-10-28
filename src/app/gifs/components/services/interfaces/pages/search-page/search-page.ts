import { Component, inject, Query, QueryList, signal } from '@angular/core';
import { GifListComponent } from 'src/app/gifs/components/gif-list.component/gif-list.component';
import { GifService } from '../../../gifs.service';
import { Gif } from 'src/app/gifs/interface/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.html'
})
export  default class SearchPage {
  
  gifsService = inject(GifService)
  gifs = signal<Gif[]>([]);

  onSearch(query:string){
    this.gifsService.searchGifs(query).subscribe(resp =>{
       this.gifs.set(resp);
    }); 
  
  }
}
