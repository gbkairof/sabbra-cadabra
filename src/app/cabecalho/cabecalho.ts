import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  roteador = inject(Router);

  pesquisar(texto: string) {
    console.log('1. O botão OK foi clicado!');
    console.log('2. Texto capturado da barra:', texto);

    if (texto.trim() !== '') {
      console.log('3. Texto válido! Redirecionando para a rota de busca...');
      this.roteador.navigate(['/busca', texto]);
    } else {
      console.log('3. Erro: O campo estava vazio, a navegação foi cancelada.');
    }
  }
}