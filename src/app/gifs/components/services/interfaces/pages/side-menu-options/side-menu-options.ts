import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../../gifs.service';

interface MenuOptions{
  icon:string;
  label:string;
  route:string;
  sublabel:string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

   gifservice = inject(GifService)


  menuOptions:MenuOptions[] = [
      {
        icon: 'fa-solid fa-chart-line',
        label:'trending',
        sublabel:'Gifs Populares',
        route:'/dashboard/treding'
      },
      {
        icon: 'fa-solid fa-magnifying-glass',
        label:'buscador',
        sublabel:'Buscar Gifs',
        route:'/dashboard/search'
      },
    ]
}
