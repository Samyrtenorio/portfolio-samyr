// ============================================================
// DADOS DO PORTFÓLIO: baseado no currículo do Samyr.
// Revise os números antes de publicar: eles vieram do CV
// e devem bater com o que você consegue explicar em entrevista.
// Os itens entre [colchetes] são placeholders.
// ============================================================

export interface Experiencia {
  empresa: string;
  cliente?: string;
  cargo: string;
  periodo: string;
  realizacoes: string[];
}

export interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
}

export interface GrupoStack {
  grupo: string;
  itens: string[];
}

export interface Perfil {
  nome: string;
  titulo: string;
  resumo: string;
  localizacao: string;
  email: string;
  linkedin: string;
  github: string;
  foto: string;
  destaques: string[];
  stack: GrupoStack[];
  experiencias: Experiencia[];
  projetos: Projeto[];
  formacao: string[];
  certificacoes: string[];
  idiomas: string[];
}

export const PERFIL: Perfil = {
  nome: 'Samyr Akin Cavalcanti',
  titulo: 'Desenvolvedor Full Stack .NET | Angular',
  resumo:
    'Atuo há cerca de 5 anos com desenvolvimento de software como Desenvolvedor Full Stack .NET | Angular, construindo aplicações, APIs e soluções digitais para ambientes que exigem confiabilidade, desempenho e escalabilidade. Tenho experiência com APIs REST, microsserviços, BFF e integrações em plataformas financeiras, incluindo Open Banking e ambientes regulados.',
  localizacao: 'Brasil',
  email: 'samyrcavalcanti@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samyrakindotnet',
  github: 'https://github.com/Samyrtenorio',
  foto: 'assets/foto.jpg',
  destaques: [
    'Cerca de 5 anos desenvolvendo com .NET e Angular',
    'Modernização de sistemas legados para arquiteturas modernas (IBM)',
    'Micro Frontends e BFF para reduzir acoplamento e complexidade de integrações (Itaú, Decision Inc.)',
    'Open Banking e plataformas financeiras em ambientes regulados (CI&T)',
    'Mentoria de desenvolvedores Angular em componentes, RxJS e boas práticas',
  ],
  stack: [
    { grupo: 'Back-end e integrações', itens: ['C#', '.NET', '.NET Framework', 'ASP.NET Core', 'ASP.NET Web Forms', 'Entity Framework Core', 'APIs REST', 'Node.js', 'BFF', 'WCF', 'SOAP'] },
    { grupo: 'Front-end e experiência', itens: ['Angular', 'AngularJS', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'Micro Frontends', 'Performance Web'] },
    { grupo: 'Dados e infraestrutura', itens: ['SQL Server', 'PostgreSQL', 'Redis', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Kafka', 'GitHub Actions', 'CI/CD'] },
    { grupo: 'Arquitetura e engenharia', itens: ['Microservices', 'Clean Architecture', 'DDD', 'CQRS', 'SOLID', 'Design Patterns', 'Sistemas Distribuídos', 'Arquitetura de Software'] },
    { grupo: 'Qualidade, observabilidade e IA', itens: ['xUnit', 'Jest', 'Cypress', 'Testes unitários', 'Code Review', 'Observabilidade', 'OpenTelemetry', 'Git', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'GenAI'] },
  ],
  experiencias: [
    {
      empresa: 'Decision Inc.',
      cargo: 'Software Engineer Full Stack',
      periodo: 'maio de 2026 – atual',
      realizacoes: [
        'Desenvolvimento e evolução de aplicações financeiras de International Cash Management e pagamentos internacionais.',
        'Implementação de fluxos para cadastro, edição, consulta, aprovação e exclusão de beneficiários.',
        'Desenvolvimento de funcionalidades para gestão de bancos e dados bancários.',
        'Criação de componentes reutilizáveis e integração entre interfaces, APIs e serviços de negócio.',
      ],
    },
    {
      empresa: 'Zup Innovation',
      cliente: 'Itaú Unibanco',
      cargo: 'Senior Software Engineer / Full Stack',
      periodo: 'julho de 2025 – maio de 2026',
      realizacoes: [
        'Evolução de aplicações financeiras com JavaScript, TypeScript, Node.js, Micro Frontends, BFF e APIs REST.',
        'Arquitetura de Micro Frontends com cerca de 30% de ganho na velocidade de entrega.',
        'Adoção de BFF em Node.js com aproximadamente 40% menos complexidade de integração.',
        'Otimização de carregamento com melhora de até 25% em LCP e TTFB.',
      ],
    },
    {
      empresa: 'CI&T',
      cliente: 'Bradesco',
      cargo: 'Software Engineer Full Stack',
      periodo: 'fevereiro de 2025 – julho de 2025',
      realizacoes: [
        'Desenvolvimento de soluções de Open Banking e Open Finance com Angular, React, TypeScript, C# e .NET.',
        'Implementação de fluxos de consentimento, pagamentos, validações e integrações bancárias.',
        'Evolução de componentes monolíticos para microsserviços e integração entre front-end, APIs e serviços distribuídos.',
        'Redução de aproximadamente 15% no abandono do fluxo de consentimento.',
      ],
    },
    {
      empresa: 'IBM',
      cliente: 'Banco do Brasil',
      cargo: 'Software Engineer Full Stack',
      periodo: 'fevereiro de 2021 – fevereiro de 2025',
      realizacoes: [
        'Desenvolvimento e modernização de aplicações financeiras com C#, .NET Framework, ASP.NET, Angular, AngularJS, TypeScript e RxJS.',
        'Evolução de integrações REST, WCF, SOAP, SQL Server e Entity Framework Core em sistemas corporativos.',
        'Redução de aproximadamente 25% no tempo de entrega e melhoria de 35% em performance e confiabilidade.',
        'Desenvolvimento de dashboards associado a até 22% de aumento no engajamento dos usuários.',
      ],
    },
  ],
  projetos: [
    {
      nome: 'API CRUD com .NET',
      descricao: 'API REST para cadastro, consulta, atualização e inativação de pessoas, desenvolvida com ASP.NET Core Minimal APIs, Entity Framework Core e SQLite.',
      tecnologias: ['C#', '.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'SQLite', 'Swagger'],
      link: 'https://github.com/Samyrtenorio/api-dotnet',
    },
    {
      nome: 'Attus — Aplicação Angular',
      descricao: 'Aplicação Angular baseada em protótipo, com gerenciamento de usuários, busca reativa, formulários, Signals, NgRx, RxJS, Angular Material e testes unitários.',
      tecnologias: ['Angular 17+', 'TypeScript', 'Angular Material', 'RxJS', 'Signals', 'NgRx', 'Jest'],
      link: 'https://github.com/Samyrtenorio/Attus-project',
    },
    {
      nome: 'Dashboard com React',
      descricao: 'Dashboard responsivo que integra dados da API pública JSONPlaceholder, apresentando indicadores de usuários, posts e atividade por meio de uma interface organizada por componentes.',
      tecnologias: ['React', 'TypeScript', 'API REST', 'Async State', 'CSS'],
      link: 'https://github.com/Samyrtenorio/mock-api-dashboard',
    },
    {
      nome: 'Site Blockchain — Gama Academy',
      descricao: 'Landing page educativa sobre blockchain desenvolvida como projeto de formação da Gama Academy, com foco em apresentação visual, organização de conteúdo e implementação responsiva.',
      tecnologias: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Figma', 'Scrum'],
      link: 'https://github.com/Samyrtenorio/Site-blockchain',
    },
  ],
  formacao: [
    'Análise e Desenvolvimento de Sistemas, Descomplica Faculdade Digital (fevereiro de 2022 – setembro de 2026)',
  ],
  certificacoes: [
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'Achieve New Heights with Microsoft',
    'Gen AI, Copilot Mega Event (participante)',
    'IBM Agile Explorer',
    'Enterprise Design Thinking Practitioner (IBM)',
    'Docker Essentials: A Developer Introduction',
    'Data Structures & Algorithms, Levelup for Coding Interviews',
  ],
  idiomas: ['Português: nativo', 'Inglês: fluente (Full Professional)'],
};
