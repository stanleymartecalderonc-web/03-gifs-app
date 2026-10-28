import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importa el menú completo:
import { GifsSideMenu } from '../gifs-side-menu/gifs-side-menu'; // (o la ruta donde esté tu gifs-side-menu)

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenu], // 👈 ¡Solo estos dos!
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
