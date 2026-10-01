import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Detalhe } from './detalhe/detalhe';
import { Cesta } from './cesta/cesta';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Esqueci } from './esqueci/esqueci'; 
import { Busca } from './busca/busca';       

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'detalhe/:codigo', component: Detalhe },
  { path: 'cesta', component: Cesta },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci', component: Esqueci },   
  { path: 'busca/:texto', component: Busca }       
];