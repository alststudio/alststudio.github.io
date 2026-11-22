(function(){
'use strict';

const CATALOG = [
  // Hero & Header
  { id: 'sign_text', category: 'Hero & Header', label: 'Teks Efek Sign (Atas)', selector: '.sign .sg-a', default: 'Dirancang dengan tujuan' },
  { id: 'hero_title', category: 'Hero & Header', label: 'Judul Utama (H1)', selector: '.col-head .bk[data-beat="0"] h1', default: 'ALSTSTUDIO, wujudkan website impian Anda.' },
  { id: 'hero_subhead', category: 'Hero & Header', label: 'Sub-judul Hero', selector: '.col-head .bk[data-beat="0"] .subhead', default: 'Website profesional untuk mengembangkan bisnis Anda.' },
  { id: 'hero_cta', category: 'Hero & Header', label: 'Teks Tombol Konsultasi Hero', selector: '.col-head .bk[data-beat="0"] a.cta .face', default: 'Konsultasi Sekarang' },
  { id: 'hero_stand_0', category: 'Hero & Header', label: 'Deskripsi Hero (Beat 0)', selector: '.col-stand .bk[data-beat="0"] .stand', default: 'Kami membantu bisnis tampil lebih profesional melalui website yang dirancang khusus, responsif, dan sesuai kebutuhan. Ceritakan ide Anda, kami bantu memilih solusi digital yang tepat.' },
  { id: 'hero_beat_1', category: 'Hero & Header', label: 'Teks Animasi Beat 1', selector: '.col-head .bk[data-beat="1"] .ln', default: 'Website profesional,' },
  { id: 'hero_stand_1', category: 'Hero & Header', label: 'Deskripsi Beat 1', selector: '.col-stand .bk[data-beat="1"] .stand', default: 'Website profesional, dirancang sesuai kebutuhan Anda.' },
  { id: 'hero_beat_2', category: 'Hero & Header', label: 'Teks Animasi Beat 2', selector: '.col-head .bk[data-beat="2"] .ln', default: 'untuk bisnis yang terus berkembang.' },
  { id: 'hero_stand_2', category: 'Hero & Header', label: 'Deskripsi Beat 2', selector: '.col-stand .bk[data-beat="2"] .stand', default: 'Desain elegan dan fitur yang membuat merek Anda tampil lebih meyakinkan.' },
  { id: 'hero_beat_3a', category: 'Hero & Header', label: 'Teks Animasi Beat 3 (Baris 1)', selector: '.col-head .bk[data-beat="3"] .ln:nth-child(1)', default: 'Kami bangun.' },
  { id: 'hero_beat_3b', category: 'Hero & Header', label: 'Teks Animasi Beat 3 (Baris 2)', selector: '.col-head .bk[data-beat="3"] .ln:nth-child(2)', default: 'Kami optimalkan.' },
  { id: 'hero_stand_3', category: 'Hero & Header', label: 'Deskripsi Beat 3', selector: '.col-stand .bk[data-beat="3"] .stand', default: 'Komunikasi jelas, proses terarah, hasil sesuai kebutuhan.' },
  { id: 'hero_tag', category: 'Hero & Header', label: 'Badge Tag Kategori', selector: '.ov > span.tag', default: 'Jasa Pembuatan Website' },

  // Navigasi & Tombol
  { id: 'nav_apply', category: 'Navigasi & Tombol', label: 'Tombol Navigasi Konsultasi', selector: 'nav.hdr a.apply', default: 'Konsultasi' },
  { id: 'nav_rail_1', category: 'Navigasi & Tombol', label: 'Menu Rel: Bab 1', selector: 'nav.rail a:nth-child(1) em', default: 'Layanan' },
  { id: 'nav_rail_2', category: 'Navigasi & Tombol', label: 'Menu Rel: Bab 2', selector: 'nav.rail a:nth-child(2) em', default: 'Keahlian' },
  { id: 'nav_rail_3', category: 'Navigasi & Tombol', label: 'Menu Rel: Bab 3', selector: 'nav.rail a:nth-child(3) em', default: 'Proses' },
  { id: 'nav_rail_4', category: 'Navigasi & Tombol', label: 'Menu Rel: Bab 4', selector: 'nav.rail a:nth-child(4) em', default: 'FAQ' },
  { id: 'nav_menu_1', category: 'Navigasi & Tombol', label: 'Menu Mobile: Bab 1', selector: '#nvm a:nth-child(1)', default: 'Bab 1 · Layanan' },
  { id: 'nav_menu_2', category: 'Navigasi & Tombol', label: 'Menu Mobile: Bab 2', selector: '#nvm a:nth-child(2)', default: 'Bab 2 · Keahlian' },
  { id: 'nav_menu_3', category: 'Navigasi & Tombol', label: 'Menu Mobile: Bab 3', selector: '#nvm a:nth-child(3)', default: 'Bab 3 · Proses' },
  { id: 'nav_menu_4', category: 'Navigasi & Tombol', label: 'Menu Mobile: Bab 4', selector: '#nvm a:nth-child(4)', default: 'Bab 4 · FAQ' },

  // Layanan & Penjelasan (Fin)
  { id: 'fin_h0', category: 'Layanan & Solusi', label: 'Judul Bagian Layanan 1', selector: '.fin-g[data-f="0"] .fin-h', default: 'Website yang tepat, untuk bisnis yang terus bertumbuh.' },
  { id: 'fin_l0', category: 'Layanan & Solusi', label: 'Deskripsi Bagian Layanan 1', selector: '.fin-g[data-f="0"] .fin-l', default: 'Bangun kehadiran digital yang lebih profesional melalui website yang dirancang sesuai karakter merek, kebutuhan pelanggan, dan tujuan bisnis Anda.' },
  { id: 'fin_chip0', category: 'Layanan & Solusi', label: 'Badge Chip Layanan 1', selector: '.fin-g[data-f="0"] .fin-chip b', default: 'Solusi menyeluruh' },
  { id: 'fin_s0', category: 'Layanan & Solusi', label: 'Rincian Chip Layanan 1', selector: '.fin-g[data-f="0"] .fin-s', default: 'Mulai dari profil perusahaan dan halaman promosi hingga toko online, pasar daring, atau sistem web khusus—kami bantu mewujudkan ide Anda.' },
  { id: 'fin_h1', category: 'Layanan & Solusi', label: 'Judul Bagian Layanan 2', selector: '.fin-g[data-f="1"] .fin-h', default: 'Dibuat dengan tujuan, bukan sekadar tampilan.' },
  { id: 'fin_l1', category: 'Layanan & Solusi', label: 'Deskripsi Bagian Layanan 2', selector: '.fin-g[data-f="1"] .fin-l', default: 'Setiap bisnis memiliki kebutuhan berbeda. Kami merancang solusi berdasarkan target pengguna, alur layanan, identitas merek, dan fitur yang benar-benar dibutuhkan.' },
  { id: 'fin_chip1', category: 'Layanan & Solusi', label: 'Badge Chip Layanan 2', selector: '.fin-g[data-f="1"] .fin-chip b', default: 'Solusi menyeluruh' },
  { id: 'fin_s1', category: 'Layanan & Solusi', label: 'Rincian Chip Layanan 2', selector: '.fin-g[data-f="1"] .fin-s', default: 'Punya ide website atau ingin memperbarui website lama? Mari diskusikan kebutuhan dan arah pengembangannya bersama ALSTSTUDIO.' },

  // Portfolio / Fitur (PF)
  { id: 'pf_chip0', category: 'Keahlian & Fitur', label: 'Badge Keahlian 1', selector: '.pf-g[data-g="0"] .pf-chip', default: 'Optimasi Mesin Pencari (SEO)' },
  { id: 'pf_h0', category: 'Keahlian & Fitur', label: 'Judul Keahlian 1', selector: '.pf-g[data-g="0"] .pf-h', default: 'Semua kebutuhan website, dalam satu solusi.' },
  { id: 'pf_b0', category: 'Keahlian & Fitur', label: 'Deskripsi Keahlian 1', selector: '.pf-g[data-g="0"] .pf-b', default: 'Dari perencanaan, desain, pengembangan, hingga optimasi dasar, setiap bagian diperhatikan agar website tampil profesional, mudah digunakan, dan siap mendukung bisnis Anda.' },
  { id: 'pf_chip1', category: 'Keahlian & Fitur', label: 'Badge Keahlian 2', selector: '.pf-g[data-g="1"] .pf-chip', default: 'Optimasi Mesin Pencari (SEO)' },
  { id: 'pf_h1', category: 'Keahlian & Fitur', label: 'Judul Keahlian 2', selector: '.pf-g[data-g="1"] .pf-h', default: 'Desain elegan berpadu dengan fungsi yang tepat.' },
  { id: 'pf_b1', category: 'Keahlian & Fitur', label: 'Deskripsi Keahlian 2', selector: '.pf-g[data-g="1"] .pf-b', default: 'Struktur halaman yang rapi, performa baik, pengalaman pengguna yang nyaman, serta fondasi SEO menjadi perhatian sejak awal.' },
  { id: 'pf_chip2', category: 'Keahlian & Fitur', label: 'Badge Keahlian 3', selector: '.pf-g[data-g="2"] .pf-chip', default: 'Pengembangan Website Khusus' },
  { id: 'pf_h2', category: 'Keahlian & Fitur', label: 'Judul Keahlian 3', selector: '.pf-g[data-g="2"] .pf-h', default: 'Kami merancang website sesuai cara bisnis Anda berkembang.' },
  { id: 'pf_b2', category: 'Keahlian & Fitur', label: 'Deskripsi Keahlian 3', selector: '.pf-g[data-g="2"] .pf-b', default: 'Kami membangun profil perusahaan, halaman promosi, toko online, pasar daring, sistem pemesanan, dan aplikasi web khusus sesuai kebutuhan.' },

  // FAQ
  { id: 'faq_q1', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 1: Pertanyaan', selector: '.faq .fq:nth-of-type(1) h3', default: 'Berapa biaya pembuatan website?' },
  { id: 'faq_a1', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 1: Jawaban', selector: '.faq .fq:nth-of-type(1) p', default: 'Biaya pembuatan website disesuaikan dengan kebutuhan desain, fitur, dan kompleksitas proyek. Konsultasikan ide Anda terlebih dahulu agar kami dapat menyarankan solusi dan estimasi yang tepat.' },
  { id: 'faq_q2', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 2: Pertanyaan', selector: '.faq .fq:nth-of-type(2) h3', default: 'Website apa yang bisa ALSTSTUDIO buat?' },
  { id: 'faq_a2', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 2: Jawaban', selector: '.faq .fq:nth-of-type(2) p', default: 'Kami melayani pembuatan website profil perusahaan, halaman promosi, portofolio, toko online, pasar daring, hingga sistem web khusus yang dirancang sesuai kebutuhan bisnis Anda.' },
  { id: 'faq_q3', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 3: Pertanyaan', selector: '.faq .fq:nth-of-type(3) h3', default: 'Mengapa memilih ALSTSTUDIO?' },
  { id: 'faq_a3', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 3: Jawaban', selector: '.faq .fq:nth-of-type(3) p', default: 'Kami memadukan desain yang elegan, pengalaman pengguna yang nyaman, dan teknologi yang tepat. Setiap website dibangun dengan tujuan yang jelas: memperkuat citra merek dan membantu bisnis Anda berkembang.' },
  { id: 'faq_q4', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 4: Pertanyaan', selector: '.faq .fq:nth-of-type(4) h3', default: 'Apakah website bisa dibuka di semua perangkat?' },
  { id: 'faq_a4', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 4: Jawaban', selector: '.faq .fq:nth-of-type(4) p', default: 'Ya. Tampilan dibuat responsif agar tetap rapi, mudah dibaca, dan nyaman digunakan melalui komputer, tablet, maupun ponsel.' },
  { id: 'faq_q5', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 5: Pertanyaan', selector: '.faq .fq:nth-of-type(5) h3', default: 'Bagaimana proses pembuatan website?' },
  { id: 'faq_a5', category: 'Pertanyaan Umum (FAQ)', label: 'FAQ 5: Jawaban', selector: '.faq .fq:nth-of-type(5) p', default: 'Kita mulai dari konsultasi kebutuhan, menyusun konsep, mengembangkan desain dan fitur, lalu melakukan pengujian sebelum website siap dipublikasikan.' },

  // Formulir Konsultasi
  { id: 'cf_title', category: 'Formulir Kontak', label: 'Judul Formulir Konsultasi', selector: '.cf .cf-lead b', default: 'Formulir konsultasi' },
  { id: 'cf_desc', category: 'Formulir Kontak', label: 'Deskripsi Formulir Konsultasi', selector: '.cf .cf-lead p', default: 'Ceritakan website yang Anda butuhkan. Isi nama, email, dan kebutuhan Anda, lalu klik konsultasi untuk mengirim detailnya langsung ke WhatsApp ALSTSTUDIO.' },
  { id: 'cf_btn', category: 'Formulir Kontak', label: 'Tombol Kirim Formulir WA', selector: '.cf .cf-cta', default: 'Konsultasi via WhatsApp' },

  // Footer
  { id: 'ft_tag', category: 'Footer', label: 'Slogan Footer', selector: '.ft-tag', default: 'Website profesional untuk masa depan bisnis Anda.' },
  { id: 'ft_metal', category: 'Footer', label: 'Teks Kiri Footer', selector: '.ft-meta.l', default: 'ALSTSTUDIO · JASA PEMBUATAN WEBSITE' },
  { id: 'ft_metar', category: 'Footer', label: 'Teks Kanan Footer', selector: '.ft-meta.r', default: 'Konsultasi via WhatsApp' }
];

function getApiUrl(){
  const path = window.location.pathname;
  if (path.includes('/admin')) {
    return path.replace(/\/admin.*$/, '/api/content.php');
  }
  return '/api/content.php';
}

function updateElementText(el, newText) {
  if (!el || newText === undefined || newText === null) return;
  const str = String(newText);
  const arw = el.querySelector('.arw');
  const cur = arw ? el.textContent.replace(arw.textContent, '').trim() : el.textContent.trim();
  if (cur === str.trim()) return;

  if (arw) {
    el.textContent = str + ' ';
    el.appendChild(arw);
  } else {
    el.textContent = str;
  }
}

function applyTexts(texts) {
  if (!texts || typeof texts !== 'object') return;

  CATALOG.forEach(item => {
    if (Object.prototype.hasOwnProperty.call(texts, item.id)) {
      const val = texts[item.id];
      if (val !== undefined && val !== null && val !== '') {
        try {
          const els = document.querySelectorAll(item.selector);
          els.forEach(el => updateElementText(el, val));
        } catch(e) {}
      }
    }
  });

  if (texts.__title) {
    document.title = texts.__title;
    const m = document.querySelector('meta[name="twitter:title"]');
    if (m) m.content = texts.__title;
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.content = texts.__title;
  }
  if (texts.__description) {
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = texts.__description;
    const tw = document.querySelector('meta[name="twitter:description"]');
    if (tw) tw.content = texts.__description;
    const og = document.querySelector('meta[property="og:description"]');
    if (og) og.content = texts.__description;
  }
}

function applyAssets(assets) {
  if (!assets || typeof assets !== 'object') return;
  const els = Array.from(document.querySelectorAll('img,video,source')).filter(el => el.getAttribute('src'));
  els.forEach((el, i) => {
    const k = String(i);
    if (assets[k]) {
      el.setAttribute('src', assets[k]);
      if (el.tagName === 'VIDEO') el.load();
    }
  });
}

function openWhatsApp(settings) {
  const phone = (settings.__whatsapp_phone || '62812345678').replace(/\D/g, '');
  const template = settings.__whatsapp_template || 'Halo ALSTSTUDIO, saya ingin konsultasi pembuatan website.\n\nNama: {nama}\nEmail: {email}\nKebutuhan: {kebutuhan}';
  const name = document.querySelector('[data-k="name"]')?.value.trim() || '-';
  const email = document.querySelector('[data-k="email"]')?.value.trim() || '-';
  const needs = document.querySelector('[data-k="grow"]')?.value.trim() || '-';
  const message = template.replaceAll('{nama}', name).replaceAll('{email}', email).replaceAll('{kebutuhan}', needs);
  if (!phone) {
    alert('Nomor WhatsApp belum diatur. Silakan atur melalui panel admin.');
    return;
  }
  window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
}

function bind(settings) {
  document.querySelectorAll('.cf-cta').forEach(b => {
    b.textContent = settings.cf_btn || 'Konsultasi via WhatsApp';
    b.removeAttribute('disabled');
    b.onclick = function(e) {
      e.preventDefault();
      openWhatsApp(settings);
    };
  });

  document.querySelectorAll('a.cta, a.apply, a.wa-contact-link').forEach(a => {
    a.href = '#contact';
    a.onclick = function(e) {
      if (a.classList.contains('wa-contact-link')) {
        e.preventDefault();
        openWhatsApp(settings);
      }
    };
  });

  document.querySelectorAll('input[data-k="name"]').forEach(x => {
    if (!x.placeholder || x.placeholder === 'Your name') x.placeholder = 'Nama lengkap Anda';
  });
  document.querySelectorAll('input[data-k="email"]').forEach(x => {
    if (!x.placeholder || x.placeholder === 'Work email') x.placeholder = 'Email aktif Anda';
  });
  document.querySelectorAll('textarea[data-k="grow"]').forEach(x => {
    if (!x.placeholder || x.placeholder === 'What do you want to grow?') x.placeholder = 'Ceritakan website dan fitur yang Anda butuhkan';
  });
}

let cachedTexts = {};
let cachedAssets = {};

async function init() {
  try {
    const res = await fetch(getApiUrl(), { credentials: 'same-origin', cache: 'no-store' });
    if (!res.ok) throw new Error('API failed');
    const data = await res.json();
    cachedTexts = data.texts || {};
    cachedAssets = data.assets || {};
    applyTexts(cachedTexts);
    applyAssets(cachedAssets);
    bind(cachedTexts);
  } catch (e) {
    bind({ __whatsapp_phone: '62812345678' });
  }

  const rootEl = document.getElementById('root');
  if (rootEl && window.MutationObserver) {
    let timer = null;
    const observer = new MutationObserver(() => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        applyTexts(cachedTexts);
      }, 60);
    });
    observer.observe(rootEl, { childList: true, subtree: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();
