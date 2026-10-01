import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../produtos'; 

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {
  produtosService = inject(ProdutosService);
  
  produtos = this.produtosService.obterProdutos();
}