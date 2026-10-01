import { Component, inject, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProdutosService } from '../produtos';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  produtosService = inject(ProdutosService);
  roteador = inject(Router);
  
  itens = this.produtosService.itensCesta;

  total = computed(() => {
    return this.itens().reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
  });

  remover(index: number) {
    this.produtosService.removerDaCesta(index);
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso! O Sabbath agradece sua preferência.');    
    this.produtosService.limparCesta();   
    this.roteador.navigate(['/']);
  }
}