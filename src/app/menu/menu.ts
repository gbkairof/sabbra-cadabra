import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../produtos';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  produtosService = inject(ProdutosService);
}