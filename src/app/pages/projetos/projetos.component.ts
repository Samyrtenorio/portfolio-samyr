import { Component } from '@angular/core';
import { PERFIL } from '../../data/profile';
import { I18nService } from '../../i18n/i18n';

@Component({
  selector: 'app-projetos',
  standalone: true,
  template: `
    <header class="page-header">
      <span>{{ i18n.t().projects.kicker }}</span>
      <h1>{{ i18n.t().projects.title }}</h1>
      <p>{{ i18n.t().projects.intro }}</p>
    </header>
    @if (projetos.length === 0) {
      <p class="empty-state">{{ i18n.t().projects.noProjects }}</p>
    }
    <div class="project-grid">
      @for (p of projetos; track $index; let index = $index) {
        <article class="cartao project-card">
          <div class="project-topline"><span>{{ i18n.t().projects.projectLabel }}</span><span>0{{ index + 1 }}</span></div>
          <h2>{{ i18n.t().projects.items[index]?.name ?? p.nome }}</h2>
          <p>{{ i18n.t().projects.items[index]?.description ?? p.descricao }}</p>
          <h3>{{ i18n.t().projects.stackLabel }}</h3>
          <div class="tags">
            @for (t of p.tecnologias; track t) { <span class="tag">{{ t }}</span> }
          </div>
          @if (p.link) {
            <a class="project-link" [href]="p.link" target="_blank" rel="noopener" [attr.aria-label]="i18n.t().projects.openGithub.replace('{name}', i18n.t().projects.items[index]?.name ?? p.nome)">
              {{ i18n.t().projects.viewCode }} <span aria-hidden="true">↗</span>
            </a>
          }
        </article>
      }
    </div>
    <aside class="project-note">
      <h2>{{ i18n.t().projects.futureTitle }}</h2>
      <p>{{ i18n.t().projects.futureText }}</p>
    </aside>
  `,
})
export class ProjetosComponent {
  projetos = PERFIL.projetos;
  constructor(public i18n: I18nService) {}
}
