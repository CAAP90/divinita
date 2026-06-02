'use strict';

/* ══════════════════════════
   DATOS — Productos
══════════════════════════ */
const PRODUCTS = [
  {
    ref: 'MAGIA',
    img: 'img/zapatos-006.jpg',
    badge: 'Suela EVA',
    category: 'eva',
    desc: 'Liviano, comodo y lleno de estilo. Suela EVA antideslizante.'
  },
  {
    ref: 'AURORA',
    img: 'img/zapatos-007.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Diseno fresco y moderno, perfecto para el dia a dia.'
  },
  {
    ref: 'UVA',
    img: 'img/zapatos-008.jpg',
    badge: 'Suela EVA',
    category: 'eva',
    desc: 'Estampado unico y lleno de color. Suela EVA super liviana.'
  },
  {
    ref: 'TESORO',
    img: 'img/zapatos-009.jpg',
    badge: 'Suela EVA',
    category: 'eva',
    desc: 'Elegancia y confort en cada paso que das.'
  },
  {
    ref: 'MIA',
    img: 'img/zapatos-010.jpg',
    badge: '',
    category: 'casual',
    desc: 'Clasico y versatil, ideal para cualquier ocasion.'
  },
  {
    ref: 'NOCHE',
    img: 'img/zapatos-011.jpg',
    badge: 'Suela EVA',
    category: 'eva',
    desc: 'Estampado atrevido y con mucho caracter.'
  },
  {
    ref: 'ALMA',
    img: 'img/zapatos-012.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Blanco puro y elegante, combina con todo.'
  },
  {
    ref: 'VERA',
    img: 'img/zapatos-013.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Comodidad maxima con diseno moderno.'
  },
  {
    ref: 'PEPE',
    img: 'img/zapatos-014.jpg',
    badge: '',
    category: 'casual',
    desc: 'Plataforma alta y estilo inigualable.'
  },
  {
    ref: 'PAZ',
    img: 'img/zapatos-015.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Comodidad y estilo en cada paso.'
  },
  {
    ref: 'PECAS',
    img: 'img/zapatos-016.jpg',
    badge: '',
    category: 'casual',
    desc: 'Diseno bicolor con mucha personalidad.'
  },
  {
    ref: 'GAEL',
    img: 'img/zapatos-017.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Suave y comodo, perfecto para el dia a dia.'
  },
  {
    ref: 'BRISA',
    img: 'img/zapatos-018.jpg',
    badge: '',
    category: 'casual',
    desc: 'Fresco y ligero como una brisa. Toque de color verde.'
  },
  {
    ref: 'ANGEL',
    img: 'img/zapatos-019.jpg',
    badge: '',
    category: 'casual',
    desc: 'Clasico y elegante, un basico que no puede faltar.'
  },
  {
    ref: 'MATEO',
    img: 'img/zapatos-020.jpg',
    badge: '',
    category: 'deportivo',
    desc: 'Estilo retro con suela de goma. Tendencia garantizada.'
  },
  {
    ref: 'LUPE',
    img: 'img/zapatos-021.jpg',
    badge: '',
    category: 'casual',
    desc: 'Plataforma gruesa y diseno minimalista.'
  },
];

/* ══════════════════════════
   DATOS — Guerreros
══════════════════════════ */
const WARRIORS = [
  'Magia','Aurora','Uva','Tesoro','Mia','Noche','Alma','Vera','Pepe','Paz',
  'Pecas','Gael','Brisa','Angel','Mateo','Lupe','Naranja','Amalia','Dante',
  'Parche','Tania','Tomillo','Abril','Simba','Roni','Almendra','Bella','Aslan',
  'Francisco','Puchi','Tango','Bruno','Agustin','Conga','Quiron','Danco','Dulce',
  'Dr House','Estrella','Emma','Ari','Fidel','Azul','Gio','Bellota','Lila',
  'Masmelo','Lulu','Cumbia','Mango','Fiona','Max','Jamaica','Milagros','Jacobo',
  'Melon','Milu','Oliver','Leyla','Pandora','Pluto','Pantera','Silvestre',
  'Princesa','Tequila','Lolita','Tamarindo','Ramona','Tini','Thor','Tobi','Zeus',
  'Bernarda','Roco','Gitana','Paris','Cucayo','Miel','Mar','Julieta','Amapola',
  'Emilio','Napoleon','Nevado','Lana','Cuba','Olivia','Pacha','Capuchino',
  'Maximo','Salvatore','Canela','Oso','Cora','Nucita','Mila','Cremita','Buba',
  'Trufa','Candy','Leon','Chapulin','Ada','Pardo','Guapo','Renato',
];

const DOT_COLORS = [
  '#FFB3C6','#B2EAD8','#D4AAEE','#FFCBA4',
  '#FF85A1','#D9F5EC','#EDD9FF','#FFE4EC',
];

/* ══════════════════════════
   TABLA DE TALLAS
══════════════════════════ */
const TALLAS = [
  { talla: 34, min: 21.8, max: 22.6 },
  { talla: 35, min: 22.7, max: 23.4 },
  { talla: 36, min: 23.5, max: 24.1 },
  { talla: 37, min: 24.2, max: 24.8 },
  { talla: 38, min: 24.9, max: 25.5 },
  { talla: 39, min: 25.6, max: 26.3 },
  { talla: 40, min: 26.1, max: 26.3 },
  { talla: 41, min: 26.4, max: 26.6 },
  { talla: 42, min: 26.6, max: 26.8 },
];

/* ══════════════════════════
   TOAST
══════════════════════════ */
function showToast(message, duration = 2500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ══════════════════════════
   NAV
══════════════════════════ */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (!navbar || !hamburger || !navLinks) return;

  // Sombra al hacer scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Abrir / cerrar menu movil
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
  });

  // Cerrar menu al hacer clic en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ══════════════════════════
   RENDER PRODUCTOS
══════════════════════════ */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--gray);font-weight:700;grid-column:1/-1;">No hay productos en esta categoria.</p>';
    return;
  }

  filtered.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.img}" alt="Ref ${product.ref}" loading="lazy" />
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-ref">REF</div>
        <div class="product-name">${product.ref}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-footer">
          <span class="product-sizes">Tallas 34-42</span>
          <button class="product-btn" data-ref="${product.ref}">Pedir 🐾</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Eventos en botones de pedido
  grid.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Escribenos en Instagram para hacer tu pedido de REF ' + btn.dataset.ref + ' ');
    });
  });
}

/* ══════════════════════════
   FILTROS CATALOGO
══════════════════════════ */
function initFilters() {
  const tabContainer = document.getElementById('filter-tabs');
  if (!tabContainer) return;

  tabContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts(tab.dataset.filter);
  });
}

/* ══════════════════════════
   RENDER GUERREROS
══════════════════════════ */
function renderWarriors() {
  const grid = document.getElementById('warriors-grid');
  if (!grid) return;

  WARRIORS.forEach((name, i) => {
    const chip = document.createElement('div');
    chip.className = 'warrior-chip';

    const color = DOT_COLORS[i % DOT_COLORS.length];
    chip.innerHTML = `<div class="dot" style="background:${color};"></div>${name}`;

    grid.appendChild(chip);
  });
}

/* ══════════════════════════
   CALCULADORA DE TALLAS
══════════════════════════ */
function getTalla(cm) {
  if (cm < 21.8) return { talla: 34, note: 'Es probable que la talla 34 te quede bien.' };
  if (cm > 26.8) return { talla: 42, note: 'La 42 es la talla mas grande disponible.' };

  const found = TALLAS.find(t => cm >= t.min && cm <= t.max);
  if (found) return { talla: found.talla, note: '' };

  for (let i = 0; i < TALLAS.length - 1; i++) {
    if (cm > TALLAS[i].max && cm < TALLAS[i + 1].min) {
      return { talla: TALLAS[i + 1].talla, note: 'Estas entre dos tallas, te recomendamos la mayor.' };
    }
  }
  return null;
}

function initCalculadora() {
  const btn    = document.getElementById('calc-btn');
  const input  = document.getElementById('cm-input');
  const result = document.getElementById('calc-result');
  if (!btn || !input || !result) return;

  function calcular() {
    const val = parseFloat(input.value.replace(',', '.'));

    if (isNaN(val) || val <= 0) {
      result.textContent = 'Por favor ingresa una medida valida en cm.';
      result.classList.remove('hidden');
      return;
    }

    const res = getTalla(val);
    if (res) {
      result.innerHTML = 'Tu talla recomendada es <strong>Talla ' + res.talla + '</strong>'
        + (res.note ? '<br><small style="opacity:.8">' + res.note + '</small>' : '');
    } else {
      result.textContent = 'No pudimos determinar tu talla. Escribenos!';
    }
    result.classList.remove('hidden');
  }

  btn.addEventListener('click', calcular);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });
}

/* ══════════════════════════
   COPIAR NUMEROS DE CUENTA
══════════════════════════ */
function initCopyBtns() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      btn.textContent = 'Copiado!';
      showToast('Numero ' + text + ' copiado al portapapeles');
      setTimeout(() => { btn.textContent = 'Copiar numero'; }, 2500);
    });
  });
}

/* ══════════════════════════
   SMOOTH SCROLL
══════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not(.btn)').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        // ... (tu código actual sigue igual aquí dentro)
    });
  });
}

/* ══════════════════════════
   INIT
══════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderProducts();
  initFilters();
  renderWarriors();
  initCalculadora();
  initCopyBtns();
  initSmoothScroll();
  initPaws();
  initParallax();
});

function initPaws() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  // ...todo el código...
}

  function initParallax() {
  const hero  = document.getElementById('hero');
  const img   = hero ? hero.querySelector('.hero-img img') : null;
  // ...todo el código...
}

/* ══════════════════════════
   HUELLITAS ANIMADAS
══════════════════════════ */
function initPaws() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Crea la capa contenedora
  const layer = document.createElement('div');
  layer.className = 'paw-layer';
  hero.appendChild(layer);

  for (let i = 0; i < 16; i++) {
    const el = document.createElement('span');
    el.className = 'paw';
    el.textContent = '🐾';
    el.style.left     = Math.random() * 100 + '%';
    el.style.top      = Math.random() * 100 + '%';
    el.style.fontSize = (14 + Math.random() * 20) + 'px';

    const dur   = 5 + Math.random() * 7;
    const delay = -(Math.random() * dur);
    el.style.animationDuration = dur + 's';
    el.style.animationDelay   = delay + 's';

    layer.appendChild(el);

    // Movimiento orgánico adicional
    const baseX = parseFloat(el.style.left);
    const baseY = parseFloat(el.style.top);
    const amp   = 8 + Math.random() * 14;
    const freq  = 0.0003 + Math.random() * 0.0005;
    const phase = Math.random() * Math.PI * 2;

    (function tick(t) {
      const dx = Math.sin(t * freq + phase) * amp;
      const dy = Math.cos(t * freq * 0.7 + phase) * amp * 0.6;
      el.style.left = (baseX + dx * 0.12) + '%';
      el.style.top  = (baseY + dy * 0.10) + '%';
      requestAnimationFrame(tick);
    })(Math.random() * 10000);
  }
}

/* ══════════════════════════
   PARALLAX SUAVE EN HERO IMG
══════════════════════════ */
function initParallax() {
  const hero  = document.getElementById('hero');
  const img   = hero ? hero.querySelector('.hero-img img') : null;
  if (!hero || !img) return;

  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    const shiftX = dx * 8;
    const shiftY = dy * 6;

    img.style.transform = `scale(1.04) translate(${shiftX}px, ${shiftY}px)`;
  });

  document.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1.04) translate(0, 0)';
  });
}

document.addEventListener("DOMContentLoaded", function() {
    // Definimos la función simple
   window.toggleRescatados = function() {
    var x = document.getElementById("lista-rescatados");
    // Verificamos si está oculto y lo mostramos
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        // Si ya está visible, lo ocultamos
        x.style.display = "none";
        }
    };
});