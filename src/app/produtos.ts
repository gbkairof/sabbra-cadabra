import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  produtos = [
    { nome: 'Black Sabbath - Paranoid', preco: 99.90, codigo: 'black-sabbath_paranoid' },
    { nome: 'Black Sabbath - Master of Reality', preco: 89.90, codigo: 'black-sabbath_master-of-reality' },
    { nome: 'Black Sabbath - Vol 4', preco: 95.00, codigo: 'black-sabbath_vol-4' },
    { nome: 'Black Sabbath - Sabbath Bloody Sabbath', preco: 85.00, codigo: 'black-sabbath_sabbath-bloody-sabbath' }
  ];

  itensCesta = signal<any[]>([]);

  obterProdutos() {
    return this.produtos;
  }

  adicionarNaCesta(produto: any) {
    this.itensCesta.update(lista => {
      const itemExistente = lista.find(item => item.codigo === produto.codigo);

      if (itemExistente) {
        return lista.map(item => 
          item.codigo === produto.codigo 
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item
        );
      } else {
        return [...lista, { ...produto, quantidade: 1 }];
      }
    });
  }
  removerDaCesta(index: number) {
    this.itensCesta.update(lista => lista.filter((item, i) => i !== index));
  }
  limparCesta() {
    this.itensCesta.set([]);
  }
}