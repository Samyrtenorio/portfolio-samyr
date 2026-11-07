import { Component } from '@angular/core';
import { PERFIL } from '../../data/profile';
import { I18nService } from '../../i18n/i18n';

@Component({
  selector: 'app-contato',
  standalone: true,
  template: `
    <section class="contact-layout">
      <header class="page-header contact-header">
        <span>{{ i18n.t().contact.kicker }}</span>
        <h1>{{ i18n.t().contact.title }}</h1>
        <p>{{ i18n.t().contact.intro }}</p>
      </header>
      <div class="contact-options">
        <a class="contact-card" [href]="'mailto:' + perfil.email" [attr.aria-label]="i18n.t().contact.emailLabel">
          <span>{{ i18n.t().contact.email }}</span><strong>{{ perfil.email }}</strong><b aria-hidden="true">↗</b>
        </a>
        <a class="contact-card" [href]="perfil.linkedin" target="_blank" rel="noopener" [attr.aria-label]="i18n.t().contact.linkedinLabel">
          <span>LinkedIn</span><strong>{{ i18n.t().contact.linkedinAction }}</strong><b aria-hidden="true">↗</b>
        </a>
        <a class="contact-card" [href]="perfil.github" target="_blank" rel="noopener" [attr.aria-label]="i18n.t().contact.githubLabel">
          <span>GitHub</span><strong>{{ i18n.t().contact.githubAction }}</strong><b aria-hidden="true">↗</b>
        </a>
      </div>
    </section>
  `,
})
export class ContatoComponent {
  perfil = PERFIL;
  constructor(public i18n: I18nService) {}
}
