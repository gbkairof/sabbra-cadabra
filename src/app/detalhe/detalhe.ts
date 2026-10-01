import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; 
import { ProdutosService } from '../produtos';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css'
})
export class Detalhe {
  rota = inject(ActivatedRoute);
  roteador = inject(Router);
  produtosService = inject(ProdutosService);
  
  produto: any;

  constructor() {
    const codigoUrl = this.rota.snapshot.paramMap.get('codigo');
    const lista = this.produtosService.obterProdutos();
    this.produto = lista.find(item => item.codigo === codigoUrl);
  }

  adicionar() {
    this.produtosService.adicionarNaCesta(this.produto);
    
    this.roteador.navigate(['/cesta']); 
  }
}