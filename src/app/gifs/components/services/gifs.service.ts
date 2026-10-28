import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "src/environments/environment";
import type { GiphyResponse } from "../../interface/giphy.interfaces";
import { Gif } from "../../interface/gif.interface";
import { GifMapper } from "../../mapper/gif.mapper";
import { map, tap } from "rxjs";

@Injectable ({providedIn:'root'})
export class GifService {


    private http = inject(HttpClient);



    tredingGifs= signal<Gif[]>([])
    tredingGifsLoading = signal(true);

    searchHistory = signal<Record<string,Gif[]>>({})
    searcHistoryKeys = computed(()=>Object.keys(this.searchHistory()))

    constructor() {
        this.loadTredingGifs();
        console.log('Servicio creado')
    }

    loadTredingGifs(){
        this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`,{
            params:{
                api_key: environment.giphyApiKey,
                limit:20,
            }
        })
        .subscribe((resp)=>{
             const gifs = GifMapper.maGiphyItemsToGifArray(resp.data);
             this.tredingGifs.set(gifs);
             this.tredingGifsLoading.set(false);
             console.log({gifs});
        })

    }
    searchGifs(query:string){
        return this.http
        .get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`,{
            params:{
                api_key: environment.giphyApiKey,
                limit:20,
                q:query,
            }
        })
        .pipe(
            map(({data})=>data ),
            map((items) => GifMapper.maGiphyItemsToGifArray(items) ),

            // Historial
            tap(items => {
               this.searchHistory.update(history => ({
                ...history,
                [query.toLowerCase()]: items,
               }))
            })
        ); 
        // .subscribe((resp)=>{
        //      const gifs = GifMapper.maGiphyItemsToGifArray(resp.data);
        //      console.log({Search:gifs});
        // })
    }
}