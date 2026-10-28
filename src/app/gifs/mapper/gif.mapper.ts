import { Gif } from "../interface/gif.interface";
import { GiphyItem } from "../interface/giphy.interfaces";

export class GifMapper {
    static maGiphyItemToGif(item: GiphyItem):Gif{
        return {
            id:item.id,
            title: item.title,
            url:item.images.original.url,
        }
    }
 
    static maGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
        return items.map(this.maGiphyItemToGif) 
            
        
    }


}