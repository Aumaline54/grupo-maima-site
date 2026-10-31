// Traduções do site (PT / FR / EN). Para alterar um texto, edite aqui.
const I18N = {
  fr: {
    'nav.about': 'À propos', 'nav.companies': 'Sociétés', 'nav.areas': 'Activités', 'nav.markets': 'Où nous opérons', 'nav.contact': 'Contacts',
    'hero.eyebrow': 'Luanda · Angola',
    'hero.title': 'Commerce, logistique et infrastructures en Angola et dans la région des Congo',
    'hero.lead': 'Le Groupe Maíma réunit MAÍMA (SU), LDA et M.Maíma Transitário, LDA, actives dans le commerce général, l’import-export, le transit, l’agriculture, l’industrie, l’exploitation minière, le bâtiment et les travaux publics.',
    'hero.cta1': 'Découvrir nos activités', 'hero.cta2': 'Nous contacter',
    'about.eyebrow': 'À propos', 'about.title': 'Un groupe angolais au service du développement',
    'about.p1': 'Basé à Luanda, le Groupe Maíma intervient dans plusieurs secteurs de l’économie et accompagne ses clients et partenaires nationaux et internationaux, de l’importation de biens à l’exécution de travaux et de projets.',
    'about.p2': 'Nous travaillons avec rigueur, transparence et dans le respect de la législation de chaque pays où nous opérons, en bâtissant des relations de confiance durables.',
    'about.v1t': 'Mission', 'about.v1': 'Fournir des services et des solutions intégrées qui apportent de la valeur à nos clients et aux communautés.',
    'about.v2t': 'Vision', 'about.v2': 'Être une référence régionale dans le commerce, la logistique et les infrastructures.',
    'about.v3t': 'Valeurs', 'about.v3': 'Intégrité, rigueur, engagement et respect des personnes.',
    'about.leaders': 'Direction', 'about.dg': 'Directeur Général', 'about.sdg': 'Directeur Général Adjoint', 'about.nif': 'NIF', 'about.hq': 'Siège',
    'co.eyebrow': 'Sociétés du groupe', 'co.title': 'Deux sociétés, un seul engagement',
    'co.maima': 'Commerce général, importation, exportation, prestation de services, agriculture, industrie, exploitation minière, bâtiment et travaux publics.',
    'co.transit': 'Services de transit, de dédouanement et de logistique de marchandises, par voie maritime, aérienne et terrestre.',
    'co.more': 'Voir les activités →', 'co.quote': 'Demander un devis →',
    'areas.eyebrow': 'Activités', 'areas.title': 'Ce que nous faisons',
    'a1.t': 'Commerce général', 'a1.d': 'Fourniture de biens et de produits aux entreprises et institutions.',
    'a2.t': 'Import-export', 'a2.d': 'Gestion des achats internationaux et placement de produits sur d’autres marchés.',
    'a3.t': 'Transit et dédouanement', 'a3.d': 'Dédouanement, transport et logistique de marchandises.',
    'a4.t': 'Prestation de services', 'a4.d': 'Solutions sur mesure pour clients publics et privés.',
    'a5.t': 'Agriculture', 'a5.d': 'Production agricole et appui au développement du secteur.',
    'a6.t': 'Industrie', 'a6.d': 'Transformation industrielle et fourniture d’équipements.',
    'a7.t': 'Exploitation minière', 'a7.d': 'Activités dans le secteur minier, conformément à la loi.',
    'a8.t': 'Bâtiment et travaux publics', 'a8.d': 'Exécution de travaux, d’infrastructures et de projets d’ingénierie.',
    'pa.eyebrow': 'Projets et partenariats', 'pa.title': 'Des partenariats internationaux pour de grands projets',
    'pa.p': 'Nous travaillons avec des partenaires internationaux, notamment dans les secteurs des transports et des infrastructures ferroviaires, afin d’apporter technologie, financement et expérience en Angola et dans la région des Congo.',
    'pa.cta': 'Proposer un partenariat',
    'mk.eyebrow': 'Où nous opérons', 'mk.title': 'Présence régionale',
    'mk.ao': 'Siège à Luanda et activité sur l’ensemble du territoire national.',
    'mk.cdt': 'République démocratique du Congo', 'mk.cd': 'Développement de projets et de partenariats avec des entités locales.',
    'mk.cgt': 'République du Congo', 'mk.cg': 'Marché en expansion pour les activités du groupe.',
    'ct.eyebrow': 'Contacts', 'ct.title': 'Contactez-nous', 'ct.name': 'Nom', 'ct.company': 'Société', 'ct.email': 'E-mail', 'ct.msg': 'Message',
    'ct.send': 'Envoyer le message', 'ct.note': 'À l’envoi, votre messagerie s’ouvrira avec le message prêt.',
    'ft.rights': 'Tous droits réservés.'
  },
  en: {
    'nav.about': 'About us', 'nav.companies': 'Companies', 'nav.areas': 'What we do', 'nav.markets': 'Where we operate', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Luanda · Angola',
    'hero.title': 'Trade, logistics and infrastructure in Angola and the Congo region',
    'hero.lead': 'Grupo Maíma brings together MAÍMA (SU), LDA and M.Maíma Transitário, LDA, active in general trade, import and export, freight forwarding, agriculture, industry, mining, civil construction and public works.',
    'hero.cta1': 'Explore our activities', 'hero.cta2': 'Contact us',
    'about.eyebrow': 'About us', 'about.title': 'An Angolan group committed to development',
    'about.p1': 'Headquartered in Luanda, Grupo Maíma operates across several sectors of the economy, supporting national and international clients and partners from the import of goods to the delivery of works and projects.',
    'about.p2': 'We work with rigour, transparency and respect for the laws of every country where we operate, building lasting relationships of trust.',
    'about.v1t': 'Mission', 'about.v1': 'To deliver integrated services and solutions that add value for our clients and communities.',
    'about.v2t': 'Vision', 'about.v2': 'To be a regional reference in trade, logistics and infrastructure.',
    'about.v3t': 'Values', 'about.v3': 'Integrity, rigour, commitment and respect for people.',
    'about.leaders': 'Management', 'about.dg': 'General Director', 'about.sdg': 'Deputy General Director', 'about.nif': 'Tax ID', 'about.hq': 'Head office',
    'co.eyebrow': 'Group companies', 'co.title': 'Two companies, one commitment',
    'co.maima': 'General trade, import, export, services, agriculture, industry, mining, civil construction and public works.',
    'co.transit': 'Freight forwarding, customs clearance and cargo logistics by sea, air and land.',
    'co.more': 'See our activities →', 'co.quote': 'Request a quote →',
    'areas.eyebrow': 'What we do', 'areas.title': 'Our activities',
    'a1.t': 'General trade', 'a1.d': 'Supply of goods and products to companies and institutions.',
    'a2.t': 'Import and export', 'a2.d': 'Management of international purchasing and placement of products in other markets.',
    'a3.t': 'Freight forwarding & customs', 'a3.d': 'Customs clearance, transport and cargo logistics.',
    'a4.t': 'Services', 'a4.d': 'Tailored solutions for public and private clients.',
    'a5.t': 'Agriculture', 'a5.d': 'Agricultural production and support for the sector’s development.',
    'a6.t': 'Industry', 'a6.d': 'Industrial processing and equipment supply.',
    'a7.t': 'Mining', 'a7.d': 'Activities in the mining sector, in compliance with the law.',
    'a8.t': 'Civil construction & public works', 'a8.d': 'Delivery of works, infrastructure and engineering projects.',
    'pa.eyebrow': 'Projects and partnerships', 'pa.title': 'International partnerships for major projects',
    'pa.p': 'We work with international partners, particularly in transport and railway infrastructure, to bring technology, financing and experience to Angola and the Congo region.',
    'pa.cta': 'Propose a partnership',
    'mk.eyebrow': 'Where we operate', 'mk.title': 'Regional presence',
    'mk.ao': 'Headquartered in Luanda, operating across the whole country.',
    'mk.cdt': 'Democratic Republic of the Congo', 'mk.cd': 'Developing projects and partnerships with local entities.',
    'mk.cgt': 'Republic of the Congo', 'mk.cg': 'A growing market for the group’s activities.',
    'ct.eyebrow': 'Contact', 'ct.title': 'Get in touch', 'ct.name': 'Name', 'ct.company': 'Company', 'ct.email': 'E-mail', 'ct.msg': 'Message',
    'ct.send': 'Send message', 'ct.note': 'When you send, your e-mail program will open with the message ready.',
    'ft.rights': 'All rights reserved.'
  }
};

const ptDefaults = {};
document.querySelectorAll('[data-i18n]').forEach(el => { ptDefaults[el.dataset.i18n] = el.textContent; });

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = lang === 'pt' ? ptDefaults[key] : (I18N[lang][key] || ptDefaults[key]);
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('maima-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
let saved = 'pt';
try { saved = localStorage.getItem('maima-lang') || 'pt'; } catch (e) {}
if (saved !== 'pt') setLang(saved);

// Menu móvel
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Formulário: abre o e-mail com a mensagem preenchida
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent('Contacto pelo site — ' + f.get('name') + (f.get('company') ? ' (' + f.get('company') + ')' : ''));
  const body = encodeURIComponent(f.get('message') + '\n\n' + f.get('name') + '\n' + f.get('email'));
  window.location.href = 'mailto:j.maima@grupomaima.ao?subject=' + subject + '&body=' + body;
});

document.getElementById('year').textContent = new Date().getFullYear();
