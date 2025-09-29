
(function(){
  const dict = {
    en: {
      nav: {home: "Home", privacy:"Privacy Policy", contact:"Contact"},
      hero_title: "Markr - Save places with a single tap.",
      hero_sub: "Markr is the fast on-the-go location list—no account, no cloud. Save your current position in an instant and organize your places effortlessly.",
      hero_cta: "View Privacy",
      marketing_title: "Why Markr?",
      marketing_p1: "Markr provides a frictionless way to capture locations in the moment—no sign-up, no cloud dependency, and no distractions.",
      marketing_p2: "Whether you are driving, traveling, or just exploring, Markr lets you save your current spot with a single tap.",
      marketing_p3: "Manage, edit, and revisit your saved places anytime. It is fast, private, and built for real life.",
      features_title: "Key Features",
      f1: "One-tap save of your current location",
      f2: "Lightweight, privacy-first—data stays on device",
      f3: "Widget & Control Center integration",
      contact_title: "Contact",
      contact_desc: "Questions or feedback? Reach out anytime.",
      contact_email_label: "Email",
      privacy_title: "Privacy Policy",
      privacy_p1: "Markr does not collect personal data. Location data is only stored locally on your device. All in-app purchases are processed via the Apple App Store.",
      privacy_p2: "No personal or non-personal data is shared with third parties unless required by law.",
      privacy_p3: "Since no data is sent to developer servers, protection is limited to your device and iOS safeguards.",
      footer_rights: "All rights reserved."
    },
    de: {
      nav: {home: "Start", privacy:"Datenschutz", contact:"Kontakt"},
      hero_title: "Markr - Orte mit einem Tap speichern.",
      hero_sub: "Markr ist die schnelle Location-Merkliste für unterwegs – ohne Konto, ohne Cloud. Speichere deine aktuelle Position im Handumdrehen und verwalte Orte mühelos.",
      hero_cta: "Datenschutz ansehen",
      marketing_title: "Warum Markr?",
      marketing_p1: "Markr ermöglicht es dir, Orte ohne Reibung zu erfassen – ohne Registrierung, ohne Cloud-Zwang und ohne Ablenkung.",
      marketing_p2: "Beim Fahren, Reisen oder Entdecken: Markr speichert deinen Standort mit einem einzigen Tap.",
      marketing_p3: "Verwalte, bearbeite und besuche deine gespeicherten Orte jederzeit. Schnell, privat und alltagstauglich.",
      features_title: "Hauptfunktionen",
      f1: "Standort mit einem Tap speichern",
      f2: "Leichtgewichtig & datenschutzfreundlich – Daten bleiben auf dem Gerät",
      f3: "Widget- & Control Center-Integration",
      contact_title: "Kontakt",
      contact_desc: "Fragen oder Feedback? Schreib uns jederzeit.",
      contact_email_label: "E-Mail",
      privacy_title: "Datenschutzerklärung",
      privacy_p1: "Markr erhebt keine personenbezogenen Daten. Standortdaten werden ausschließlich lokal auf deinem Gerät gespeichert. In‑App‑Käufe werden über den Apple App Store abgewickelt.",
      privacy_p2: "Keine Weitergabe von Daten an Dritte, außer wenn gesetzlich vorgeschrieben.",
      privacy_p3: "Da keine Daten an Server des Entwicklers übertragen werden, greift der Schutz auf Geräte- und iOS-Mechanismen zurück.",
      footer_rights: "Alle Rechte vorbehalten."
    }
  };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const langSelect = $('.lang');
  const yearEl = $('#year');

  function setLang(lang){
    const d = dict[lang] || dict.en;
    $('[data-i="nav.home"]').textContent = d.nav.home;
    $('[data-i="nav.privacy"]').textContent = d.nav.privacy;
    $('[data-i="nav.contact"]').textContent = d.nav.contact;

    $('#hero-title').textContent = d.hero_title;
    $('#hero-sub').textContent = d.hero_sub;
    $('#cta-privacy').textContent = d.hero_cta;

    $('#marketing-title').textContent = d.marketing_title;
    $('#marketing-p1').textContent = d.marketing_p1;
    $('#marketing-p2').textContent = d.marketing_p2;
    $('#marketing-p3').textContent = d.marketing_p3;

    $('#features-title').textContent = d.features_title;
    $('#f1').textContent = d.f1;
    $('#f2').textContent = d.f2;
    $('#f3').textContent = d.f3;

    $('#contact-title').textContent = d.contact_title;
    $('#contact-desc').textContent = d.contact_desc;
    $('#contact-email-label').textContent = d.contact_email_label;

    $('#privacy-title').textContent = d.privacy_title;
    $('#privacy-p1').textContent = d.privacy_p1;
    $('#privacy-p2').textContent = d.privacy_p2;
    $('#privacy-p3').textContent = d.privacy_p3;

    $('#rights').textContent = d.footer_rights;
    localStorage.setItem('lang', lang);
    langSelect.value = lang;
  }

  function initLang(){
    const saved = localStorage.getItem('lang');
    const inferred = navigator.language && navigator.language.startsWith('de') ? 'de' : 'en';
    setLang(saved || inferred);
  }

  // Smooth scroll and active nav
  function onScroll(){
    const sections = $$('section[id]');
    let cur = sections[0].id;
    const fromTop = window.scrollY + 120;
    sections.forEach(sec => {
      if(sec.offsetTop <= fromTop) cur = sec.id;
    });
    $$('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }

  function init(){
    initLang();
    yearEl.textContent = new Date().getFullYear();
    langSelect.addEventListener('change', e => setLang(e.target.value));
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
