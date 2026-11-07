import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PERFIL } from '../../data/profile';
import { I18nService } from '../../i18n/i18n';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <div class="foto-wrap">
        <img class="foto" [src]="perfil.foto" [alt]="i18n.t().home.photoAlt" />
      </div>
      <div class="hero-copy">
        <span class="eyebrow">{{ i18n.t().home.availability }}</span>
        <h1 id="hero-title">{{ perfil.nome }}</h1>
        <p class="titulo">{{ i18n.t().home.title }}</p>
        <p class="local">{{ i18n.t().location }}</p>
        <div class="hero-actions">
          <a class="button-primary" routerLink="/projetos">{{ i18n.t().home.viewProjects }}</a>
          <a class="button-secondary" routerLink="/contato">{{ i18n.t().home.contact }}</a>
        </div>
      </div>
    </section>

    <section class="summary-card" aria-label="{{ i18n.t().home.summaryLabel }}">
      <span>{{ i18n.t().home.executiveProfile }}</span>
      <p class="resumo">{{ i18n.t().home.summary }}</p>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <span>{{ i18n.t().home.differentiatorsLabel }}</span>
        <h2>{{ i18n.t().home.highlights }}</h2>
      </div>
      <div class="highlight-grid">
        @for (item of i18n.t().home.highlightsItems; track $index) {
          <article class="highlight-card"><span class="highlight-index">0{{ $index + 1 }}</span><p>{{ item }}</p></article>
        }
      </div>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <span>{{ i18n.t().home.technologyLabel }}</span>
        <h2>{{ i18n.t().home.stack }}</h2>
      </div>
      @for (grupo of perfil.stack; track $index; let groupIndex = $index) {
        <div class="stack-group">
          <h3>{{ i18n.t().home.stackGroups[groupIndex] }}</h3>
          <div class="tags">
            @for (item of grupo.itens; track item) { <span class="tag">{{ item }}</span> }
          </div>
        </div>
      }
    </section>

    <section class="content-section two-column">
      <article class="info-card">
        <h2>{{ i18n.t().home.education }}</h2>
        <ul>
          @for (item of i18n.t().home.educationItems; track $index) { <li>{{ item }}</li> }
        </ul>
        <h3>{{ i18n.t().home.certificationsTitle }}</h3>
        <ul>
          @for (item of i18n.t().home.certifications; track $index) { <li>{{ item }}</li> }
        </ul>
      </article>
      <article class="info-card">
        <h2>{{ i18n.t().home.languages }}</h2>
        <ul>
          @for (item of i18n.t().home.languagesItems; track $index) { <li>{{ item }}</li> }
        </ul>
      </article>
    </section>
  `,
})
export class HomeComponent {
  perfil = PERFIL;
  constructor(public i18n: I18nService) {}
}
