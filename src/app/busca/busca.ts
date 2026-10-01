import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService } from '../produtos';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca implements OnInit {
  rotaAtiva = inject(ActivatedRoute);
  produtosService = inject(ProdutosService);
  
  termoBuscado: string = '';
  produtosFiltrados: any[] = []; 

ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(params => {
      this.termoBuscado = params.get('texto') || '';
      
      console.log('Termo recebido na rota de Busca:', this.termoBuscado);
      
      if (this.termoBuscado) {
        const termo = this.termoBuscado.toLowerCase().trim();
        
        this.produtosFiltrados = this.produtosService.produtos.filter((p: any) => {
          const nomeProduto = p.nome ? p.nome.toLowerCase() : '';
          const descricaoProduto = p.descricao ? p.descricao.toLowerCase() : '';
          
          return nomeProduto.includes(termo) || descricaoProduto.includes(termo);
        });

        console.log('Produtos filtrados com sucesso:', this.produtosFiltrados);
      }
    });
  }
}