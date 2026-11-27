(() => {
  'use strict';

  /* =========================================================================
     ДАННЫЕ ГОСТЕВОГО ДОМА «ДИКИЙ ГУСЬ» (СЕЛИГЕР, Д. НИЖНИЕ КОТИЦЫ)
     ========================================================================= */
  const HERO_SLIDES = [
    { src: 'images/hero/hero_02.jpg', alt: 'Собственный полуостров 1,5 га на озере Селигер с высоты птичьего полёта' },
    { src: 'images/hero/hero_01.jpg', alt: 'Рубленые дома гостевого дома Дикий Гусь с террасой у воды' },
    { src: 'images/hero/hero_03.jpg', alt: 'Собственный песчаный пляж с шезлонгами и пирсом на Селигере' },
    { src: 'images/hero/hero_05.jpg', alt: 'Ресторан Тёрка в вечерней подсветке на берегу Селигера' }
  ];

  const HOUSES = {
    derev: {
      name: 'Дом деревенский №1 или №2 (50 м²)',
      shortName: 'Дом деревенский №1–2',
      maxGuests: 4,
      rates: { low: 4800, mid: 8500, high: 10500, holiday: 13500 },
      photos: [
        { src: 'images/dom2/dom2_01.jpg', cap: 'Дом деревенский №2 · сруб из натурального бревна и мангал' },
        { src: 'images/dom1/dom1_01.jpg', cap: 'Дом деревенский №1 · круглогодичный рубленый сруб' },
        { src: 'images/dom1/dom1_02.jpg', cap: 'Светлая кухня-гостиная с обеденным столом и диваном' },
        { src: 'images/dom1/dom1_03.jpg', cap: 'Полностью оборудованная кухонная зона с техникой и посудой' },
        { src: 'images/dom1/dom1_04.jpg', cap: 'Уютная гостиная из цельного бревна с ТВ' },
        { src: 'images/dom1/dom1_05.jpg', cap: 'Спальня с двумя отдельными кроватями' },
        { src: 'images/dom2/dom2_02.jpg', cap: 'Интерьер кухни-гостиной в Доме №2' },
        { src: 'images/dom2/dom2_03.jpg', cap: 'Спальня и натуральная отделка из дерева' },
        { src: 'images/dom2/dom2_04.jpg', cap: 'Обеденная зона и техника в Доме №2' },
        { src: 'images/territory/territory_08.jpg', cap: 'Вид с крытой террасы дома прямо на озеро Селигер' }
      ]
    },
    terrasa: {
      name: 'Дом с террасой №3 или №4 (77 м²)',
      shortName: 'Дом с террасой №3–4',
      maxGuests: 6,
      rates: { low: 6800, mid: 10500, high: 12500, holiday: 16000 },
      photos: [
        { src: 'images/dom3/dom3_01.jpg', cap: 'Дом с террасой №3 (77 м²) на первой береговой линии' },
        { src: 'images/dom4/dom4_01.jpg', cap: 'Дом с террасой №4 — просторный дом для семьи или компании до 6 гостей' },
        { src: 'images/dom3/dom3_04.jpg', cap: 'Широкая крытая терраса с деревянным столом и лавками' },
        { src: 'images/dom3/dom3_06.jpg', cap: 'Просторная кухня-гостиная с массивным деревянным столом' },
        { src: 'images/dom3/dom3_07.jpg', cap: 'Кухня с электроплитой, СВЧ, холодильником и посудой' },
        { src: 'images/dom3/dom3_08.jpg', cap: 'Гостиная с раскладным двуспальным диваном и ТВ' },
        { src: 'images/dom3/dom3_05.jpg', cap: 'Прихожая и вход в отдельные спальни и санузел' },
        { src: 'images/dom3/dom3_09.jpg', cap: 'Уютная изолированная спальня' },
        { src: 'images/dom3/dom3_10.jpg', cap: 'Светлый интерьер из натурального дерева' },
        { src: 'images/territory/territory_03.jpg', cap: 'Дома №3 и №4 вдоль береговой линии полуострова' }
      ]
    },
    lodka: {
      name: 'Таунхаус «Лодка-5» или «Лодка-6» (62 м²)',
      shortName: 'Таунхаус «Лодка» №5–6',
      maxGuests: 5,
      rates: { low: 5800, mid: 9500, high: 11500, holiday: 15000 },
      photos: [
        { src: 'images/lodka/lodka_01.jpg', cap: 'Двухэтажный таунхаус «Лодка-5» и «Лодка-6» с панорамными окнами' },
        { src: 'images/lodka/lodka_02.jpg', cap: 'Собственная крытая терраса со столом и видом на озеро' },
        { src: 'images/lodka/lodka_03.jpg', cap: 'Гостиная 1-го этажа с тёплым полом и лестницей наверх' },
        { src: 'images/lodka/lodka_04.jpg', cap: 'Просторный второй свет, обеденная зона и диван' },
        { src: 'images/lodka/lodka_05.jpg', cap: 'Кухонная зона с плитой, микроволновкой и холодильником' },
        { src: 'images/lodka/lodka_06.jpg', cap: 'Второй этаж — кровати-подиумы для 3 гостей' },
        { src: 'images/lodka/lodka_07.jpg', cap: 'Панорамный вид на озеро Селигер прямо из спальни 2-го этажа' },
        { src: 'images/lodka/lodka_08.jpg', cap: 'Детали отделки таунхауса «Лодка»' },
        { src: 'images/lodka/lodka_09.jpg', cap: 'Санузел с душевой кабиной и горячей водой' },
        { src: 'images/lodka/lodka_10.jpg', cap: 'Вид на участок и мангальную зону у таунхауса' }
      ]
    },
    restaurant: {
      name: 'Ресторан «Тёрка» на берегу Селигера',
      photos: [
        { src: 'images/hero/hero_05.jpg', cap: 'Ресторан «Тёрка» в вечерних огнях на берегу полуострова' },
        { src: 'images/restaurant/restaurant_01.jpg', cap: 'Наваристый борщ с салом, чесноком и домашним хлебом' },
        { src: 'images/restaurant/restaurant_02.jpg', cap: 'Тыквенный крем-суп с хрустящим беконом и семечками' },
        { src: 'images/restaurant/restaurant_04.jpg', cap: 'Фирменные сытные завтраки с 09:00 до 12:00' },
        { src: 'images/restaurant/restaurant_05.jpg', cap: 'Фирменный бургер с картофелем фри и соусами' },
        { src: 'images/restaurant/restaurant_07.jpg', cap: 'Авторские согревающие чаи со свежими ягодами и мятой' },
        { src: 'images/restaurant/restaurant_06.jpg', cap: 'Свежесваренный кофе и фирменные напитки' },
        { src: 'images/restaurant/restaurant_09.jpg', cap: 'Ассорти завтраков и десертов для всей семьи' },
        { src: 'images/restaurant/restaurant_10.jpg', cap: 'Брускетта с форелью, творожным сыром и икрой' },
        { src: 'images/hero/hero_06.jpg', cap: 'Утренний завтрак в ресторане «Тёрка»' }
      ]
    },
    banya: {
      name: 'Настоящая русская баня на берёзовых дровах',
      photos: [
        { src: 'images/banya/banya_03.jpg', cap: 'Просторная комната отдыха с массивным деревянным столом и печью' },
        { src: 'images/banya/banya_01.jpg', cap: 'Рубленая русская баня прямо у берега Селигера' },
        { src: 'images/banya/banya_04.jpg', cap: 'Большое панорамное окно с видом на озеро' },
        { src: 'images/banya/banya_05.jpg', cap: 'Атмосфера настоящего сруба и мягкого тепла' },
        { src: 'images/banya/banya_06.jpg', cap: 'Зона отдыха для компании до 6 человек с чаем и баранками' }
      ]
    }
  };

  const GALLERY_ITEMS = [
    { src: 'images/hero/hero_02.jpg', cap: 'Собственный полуостров 1,5 га на Селигере', cat: 'peninsula', wide: true },
    { src: 'images/dom3/dom3_01.jpg', cap: 'Дом с террасой №3 на первой линии', cat: 'houses' },
    { src: 'images/restaurant/restaurant_01.jpg', cap: 'Фирменный борщ в ресторане «Тёрка»', cat: 'restaurant' },
    { src: 'images/hero/hero_03.jpg', cap: 'Собственный песчаный пляж с шезлонгами', cat: 'peninsula' },
    { src: 'images/banya/banya_03.jpg', cap: 'Комната отдыха в русской бане на дровах', cat: 'banya' },
    { src: 'images/lodka/lodka_03.jpg', cap: 'Гостиная двухэтажного таунхауса «Лодка»', cat: 'houses' },
    { src: 'images/hero/hero_05.jpg', cap: 'Ресторан «Тёрка» вечером у воды', cat: 'restaurant', wide: true },
    { src: 'images/territory/territory_01.jpg', cap: 'Тихие заливы Селигера вокруг полуострова', cat: 'peninsula' },
    { src: 'images/dom1/dom1_02.jpg', cap: 'Интерьер рубленого дома №1', cat: 'houses' },
    { src: 'images/fishing/fishing_06.jpg', cap: 'Трофейная щука на селигерской рыбалке', cat: 'banya' },
    { src: 'images/restaurant/restaurant_04.jpg', cap: 'Домашние завтраки в ресторане «Тёрка»', cat: 'restaurant' },
    { src: 'images/territory/territory_13.jpg', cap: 'Вечерняя костровая зона на берегу', cat: 'peninsula' }
  ];

  const BANYA_FEE = 5000;
  const fmtRub = (n) => `${n.toLocaleString('ru-RU')} ₽`;

  function toIso(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function parseIso(s) {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  function addDays(d, n) {
    const c = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    c.setDate(c.getDate() + n);
    return c;
  }
  function fmtRu(d) {
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  function pluralNights(n) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return `${n} ночь`;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return `${n} ночи`;
    return `${n} ночей`;
  }
  function pluralGuests(n) {
    if (n === 1) return '1 гость';
    if (n >= 2 && n <= 4) return `${n} гостя`;
    return `${n} гостей`;
  }

  function getSeasonForNight(dateObj) {
    const md = toIso(dateObj).slice(5);
    if (md >= '12-30' || md <= '01-09') return { key: 'holiday', label: 'Новогодний сезон' };
    if (md >= '05-01' && md <= '05-11') return { key: 'holiday', label: 'Майские праздники' };
    if (md >= '06-15' && md <= '08-31') return { key: 'high', label: 'Высокий летний сезон' };
    if ((md >= '05-12' && md <= '06-14') || (md >= '09-01' && md <= '10-15')) return { key: 'mid', label: 'Тёплый сезон' };
    return { key: 'low', label: 'Низкий сезон' };
  }

  /* =========================================================================
     1. ШАПКА, МОБИЛЬНОЕ МЕНЮ И SCROLLSPY
     ========================================================================= */
  const header = document.getElementById('siteHeader');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 36);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  function setMobileMenu(open) {
    if (!burgerBtn || !mobileMenu) return;
    mobileMenu.hidden = !open;
    burgerBtn.classList.toggle('is-open', open);
    burgerBtn.setAttribute('aria-expanded', String(open));
  }
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => setMobileMenu(mobileMenu.hidden));
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMobileMenu(false)));
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.hidden) {
        setMobileMenu(false);
        burgerBtn.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && !mobileMenu.hidden) setMobileMenu(false);
    });
  }

  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  const navSections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && navSections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === id));
      });
    }, { rootMargin: '-32% 0px -58% 0px' });
    navSections.forEach((s) => spy.observe(s));
  }

  /* =========================================================================
     2. HERO СЛАЙДЕР РАКУРСОВ
     ========================================================================= */
  const slideA = document.getElementById('heroSlideA');
  const slideB = document.getElementById('heroSlideB');
  const sceneTabs = Array.from(document.querySelectorAll('.scene-tab'));
  let activeSlide = 0;
  let useLayerA = true;

  function showHeroSlide(idx) {
    if (!slideA || !slideB || idx === activeSlide) return;
    activeSlide = idx;
    const item = HERO_SLIDES[idx];
    const incoming = useLayerA ? slideB : slideA;
    const outgoing = useLayerA ? slideA : slideB;
    incoming.src = item.src;
    incoming.alt = item.alt;
    incoming.classList.add('is-visible');
    outgoing.classList.remove('is-visible');
    useLayerA = !useLayerA;
    sceneTabs.forEach((t, i) => {
      const act = i === idx;
      t.classList.toggle('is-active', act);
      t.setAttribute('aria-selected', String(act));
    });
  }

  sceneTabs.forEach((tab) => {
    tab.addEventListener('click', () => showHeroSlide(Number(tab.dataset.slide)));
  });

  /* =========================================================================
     3. КАЛЬКУЛЯТОР ОТДЫХА + СИНХРОНИЗАЦИЯ С ПАНЕЛЬЮ НА HERO
     ========================================================================= */
  const today = new Date();
  const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysToFri = (5 - todayClean.getDay() + 7) % 7 || 7;
  const defIn = addDays(todayClean, daysToFri);
  const defOut = addDays(defIn, 2);

  const quickIn = document.getElementById('quickCheckIn');
  const quickOut = document.getElementById('quickCheckOut');
  const quickHouse = document.getElementById('quickHouse');
  const quickGuests = document.getElementById('quickGuests');
  const heroQuickForm = document.getElementById('heroQuickForm');

  const calcIn = document.getElementById('calcIn');
  const calcOut = document.getElementById('calcOut');
  const calcGuests = document.getElementById('calcGuestsSelect');
  const calcHouseBtns = Array.from(document.querySelectorAll('.calc-house-btn'));
  const presetPills = Array.from(document.querySelectorAll('.preset-pill'));
  const addonBanya = document.getElementById('addonBanya');
  const addonPet = document.getElementById('addonPet');
  const addonBreakfast = document.getElementById('addonBreakfast');

  const sumHouseTitle = document.getElementById('sumHouseTitle');
  const sumSeasonBadge = document.getElementById('sumSeasonBadge');
  const sumDates = document.getElementById('sumDates');
  const sumNights = document.getElementById('sumNights');
  const sumGuests = document.getElementById('sumGuests');
  const sumStayPrice = document.getElementById('sumStayPrice');
  const sumBanyaRow = document.getElementById('sumBanyaRow');
  const sumTotalPrice = document.getElementById('sumTotalPrice');
  const waBookBtn = document.getElementById('waBookBtn');

  let state = {
    house: 'terrasa',
    checkIn: toIso(defIn),
    checkOut: toIso(defOut),
    guests: 4
  };

  function syncInputsFromState() {
    if (quickIn) quickIn.value = state.checkIn;
    if (quickOut) quickOut.value = state.checkOut;
    if (quickHouse) quickHouse.value = state.house;
    if (quickGuests) quickGuests.value = String(state.guests);
    if (calcIn) calcIn.value = state.checkIn;
    if (calcOut) calcOut.value = state.checkOut;
    if (calcGuests) calcGuests.value = String(state.guests);
    calcHouseBtns.forEach((b) => {
      const act = b.dataset.calcHouse === state.house;
      b.classList.toggle('is-active', act);
      b.setAttribute('aria-checked', String(act));
    });
  }

  function clampGuestsForHouse() {
    const maxG = HOUSES[state.house].maxGuests;
    if (state.guests > maxG) state.guests = maxG;
    [quickGuests, calcGuests].forEach((sel) => {
      if (!sel) return;
      Array.from(sel.options).forEach((opt) => {
        opt.disabled = Number(opt.value) > maxG;
      });
    });
  }

  function recalc() {
    clampGuestsForHouse();
    let dIn = parseIso(state.checkIn);
    let dOut = parseIso(state.checkOut);
    let nights = Math.round((dOut - dIn) / 86400000);
    if (nights < 2 || Number.isNaN(nights)) {
      nights = 2;
      dOut = addDays(dIn, 2);
      state.checkOut = toIso(dOut);
    }
    syncInputsFromState();

    const house = HOUSES[state.house];
    let staySum = 0;
    const seasonLabels = new Set();
    for (let i = 0; i < nights; i++) {
      const s = getSeasonForNight(addDays(dIn, i));
      staySum += house.rates[s.key];
      seasonLabels.add(s.label);
    }

    const withBanya = Boolean(addonBanya && addonBanya.checked);
    const withPet = Boolean(addonPet && addonPet.checked);
    const withBreakfast = Boolean(addonBreakfast && addonBreakfast.checked);
    const total = staySum + (withBanya ? BANYA_FEE : 0);

    if (sumHouseTitle) sumHouseTitle.textContent = house.name;
    if (sumSeasonBadge) sumSeasonBadge.textContent = `${Array.from(seasonLabels).join(' + ')} · мин. 2 суток`;
    if (sumDates) sumDates.textContent = `${fmtRu(dIn)} — ${fmtRu(dOut)}`;
    if (sumNights) sumNights.textContent = pluralNights(nights);
    if (sumGuests) sumGuests.textContent = pluralGuests(state.guests);
    if (sumStayPrice) sumStayPrice.textContent = fmtRub(staySum);
    if (sumBanyaRow) sumBanyaRow.hidden = !withBanya;
    if (sumTotalPrice) sumTotalPrice.textContent = fmtRub(total);

    if (waBookBtn) {
      const extras = [];
      if (withBanya) extras.push('русская баня (2 ч.)');
      if (withPet) extras.push('заезд с питомцем');
      if (withBreakfast) extras.push('завтрак в ресторане «Тёрка»');
      const msg = [
        `Здравствуйте! Хотим забронировать отдых в «Диком Гусе»:`,
        `• Дом: ${house.name}`,
        `• Даты: ${fmtRu(dIn)} — ${fmtRu(dOut)} (${pluralNights(nights)})`,
        `• Гости: ${pluralGuests(state.guests)}`,
        extras.length ? `• Дополнительно: ${extras.join(', ')}` : null,
        `• Ориентировочный расчёт на сайте: ${fmtRub(total)}`,
        `Подскажите, пожалуйста, свободны ли эти даты?`
      ].filter(Boolean).join('\n');
      waBookBtn.href = `https://wa.me/79037406661?text=${encodeURIComponent(msg)}`;
    }
  }

  if (heroQuickForm) {
    heroQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.checkIn = quickIn.value || state.checkIn;
      state.checkOut = quickOut.value || state.checkOut;
      state.house = quickHouse.value;
      state.guests = Number(quickGuests.value);
      presetPills.forEach((p) => p.classList.remove('is-active'));
      recalc();
      setBookingMode('calc');
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  calcHouseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.house = btn.dataset.calcHouse;
      recalc();
    });
  });

  if (calcIn) calcIn.addEventListener('change', () => {
    state.checkIn = calcIn.value;
    presetPills.forEach((p) => p.classList.remove('is-active'));
    recalc();
  });
  if (calcOut) calcOut.addEventListener('change', () => {
    state.checkOut = calcOut.value;
    presetPills.forEach((p) => p.classList.remove('is-active'));
    recalc();
  });
  if (calcGuests) calcGuests.addEventListener('change', () => { state.guests = Number(calcGuests.value); recalc(); });
  [addonBanya, addonPet, addonBreakfast].forEach((el) => el && el.addEventListener('change', recalc));

  presetPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      presetPills.forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const p = pill.dataset.preset;
      const y = todayClean.getFullYear();
      const nextY = todayClean.getMonth() >= 10 ? y + 1 : y;
      if (p === 'weekend') {
        state.checkIn = toIso(defIn);
        state.checkOut = toIso(defOut);
      } else if (p === 'ny') {
        state.checkIn = `${y}-12-31`;
        state.checkOut = `${y + 1}-01-03`;
      } else if (p === 'may') {
        state.checkIn = `${nextY}-05-01`;
        state.checkOut = `${nextY}-05-04`;
      } else if (p === 'summer') {
        state.checkIn = `${nextY}-07-10`;
        state.checkOut = `${nextY}-07-14`;
      }
      recalc();
    });
  });

  document.querySelectorAll('[data-select-house]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.house = btn.dataset.selectHouse;
      recalc();
      setBookingMode('calc');
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  recalc();

  /* =========================================================================
     3.5 МИНИ-КАРУСЕЛИ ФОТО ПРЯМО НА КАРТОЧКАХ ДОМОВ (СТРЕЛКИ + СВАЙП)
     ========================================================================= */
  document.querySelectorAll('[data-carousel]').forEach((mediaEl) => {
    const houseKey = mediaEl.dataset.carousel;
    const house = HOUSES[houseKey];
    if (!house || !house.photos || house.photos.length < 2) return;
    const previewPhotos = house.photos.slice(0, 5);
    const imgEl = mediaEl.querySelector('.house-slide-img');
    const prevBtn = mediaEl.querySelector('.card-prev');
    const nextBtn = mediaEl.querySelector('.card-next');
    const dotsBox = mediaEl.querySelector('.card-dots');
    let idx = 0;

    if (dotsBox) {
      dotsBox.innerHTML = previewPhotos
        .map((_, i) => `<span class="card-dot${i === 0 ? ' is-active' : ''}"></span>`)
        .join('');
    }
    const dots = dotsBox ? Array.from(dotsBox.querySelectorAll('.card-dot')) : [];

    function go(nextIdx) {
      idx = (nextIdx + previewPhotos.length) % previewPhotos.length;
      if (imgEl) {
        imgEl.classList.add('is-fading');
        setTimeout(() => {
          imgEl.src = previewPhotos[idx].src;
          imgEl.alt = previewPhotos[idx].cap;
          imgEl.classList.remove('is-fading');
        }, 120);
      }
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); go(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); go(idx + 1); });

    // Поддержка свайпа пальцем на телефоне
    let touchStartX = 0;
    mediaEl.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    mediaEl.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
    }, { passive: true });
  });

  /* =========================================================================
     4. ПЕРЕКЛЮЧЕНИЕ НА РЕАЛЬНЫЙ ВИДЖЕТ БРОНИРОВАНИЯ HOMERESERVE (ПО УМОЛЧАНИЮ)
     ========================================================================= */
  const modeBtns = Array.from(document.querySelectorAll('.mode-btn'));
  const calcPanel = document.getElementById('bookingCalcPanel');
  const widgetPanel = document.getElementById('bookingWidgetPanel');
  const switchToWidgetBtn = document.getElementById('switchToWidgetBtn');
  const switchToCalcBtn = document.getElementById('switchToCalcBtn');
  let hrLoaded = false;

  function loadHomeReserveWidget() {
    if (hrLoaded) return;
    hrLoaded = true;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://homereserve.ru/widget.js';
    script.onload = () => {
      const msg = document.getElementById('hrLoadingMsg');
      if (window.homereserve && typeof window.homereserve.initWidgetSearch === 'function') {
        if (msg) msg.remove();
        window.homereserve.initWidgetSearch({ token: 'wqkGcC5onA' });
      }
    };
    script.onerror = () => {
      const msg = document.getElementById('hrLoadingMsg');
      if (msg) msg.textContent = 'Календарь HomeReserve временно недоступен — воспользуйтесь калькулятором или позвоните +7 (903) 740-66-61.';
    };
    document.body.appendChild(script);
  }

  function setBookingMode(mode) {
    modeBtns.forEach((b) => {
      const act = b.dataset.bookingMode === mode;
      b.classList.toggle('is-active', act);
      b.setAttribute('aria-selected', String(act));
    });
    if (calcPanel) calcPanel.hidden = mode !== 'calc';
    if (widgetPanel) widgetPanel.hidden = mode !== 'widget';
    if (mode === 'widget') loadHomeReserveWidget();
  }

  modeBtns.forEach((b) => b.addEventListener('click', () => setBookingMode(b.dataset.bookingMode)));
  if (switchToWidgetBtn) switchToWidgetBtn.addEventListener('click', () => setBookingMode('widget'));
  if (switchToCalcBtn) switchToCalcBtn.addEventListener('click', () => setBookingMode('calc'));

  // Автозагрузка живого виджета HomeReserve, как только секция бронирования приближается к экрану
  const bookingSection = document.getElementById('booking');
  if (bookingSection && 'IntersectionObserver' in window) {
    const hrObs = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) {
        loadHomeReserveWidget();
        obs.disconnect();
      }
    }, { rootMargin: '320px 0px' });
    hrObs.observe(bookingSection);
  } else {
    loadHomeReserveWidget();
  }

  /* =========================================================================
     5. ФОТОГАЛЕРЕЯ С ФИЛЬТРАМИ И НАТИВНЫЙ LIGHTBOX <dialog>
     ========================================================================= */
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    const list = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === filter);
    galleryGrid.innerHTML = '';
    list.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `gallery-tile${item.wide && filter === 'all' ? ' is-wide' : ''}`;
      btn.style.transitionDelay = `${Math.min(idx * 45, 360)}ms`;
      btn.setAttribute('aria-label', `Открыть фото: ${item.cap}`);
      btn.innerHTML = `<img src="${item.src}" alt="${item.cap}" loading="lazy"><span class="gallery-tile-cap">${item.cap}</span>`;
      btn.addEventListener('click', () => openLightbox('Фотогалерея «Дикий Гусь»', list, idx));
      galleryGrid.appendChild(btn);
      requestAnimationFrame(() => btn.classList.add('is-in'));
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderGallery(btn.dataset.filter);
    });
  });
  renderGallery('all');

  const lbDialog = document.getElementById('lightboxDialog');
  const lbTitle = document.getElementById('lbTitle');
  const lbCounter = document.getElementById('lbCounter');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbThumbs = document.getElementById('lbThumbs');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let lbPhotos = [];
  let lbIndex = 0;

  function renderLightboxSlide() {
    if (!lbPhotos.length) return;
    const item = lbPhotos[lbIndex];
    lbImg.src = item.src;
    lbImg.alt = item.cap || '';
    lbCaption.textContent = item.cap || '';
    lbCounter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;
    if (lbThumbs) {
      Array.from(lbThumbs.children).forEach((t, i) => t.classList.toggle('is-active', i === lbIndex));
    }
  }

  function openLightbox(title, photos, startIdx = 0) {
    if (!lbDialog || !photos.length) return;
    lbPhotos = photos;
    lbIndex = startIdx;
    lbTitle.textContent = title;
    if (lbThumbs) {
      lbThumbs.innerHTML = '';
      photos.forEach((p, idx) => {
        const tb = document.createElement('button');
        tb.type = 'button';
        tb.className = 'lb-thumb';
        tb.setAttribute('aria-label', `Фото ${idx + 1}`);
        tb.innerHTML = `<img src="${p.src}" alt="">`;
        tb.addEventListener('click', () => {
          lbIndex = idx;
          renderLightboxSlide();
        });
        lbThumbs.appendChild(tb);
      });
    }
    renderLightboxSlide();
    if (!lbDialog.open) lbDialog.showModal();
  }

  function stepLightbox(delta) {
    if (!lbPhotos.length) return;
    lbIndex = (lbIndex + delta + lbPhotos.length) % lbPhotos.length;
    renderLightboxSlide();
  }

  if (lbClose) lbClose.addEventListener('click', () => lbDialog.close());
  if (lbPrev) lbPrev.addEventListener('click', () => stepLightbox(-1));
  if (lbNext) lbNext.addEventListener('click', () => stepLightbox(1));
  if (lbDialog) {
    lbDialog.addEventListener('click', (e) => {
      if (e.target === lbDialog) lbDialog.close();
    });
    lbDialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  document.querySelectorAll('[data-open-gallery]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.openGallery;
      const obj = HOUSES[key];
      if (obj) openLightbox(obj.name, obj.photos, 0);
    });
  });

  document.querySelectorAll('[data-open-single]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openLightbox('План-схема полуострова', [{ src: btn.dataset.openSingle, cap: btn.dataset.singleCaption || '' }], 0);
    });
  });

  /* =========================================================================
     6. ПЕРЕКЛЮЧАТЕЛЬ МАРШРУТОВ ИЗ МОСКВЫ
     ========================================================================= */
  const routeTabs = Array.from(document.querySelectorAll('.route-tab'));
  const routeRiga = document.getElementById('routeRiga');
  const routeLeningrad = document.getElementById('routeLeningrad');
  routeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const r = tab.dataset.route;
      routeTabs.forEach((t) => {
        const act = t.dataset.route === r;
        t.classList.toggle('is-active', act);
        t.setAttribute('aria-selected', String(act));
      });
      if (routeRiga) routeRiga.hidden = r !== 'riga';
      if (routeLeningrad) routeLeningrad.hidden = r !== 'leningrad';
    });
  });

  /* =========================================================================
     6.5 КОПИРОВАНИЕ GPS-КООРДИНАТ ПОЛУОСТРОВА В 1 КЛИК
     ========================================================================= */
  const copyGpsBtn = document.getElementById('copyGpsBtn');
  if (copyGpsBtn) {
    const origText = copyGpsBtn.textContent;
    copyGpsBtn.addEventListener('click', async () => {
      const coords = copyGpsBtn.dataset.gps || '57.0273, 33.2853';
      try {
        await navigator.clipboard.writeText(coords);
        copyGpsBtn.textContent = `✓ Скопировано: ${coords}`;
      } catch {
        const ta = document.createElement('textarea');
        ta.value = coords;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        copyGpsBtn.textContent = `✓ Скопировано: ${coords}`;
      }
      setTimeout(() => { copyGpsBtn.textContent = origText; }, 2400);
    });
  }

  /* =========================================================================
     7. ПЛАВНОЕ КАСКАДНОЕ ПОЯВЛЕНИЕ КАРТОЧЕК И БЛОКОВ (REVEAL)
     ========================================================================= */
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  function revealVisible() {
    const vh = window.innerHeight || 900;
    reveals.forEach((el) => {
      if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < vh + 40) {
        el.classList.add('is-in');
      }
    });
  }
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -10px 0px' });
    reveals.forEach((el) => io.observe(el));
    window.addEventListener('scroll', revealVisible, { passive: true });
    revealVisible();
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }
})();
