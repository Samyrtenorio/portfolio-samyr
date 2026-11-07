import { Component } from '@angular/core';
import { PERFIL } from '../../data/profile';
import { I18nService } from '../../i18n/i18n';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  template: `
    <header class="page-header">
      <span>{{ i18n.t().experience.kicker }}</span>
      <h1>{{ i18n.t().experience.title }}</h1>
      <p>{{ i18n.t().experience.intro }}</p>
    </header>
    <div class="timeline">
      @for (exp of experiencias; track $index; let index = $index) {
        <article class="cartao experience-card">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="experience-header">
            <div>
              <h2>{{ i18n.t().experience.items[index].role }}</h2>
              <p class="company">{{ exp.empresa }}</p>
              @if (exp.cliente) { <p class="client">{{ i18n.t().experience.client }}: {{ exp.cliente }}</p> }
            </div>
            <p class="meta">{{ i18n.t().experience.items[index].period }}</p>
          </div>
          <ul>
            @for (result of i18n.t().experience.items[index].results; track $index) {
              <li>{{ result }}</li>
            }
          </ul>
        </article>
      }
    </div>
  `,
})
export class ExperienciaComponent {
  experiencias = PERFIL.experiencias;
  constructor(public i18n: I18nService) {}
}
