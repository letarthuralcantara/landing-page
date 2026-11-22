import './styles.css';

const github = 'https://github.com/letarthuralcantara';
const linkedin = 'https://www.linkedin.com/in/arthur-alc%C3%A2ntara-3626a0267/';
const backstage = 'https://github.com/letarthuralcantara/backstage_cena';
const dafe = 'https://github.com/letarthuralcantara/projeto_dafe';
const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#inicio">Arthur Alcântara</a>
    <nav class="site-nav" id="site-nav" aria-label="Navegação principal">
      <a href="#redes">Redes</a><a href="#dafe">D.A.F.E.</a><a href="#backstage">Backstage Cena</a><a href="#contato">Contato</a>
    </nav>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
  </header>

  <main>
    <section id="inicio" class="hero page-width">
      <div class="hero-heading"><div class="hero-copy"><h1>Arthur<br />Alcântara</h1><p>Técnico em informática em João Pessoa.<br />Redes, automação e web.</p><div class="hero-links"><a class="button" href="${github}" target="_blank" rel="noreferrer">GitHub</a><a class="button button-light" href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div>
    </section>

    <section id="redes" class="section page-width">
      <div class="section-intro"><div><h2>Laboratórios de redes</h2><p>Práticas no Cisco Packet Tracer. Selecione um laboratório para ver a topologia e a configuração.</p></div></div>
      <div class="network-workbench">
        <div class="network-tabs" role="tablist" aria-label="Laboratórios de redes"><button class="network-tab is-selected" id="tab-vlan" role="tab" aria-selected="true" aria-controls="panel-vlan" data-lab="vlan">VLAN, DHCP e STP</button><button class="network-tab" id="tab-eigrp" role="tab" aria-selected="false" aria-controls="panel-eigrp" data-lab="eigrp">EIGRP com switches L3</button><button class="network-tab" id="tab-ospf" role="tab" aria-selected="false" aria-controls="panel-ospf" data-lab="ospf">OSPF com MD5 e SSH</button></div>
        <div class="network-panel" id="panel-vlan" role="tabpanel" aria-labelledby="tab-vlan">
          <div class="network-copy"><h3>VLAN, DHCP e STP</h3><p>Segmentação da rede, distribuição de endereços e prevenção de loops.</p><ul><li>Configuração de VLANs</li><li>DHCP</li><li>Spanning Tree Protocol</li></ul></div><div class="topology-area"><svg class="topology-svg" viewBox="0 0 520 190" role="img" aria-label="Topologia com roteador, switch e computadores"><path d="M94 78H226M294 78H426M260 96V145M168 96V145M352 96V145"/><rect x="48" y="52" width="92" height="50" rx="4"/><text x="94" y="82">Roteador</text><rect x="226" y="52" width="68" height="50" rx="4"/><text x="260" y="82">Switch</text><rect x="426" y="52" width="46" height="50" rx="4"/><text x="449" y="82">DHCP</text><circle cx="168" cy="158" r="20"/><text x="168" y="162">PC 1</text><circle cx="260" cy="158" r="20"/><text x="260" y="162">PC 2</text><circle cx="352" cy="158" r="20"/><text x="352" y="162">PC 3</text></svg><div class="network-media"><div class="image-slot"><img src="/rede-vlan.png" alt="Print real da topologia VLAN, DHCP e STP" hidden onload="this.hidden=false;this.nextElementSibling.hidden=true" onerror="this.hidden=true;this.nextElementSibling.hidden=false" /><span class="image-placeholder">Adicione <strong>rede-vlan.png</strong> na pasta <strong>public/</strong></span></div><a class="download-link" href="/rede-vlan.png" download>Baixar imagem</a></div></div>
        </div>
        <div class="network-panel is-hidden" id="panel-eigrp" role="tabpanel" aria-labelledby="tab-eigrp" hidden>
          <div class="network-copy"><h3>EIGRP com switches L3</h3><p>Roteamento dinâmico entre switches de camada 3.</p><ul><li>Roteamento EIGRP</li><li>Switches de camada 3</li><li>Comunicação entre redes</li></ul></div><div class="topology-area"><svg class="topology-svg" viewBox="0 0 520 190" role="img" aria-label="Topologia com dois switches de camada 3 e computadores"><path d="M104 82H216M304 82H416M260 105V146M110 105V146M410 105V146"/><rect x="48" y="57" width="112" height="50" rx="4"/><text x="104" y="87">Switch L3</text><rect x="216" y="57" width="88" height="50" rx="4"/><text x="260" y="87">EIGRP</text><rect x="360" y="57" width="112" height="50" rx="4"/><text x="416" y="87">Switch L3</text><circle cx="110" cy="160" r="20"/><text x="110" y="164">A</text><circle cx="260" cy="160" r="20"/><text x="260" y="164">B</text><circle cx="410" cy="160" r="20"/><text x="410" y="164">C</text></svg><div class="network-media"><div class="image-slot"><img src="/rede-eigrp.png" alt="Print real da topologia EIGRP" hidden onload="this.hidden=false;this.nextElementSibling.hidden=true" onerror="this.hidden=true;this.nextElementSibling.hidden=false" /><span class="image-placeholder">Adicione <strong>rede-eigrp.png</strong> na pasta <strong>public/</strong></span></div><a class="download-link" href="/rede-eigrp.png" download>Baixar imagem</a></div></div>
        </div>
        <div class="network-panel is-hidden" id="panel-ospf" role="tabpanel" aria-labelledby="tab-ospf" hidden>
          <div class="network-copy"><h3>OSPF com MD5 e SSH</h3><p>Roteamento OSPF com autenticação e acesso administrativo seguro.</p><ul><li>Roteamento OSPF</li><li>Autenticação MD5</li><li>Acesso por SSH</li></ul></div><div class="topology-area"><svg class="topology-svg" viewBox="0 0 520 190" role="img" aria-label="Topologia com dois roteadores e autenticação"><path d="M112 80H408M260 105V145"/><rect x="52" y="55" width="120" height="50" rx="4"/><text x="112" y="85">Roteador 1</text><rect x="348" y="55" width="120" height="50" rx="4"/><text x="408" y="85">Roteador 2</text><circle cx="260" cy="82" r="28"/><text x="260" y="78">MD5</text><text x="260" y="91">SSH</text><circle cx="260" cy="160" r="20"/><text x="260" y="164">LAN</text></svg><div class="network-media"><div class="image-slot"><img src="/rede-ospf.png" alt="Print real da topologia OSPF" hidden onload="this.hidden=false;this.nextElementSibling.hidden=true" onerror="this.hidden=true;this.nextElementSibling.hidden=false" /><span class="image-placeholder">Adicione <strong>rede-ospf.png</strong> na pasta <strong>public/</strong></span></div><a class="download-link" href="/rede-ospf.png" download>Baixar imagem</a></div></div>
        </div>
      </div>
    </section>

    <section id="dafe" class="section section-dark page-width">
      <div class="section-intro"><div><h2>D.A.F.E.</h2><p>Desligamento Automático de Ferro de Engomar.</p></div></div>
      <div class="dafe-grid"><div class="dafe-text"><p>O D.A.F.E. acompanha a movimentação do ferro por meio do giroscópio e acelerômetro MPU-6050. Quando o protótipo permanece parado por um intervalo definido, o Arduino interpreta a inatividade como possível esquecimento e aciona o relé para interromper a alimentação do aparelho e do LED.</p><p>O objetivo é reduzir riscos de queimaduras e incêndios, além de evitar consumo desnecessário de energia. O projeto foi desenvolvido por uma equipe de 5 estudantes do IFPB Campus Santa Rita e apresentado na IX Semana de Eventos Integrados e na 77ª Reunião Anual da SBPC, em Recife, em 2025.</p><p class="small-note">Segure o botão para simular o movimento do ferro. Ao soltar, o sistema inicia a contagem até o relé cortar a energia.</p><div class="dafe-parts"><span>Arduino Nano</span><span>MPU-6050</span><span>Relé</span><span>LED</span></div><a class="repo-link dafe-repo" href="${dafe}" target="_blank" rel="noreferrer">Abrir repositório do D.A.F.E.</a></div><div class="simulator" aria-live="polite"><div class="simulator-status"><span class="status-light" id="status-light"></span><span id="simulator-status">Aguardando ação</span></div><div class="iron-stage"><div class="iron" id="iron" aria-hidden="true"><span class="iron-handle"></span><span class="iron-body"></span><span class="iron-sole"></span></div><span class="stage-line"></span></div><div class="countdown" id="countdown">—</div><button class="hold-button" id="hold-button" type="button">Segure para mover o ferro</button></div></div>
    </section>

    <section id="backstage" class="section page-width backstage-section"><div class="section-intro"><div><h2>Backstage Cena</h2><p>O repositório está disponível no GitHub.</p></div></div><div class="backstage-content"><p>Plataforma web para músicos independentes se encontrarem por perfil, instrumento, gênero ou DAW. Reúne feed, clubes com chat e Work Ons para organizar projetos com faixas, tarefas, capas e membros.</p><p>O projeto inclui cadastro em etapas, login com JWT, recuperação de senha, privacidade de perfil, upload de imagens e áudio, integração com Spotify e Last.fm e testes unitários, de API, front-end e ponta a ponta.</p><div class="stack"><span>Node.js</span><span>Express</span><span>TypeScript</span><span>SQLite</span><span>Prisma</span><span>JWT</span><span>Argon2</span><span>Zod</span><span>Multer</span><span>Vitest</span><span>Supertest</span><span>Playwright</span></div><a class="repo-link" href="${backstage}" target="_blank" rel="noreferrer">Abrir repositório</a></div></section>

    <section id="contato" class="contact page-width"><h2>Contato</h2><div class="contact-links"><a href="${github}" target="_blank" rel="noreferrer">GitHub</a><a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></div></section>
  </main>
`;

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => { const open = siteNav.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(open)); });
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { siteNav.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false'); }));

document.querySelectorAll('.network-tab').forEach((tab) => tab.addEventListener('click', () => {
  const lab = tab.dataset.lab;
  document.querySelectorAll('.network-tab').forEach((item) => { const selected = item === tab; item.classList.toggle('is-selected', selected); item.setAttribute('aria-selected', String(selected)); });
  document.querySelectorAll('.network-panel').forEach((panel) => { const show = panel.id === `panel-${lab}`; panel.hidden = !show; panel.classList.toggle('is-hidden', !show); });
}));

const holdButton = document.querySelector('#hold-button');
const iron = document.querySelector('#iron');
const simulatorStatus = document.querySelector('#simulator-status');
const countdown = document.querySelector('#countdown');
const statusLight = document.querySelector('#status-light');
let countdownTimer;
let holding = false;
function startHolding(event) { event?.preventDefault(); if (holding) return; clearInterval(countdownTimer); holding = true; iron.classList.add('is-moving'); statusLight.className = 'status-light is-on'; simulatorStatus.textContent = 'Ferro em movimento'; countdown.textContent = '—'; }
function stopHolding() { if (!holding) return; holding = false; iron.classList.remove('is-moving'); let seconds = 3; simulatorStatus.textContent = `Corte em ${seconds}`; countdown.textContent = seconds; clearInterval(countdownTimer); countdownTimer = setInterval(() => { seconds -= 1; if (seconds > 0) { simulatorStatus.textContent = `Corte em ${seconds}`; countdown.textContent = seconds; return; } clearInterval(countdownTimer); countdown.textContent = '0'; simulatorStatus.textContent = 'Relé cortou a energia'; statusLight.className = 'status-light is-off'; }, 1000); }
holdButton.addEventListener('pointerdown', startHolding); document.addEventListener('pointerup', stopHolding); document.addEventListener('pointercancel', stopHolding);
holdButton.addEventListener('keydown', (event) => { if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) startHolding(event); });
holdButton.addEventListener('keyup', (event) => { if (event.key === ' ' || event.key === 'Enter') stopHolding(); });
