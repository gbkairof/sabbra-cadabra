import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ProdutosService } from '../produtos';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  roteador = inject(Router);
  produtosService = inject(ProdutosService);

  cliente = { nome: '', email: '', telefone: '', cpf: '' };

  finalizarCadastroECompra() {
    alert(`Conta criada e compra finalizada com sucesso!${this.cliente.nome}!`);
    
    this.produtosService.limparCesta();
    this.roteador.navigate(['/']);
  }
}