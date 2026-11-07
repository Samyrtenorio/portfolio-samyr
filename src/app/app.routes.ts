import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'experiencia', loadComponent: () => import('./pages/experiencia/experiencia.component').then(m => m.ExperienciaComponent) },
  { path: 'projetos', loadComponent: () => import('./pages/projetos/projetos.component').then(m => m.ProjetosComponent) },
  { path: 'contato', loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent) },
  { path: '**', redirectTo: '' },
];
