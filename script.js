
(function(){
  const dict = {
    en: {
      nav: {home: "Home", privacy:"Privacy Policy", contact:"Contact"},
      hero_title: "Markr - Save places with a single tap.",
      hero_sub: "Markr is the fast on-the-go location list—no account, no cloud. Save your current position in an instant and organize your places effortlessly.",
      marketing_title: "Why Markr?",
      marketing_p1: "Markr provides a frictionless way to capture locations in the moment—no sign-up, no cloud dependency, and no distractions.",
      marketing_p2: "Whether you are driving, traveling, or just exploring, Markr lets you save your current spot with a single tap.",
      marketing_p3: "Manage, edit, and revisit your saved places anytime. It is fast, private, and built for real life.",
      features_title: "Key Features",
      f1: "One-tap save of your current location",
      f2: "Lightweight, privacy-first—data stays on device",
      f3: "Widget & Control Center integration",
      f4: "Share locations with friends and family",
      f5: "Siri integration for hands-free saving",
      f6: "Export & import locations for backup and sharing",
      contact_title: "Contact",
      contact_desc: "Questions or feedback? Reach out anytime.",
      contact_email_label: "Email",
      privacy_title: "Privacy Policy",
      privacy_p1: "Markr does not collect personal data. Location data is only stored locally on your device. All in-app purchases are processed via the Apple App Store.",
      privacy_p2: "No personal or non-personal data is shared with third parties unless required by law.",
      privacy_p3: "Since no data is sent to developer servers, protection is limited to your device and iOS safeguards.",
      footer_rights: "All rights reserved."
    },
    nl: {
      nav: {home: "Home", privacy:"Privacybeleid", contact:"Contact"},
      hero_title: "Markr - Bewaar plaatsen met één tik.",
      hero_sub: "Markr is de snelle locatielijst voor onderweg—geen account, geen cloud. Sla je huidige positie direct op en beheer je plaatsen moeiteloos.",
      marketing_title: "Waarom Markr?",
      marketing_p1: "Markr biedt een moeiteloze manier om locaties vast te leggen—geen registratie, geen cloud-afhankelijkheid en geen afleidingen.",
      marketing_p2: "Of je nu rijdt, reist of gewoon aan het ontdekken bent, Markr slaat je huidige locatie op met één tik.",
      marketing_p3: "Beheer, bewerk en bezoek je opgeslagen plaatsen wanneer je wilt. Snel, privé en gebouwd voor het echte leven.",
      features_title: "Belangrijkste functies",
      f1: "Sla je huidige locatie op met één tik",
      f2: "Lichtgewicht, privacy-first—gegevens blijven op je apparaat",
      f3: "Widget & Control Center integratie",
      f4: "Deel locaties met vrienden en familie",
      f5: "Siri-integratie voor handsfree opslaan",
      f6: "Exporteer & importeer locaties voor backup en delen",
      contact_title: "Contact",
      contact_desc: "Vragen of feedback? Neem gerust contact op.",
      contact_email_label: "E-mail",
      privacy_title: "Privacybeleid",
      privacy_p1: "Markr verzamelt geen persoonlijke gegevens. Locatiegegevens worden alleen lokaal op je apparaat opgeslagen. Alle in-app aankopen worden verwerkt via de Apple App Store.",
      privacy_p2: "Er worden geen persoonlijke of niet-persoonlijke gegevens gedeeld met derden, tenzij wettelijk vereist.",
      privacy_p3: "Aangezien er geen gegevens naar servers van de ontwikkelaar worden verzonden, is de bescherming beperkt tot je apparaat en iOS-beveiligingen.",
      footer_rights: "Alle rechten voorbehouden."
    },
    fr: {
      nav: {home: "Accueil", privacy:"Confidentialité", contact:"Contact"},
      hero_title: "Markr - Enregistrez des lieux en un tap.",
      hero_sub: "Markr est la liste de lieux rapide pour vos déplacements—sans compte, sans cloud. Enregistrez votre position actuelle instantanément et organisez vos lieux sans effort.",
      marketing_title: "Pourquoi Markr ?",
      marketing_p1: "Markr offre un moyen simple de capturer des lieux à tout moment—sans inscription, sans dépendance au cloud et sans distractions.",
      marketing_p2: "Que vous conduisiez, voyagiez ou exploriez, Markr enregistre votre position actuelle en un seul tap.",
      marketing_p3: "Gérez, modifiez et revisitez vos lieux enregistrés à tout moment. Rapide, privé et conçu pour la vie réelle.",
      features_title: "Fonctionnalités clés",
      f1: "Enregistrement de votre position en un tap",
      f2: "Léger, respect de la vie privée—données sur l'appareil",
      f3: "Intégration Widget & Control Center",
      f4: "Partagez des lieux avec vos proches",
      f5: "Intégration Siri pour enregistrer sans les mains",
      f6: "Export & import de lieux pour sauvegarde et partage",
      contact_title: "Contact",
      contact_desc: "Questions ou commentaires ? Contactez-nous à tout moment.",
      contact_email_label: "E-mail",
      privacy_title: "Politique de confidentialité",
      privacy_p1: "Markr ne collecte pas de données personnelles. Les données de localisation sont uniquement stockées localement sur votre appareil. Tous les achats in-app sont traités via l'Apple App Store.",
      privacy_p2: "Aucune donnée personnelle ou non personnelle n'est partagée avec des tiers, sauf si la loi l'exige.",
      privacy_p3: "Puisqu'aucune donnée n'est envoyée aux serveurs du développeur, la protection se limite à votre appareil et aux mesures de sécurité iOS.",
      footer_rights: "Tous droits réservés."
    },
    de: {
      nav: {home: "Start", privacy:"Datenschutz", contact:"Kontakt"},
      hero_title: "Markr - Orte mit einem Tap speichern.",
      hero_sub: "Markr ist die schnelle Location-Merkliste für unterwegs – ohne Konto, ohne Cloud. Speichere deine aktuelle Position im Handumdrehen und verwalte Orte mühelos.",
      marketing_title: "Warum Markr?",
      marketing_p1: "Markr ermöglicht es dir, Orte ohne Reibung zu erfassen – ohne Registrierung, ohne Cloud-Zwang und ohne Ablenkung.",
      marketing_p2: "Beim Fahren, Reisen oder Entdecken: Markr speichert deinen Standort mit einem einzigen Tap.",
      marketing_p3: "Verwalte, bearbeite und besuche deine gespeicherten Orte jederzeit. Schnell, privat und alltagstauglich.",
      features_title: "Hauptfunktionen",
      f1: "Standort mit einem Tap speichern",
      f2: "Leichtgewichtig & datenschutzfreundlich – Daten bleiben auf dem Gerät",
      f3: "Widget- & Control Center-Integration",
      f4: "Orte mit Freunden und Familie teilen",
      f5: "Siri-Integration für freihändiges Speichern",
      f6: "Export & Import von Orten für Backup und Teilen",
      contact_title: "Kontakt",
      contact_desc: "Fragen oder Feedback? Schreib uns jederzeit.",
      contact_email_label: "E-Mail",
      privacy_title: "Datenschutzerklärung",
      privacy_p1: "Markr erhebt keine personenbezogenen Daten. Standortdaten werden ausschließlich lokal auf deinem Gerät gespeichert. In‑App‑Käufe werden über den Apple App Store abgewickelt.",
      privacy_p2: "Keine Weitergabe von Daten an Dritte, außer wenn gesetzlich vorgeschrieben.",
      privacy_p3: "Da keine Daten an Server des Entwicklers übertragen werden, greift der Schutz auf Geräte- und iOS-Mechanismen zurück.",
      footer_rights: "Alle Rechte vorbehalten."
    },
    it: {
      nav: {home: "Home", privacy:"Privacy", contact:"Contatto"},
      hero_title: "Markr - Salva luoghi con un tap.",
      hero_sub: "Markr è la lista di luoghi veloce per quando sei in movimento—senza account, senza cloud. Salva la tua posizione attuale in un istante e organizza i tuoi luoghi senza sforzo.",
      marketing_title: "Perché Markr?",
      marketing_p1: "Markr offre un modo semplice per catturare luoghi al momento—senza registrazione, senza dipendenza dal cloud e senza distrazioni.",
      marketing_p2: "Che tu stia guidando, viaggiando o esplorando, Markr salva la tua posizione attuale con un solo tap.",
      marketing_p3: "Gestisci, modifica e rivisita i tuoi luoghi salvati in qualsiasi momento. Veloce, privato e costruito per la vita reale.",
      features_title: "Funzionalità principali",
      f1: "Salva la tua posizione con un tap",
      f2: "Leggero, privacy-first—i dati restano sul dispositivo",
      f3: "Integrazione Widget & Control Center",
      f4: "Condividi luoghi con amici e famiglia",
      f5: "Integrazione Siri per salvare a mani libere",
      f6: "Esporta e importa luoghi per backup e condivisione",
      contact_title: "Contatto",
      contact_desc: "Domande o feedback? Contattaci in qualsiasi momento.",
      contact_email_label: "E-mail",
      privacy_title: "Informativa sulla privacy",
      privacy_p1: "Markr non raccoglie dati personali. I dati sulla posizione sono memorizzati solo localmente sul tuo dispositivo. Tutti gli acquisti in-app sono elaborati tramite l'Apple App Store.",
      privacy_p2: "Nessun dato personale o non personale viene condiviso con terze parti, salvo quanto richiesto dalla legge.",
      privacy_p3: "Poiché nessun dato viene inviato ai server dello sviluppatore, la protezione è limitata al tuo dispositivo e alle misure di sicurezza di iOS.",
      footer_rights: "Tutti i diritti riservati."
    },
    ja: {
      nav: {home: "ホーム", privacy:"プライバシーポリシー", contact:"お問い合わせ"},
      hero_title: "Markr - ワンタップで場所を保存。",
      hero_sub: "Markrは外出先での高速ロケーションリストです—アカウント不要、クラウド不要。現在地を瞬時に保存し、場所を簡単に管理できます。",
      marketing_title: "なぜMarkr？",
      marketing_p1: "Markrは、その瞬間に場所をキャプチャするストレスフリーな方法を提供します—登録不要、クラウド依存なし、気を散らすものなし。",
      marketing_p2: "運転中、旅行中、探索中でも、Markrはワンタップで現在地を保存します。",
      marketing_p3: "保存した場所をいつでも管理、編集、再訪問。高速、プライベート、実生活向けに設計。",
      features_title: "主な機能",
      f1: "ワンタップで現在地を保存",
      f2: "軽量、プライバシー重視—データはデバイスに保存",
      f3: "ウィジェット＆コントロールセンター連携",
      f4: "友人や家族と場所を共有",
      f5: "ハンズフリー保存のためのSiri連携",
      f6: "バックアップと共有のための場所のエクスポート＆インポート",
      contact_title: "お問い合わせ",
      contact_desc: "ご質問やフィードバックがありますか？いつでもご連絡ください。",
      contact_email_label: "メール",
      privacy_title: "プライバシーポリシー",
      privacy_p1: "Markrは個人データを収集しません。位置データはデバイス上にローカルに保存されます。すべてのアプリ内購入はApple App Storeを通じて処理されます。",
      privacy_p2: "法律で要求されない限り、個人データまたは非個人データが第三者と共有されることはありません。",
      privacy_p3: "開発者サーバーにデータが送信されないため、保護はデバイスとiOSのセーフガードに限定されます。",
      footer_rights: "全著作権所有。"
    },
    pt: {
      nav: {home: "Início", privacy:"Privacidade", contact:"Contato"},
      hero_title: "Markr - Salve lugares com um toque.",
      hero_sub: "Markr é a lista de locais rápida para quando você está em movimento—sem conta, sem nuvem. Salve sua posição atual instantaneamente e organize seus lugares sem esforço.",
      marketing_title: "Por que Markr?",
      marketing_p1: "Markr oferece uma maneira sem atrito de capturar locais no momento—sem cadastro, sem dependência de nuvem e sem distrações.",
      marketing_p2: "Esteja você dirigindo, viajando ou apenas explorando, Markr salva sua localização atual com um único toque.",
      marketing_p3: "Gerencie, edite e revisite seus lugares salvos a qualquer momento. Rápido, privado e feito para a vida real.",
      features_title: "Principais recursos",
      f1: "Salve sua localização atual com um toque",
      f2: "Leve, privacidade em primeiro lugar—dados ficam no dispositivo",
      f3: "Integração com Widget e Central de Controle",
      f4: "Compartilhe locais com amigos e família",
      f5: "Integração com Siri para salvar sem usar as mãos",
      f6: "Exporte e importe locais para backup e compartilhamento",
      contact_title: "Contato",
      contact_desc: "Perguntas ou feedback? Entre em contato a qualquer momento.",
      contact_email_label: "E-mail",
      privacy_title: "Política de Privacidade",
      privacy_p1: "Markr não coleta dados pessoais. Os dados de localização são armazenados apenas localmente no seu dispositivo. Todas as compras no aplicativo são processadas pela Apple App Store.",
      privacy_p2: "Nenhum dado pessoal ou não pessoal é compartilhado com terceiros, exceto quando exigido por lei.",
      privacy_p3: "Como nenhum dado é enviado aos servidores do desenvolvedor, a proteção é limitada ao seu dispositivo e às proteções do iOS.",
      footer_rights: "Todos os direitos reservados."
    },
    es: {
      nav: {home: "Inicio", privacy:"Privacidad", contact:"Contacto"},
      hero_title: "Markr - Guarda lugares con un toque.",
      hero_sub: "Markr es la lista de ubicaciones rápida para cuando estás en movimiento—sin cuenta, sin nube. Guarda tu posición actual al instante y organiza tus lugares sin esfuerzo.",
      marketing_title: "¿Por qué Markr?",
      marketing_p1: "Markr ofrece una forma sin fricciones de capturar ubicaciones en el momento—sin registro, sin dependencia de la nube y sin distracciones.",
      marketing_p2: "Ya sea que estés conduciendo, viajando o simplemente explorando, Markr guarda tu ubicación actual con un solo toque.",
      marketing_p3: "Gestiona, edita y vuelve a visitar tus lugares guardados en cualquier momento. Rápido, privado y hecho para la vida real.",
      features_title: "Características principales",
      f1: "Guarda tu ubicación actual con un toque",
      f2: "Ligero, privacidad primero—los datos quedan en el dispositivo",
      f3: "Integración con Widget y Centro de Control",
      f4: "Comparte ubicaciones con amigos y familia",
      f5: "Integración con Siri para guardar manos libres",
      f6: "Exporta e importa ubicaciones para respaldo y compartir",
      contact_title: "Contacto",
      contact_desc: "¿Preguntas o comentarios? Contáctanos en cualquier momento.",
      contact_email_label: "Correo electrónico",
      privacy_title: "Política de Privacidad",
      privacy_p1: "Markr no recopila datos personales. Los datos de ubicación solo se almacenan localmente en tu dispositivo. Todas las compras dentro de la app se procesan a través de la Apple App Store.",
      privacy_p2: "No se comparten datos personales o no personales con terceros, excepto cuando lo exija la ley.",
      privacy_p3: "Dado que no se envían datos a los servidores del desarrollador, la protección se limita a tu dispositivo y a las medidas de seguridad de iOS.",
      footer_rights: "Todos los derechos reservados."
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

    $('#marketing-title').textContent = d.marketing_title;
    $('#marketing-p1').textContent = d.marketing_p1;
    $('#marketing-p2').textContent = d.marketing_p2;
    $('#marketing-p3').textContent = d.marketing_p3;

    $('#features-title').textContent = d.features_title;
    $('#f1').textContent = d.f1;
    $('#f2').textContent = d.f2;
    $('#f3').textContent = d.f3;
    $('#f4').textContent = d.f4;
    $('#f5').textContent = d.f5;
    $('#f6').textContent = d.f6;

    $('#contact-title').textContent = d.contact_title;
    $('#contact-desc').textContent = d.contact_desc;
    $('#contact-email-label').textContent = d.contact_email_label;

    $('#privacy-title').textContent = d.privacy_title;
    $('#privacy-p1').textContent = d.privacy_p1;
    $('#privacy-p2').textContent = d.privacy_p2;
    $('#privacy-p3').textContent = d.privacy_p3;

    $('#rights').textContent = d.footer_rights;

    // Update App Store badges based on language
    const badgeLocales = {
      en: 'en-us',
      nl: 'nl-nl',
      fr: 'fr-fr',
      de: 'de-de',
      it: 'it-it',
      ja: 'ja-jp',
      pt: 'pt-br',
      es: 'es-mx'
    };
    const badgeAlts = {
      en: 'Download on the App Store',
      nl: 'Download in de App Store',
      fr: 'Télécharger dans l\'App Store',
      de: 'Laden im App Store',
      it: 'Scarica su App Store',
      ja: 'App Storeからダウンロード',
      pt: 'Baixar na App Store',
      es: 'Descargar en el App Store'
    };
    const badgeLocale = badgeLocales[lang] || 'en-us';
    const badgeUrl = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${badgeLocale}?size=250x83`;
    const badgeAlt = badgeAlts[lang] || 'Download on the App Store';
    $$('.app-store-badge img').forEach(img => {
      img.src = badgeUrl;
      img.alt = badgeAlt;
    });

    localStorage.setItem('lang', lang);
    langSelect.value = lang;
  }

  function initLang(){
    const saved = localStorage.getItem('lang');
    const supportedLangs = ['en', 'nl', 'fr', 'de', 'it', 'ja', 'pt', 'es'];
    let inferred = 'en';
    if (navigator.language) {
      const browserLang = navigator.language.split('-')[0];
      if (supportedLangs.includes(browserLang)) {
        inferred = browserLang;
      }
    }
    setLang(saved || inferred);
  }

  // Smooth scroll and active nav with throttling
  const sections = [];
  const navLinks = [];
  let ticking = false;

  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      let cur = sections[0]?.id;
      const fromTop = window.scrollY + 120;
      for(const sec of sections){
        if(sec.offsetTop <= fromTop) cur = sec.id;
      }
      const activeHref = '#' + cur;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === activeHref));
      ticking = false;
    });
  }

  function init(){
    // Cache DOM queries
    sections.push(...$$('section[id]'));
    navLinks.push(...$$('.nav a'));
    
    initLang();
    yearEl.textContent = new Date().getFullYear();
    langSelect.addEventListener('change', e => setLang(e.target.value));
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
