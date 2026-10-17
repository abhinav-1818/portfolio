/* All text comes from data.js. This file only builds the page and adds the effects. */
const D = DATA, P = D.profile, M = D.sectionMeta;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const g = p => `linear-gradient(150deg,${p.from},${p.via} 55%,${p.to})`;
const tags = a => `<div class="tags">${a.map(t => `<span>${t}</span>`).join('')}</div>`;
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches, fine = matchMedia('(pointer:fine)').matches;

/* ---- 1. OPENING SEQUENCE ---- */
const open = $('#open'), T = [];
const AUTO_ENTER = 5100;   // home page opens after 5.5 seconds
$('.o-pre').textContent = P.originalLabel;     // CLOUD • AUTOMATION • INNOVATION
$('.o-name').textContent = P.firstName;        // ABHINAV
$('.o-series').textContent = P.seriesTag;      // THE SERIES
$('.o-pic').src = P.portrait;
$('.o-tag').textContent = P.tagline.join('  •  ').toUpperCase();

function playOpening() {
  open.classList.add('reset');
  open.classList.remove('gone', 's1', 's2', 's3', 's4', 'sname', 'sseries');
  void open.offsetWidth;
  open.classList.remove('reset');
  [[300, 's1'], [1800, 'sname'], [3400, 'sseries']]     // 1) line  2) name  3) series
    .forEach(([t, c]) => T.push(setTimeout(() => open.classList.add(c), t)));
  if (AUTO_ENTER) T.push(setTimeout(toWho, AUTO_ENTER));
}
function toWho() {
  T.forEach(clearTimeout);
  open.classList.add('gone');
  start();
}
$('#skip').onclick = toWho;
playOpening();



/* ---- 2. WHO'S WATCHING ---- */
function start() {
  const order = D.viewerProfiles[0].order;
  $$('[data-s]').forEach(s => s.style.order = order.indexOf(s.dataset.s));
  $('#links').innerHTML = [['home', 'Home']].concat(order.map(k => ['s-' + k, M[k].nav])).map(([id, n]) => `<a href="#${id}" data-id="${id}">${n}</a>`).join('');
  document.body.classList.add('ready'); scrollTo(0, 0);
}
$('#who-btn').textContent = 'ABOUT ME';

$('#who-btn').onclick = () => {
  document.querySelector('#s-about')
    .scrollIntoView({ behavior: 'smooth' });
};

/* ---- 3. HERO ---- */
$('.eyebrow').textContent = P.originalLabel; $('#big').textContent = P.firstName; $('.series').textContent = P.seriesTag;
$('#meta').textContent = `MCA  2026 - Present   • B.Sc. Graduate • Cloud Training`;
$('#role').textContent = P.tagline.join('  •  ').toUpperCase(); $('#lead').textContent = P.intro; $('#pic').src = P.portrait;
$('.c1').textContent = 'AWS · Linux · Bash'; $('.c2').textContent = 'CGPA 9.14 B.Sc.'; $('.c3').textContent = 'Fortune Cloud · Pimpri';
if (fine && !reduce) $('#home').onmousemove = e => $('.portrait').style.transform = `translate(${(e.clientX / innerWidth - .5) * -24}px,${(e.clientY / innerHeight - .5) * -12}px)`;

/* ---- 4. SECTION TITLES ---- */
const heads = { originals: 'Originals', picks: `${P.displayName.split(' ')[0]}'s Top Picks`, skills: 'My Skill Universe', story: 'The Full Story' };
Object.keys(M).forEach(k => { const s = $('#s-' + k); if (!s) return; $('.k', s).textContent = M[k].meta; $('h2', s).textContent = heads[k] || M[k].card });

/* ---- 4b. CONTINUE EXPLORING ---- */
const CARD_ORDER = ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'];
const WATERMARK = { story: 'CV', moments: '★', skills: '{ }', originals: String(D.projects.length), about: 'ME', journey: 'S01', picks: String(D.topPicks.length) };

$('#cont').innerHTML = CARD_ORDER.map((k, i) => {
  const m = M[k], p = m.palette;
  return `<button class="cc" data-go="s-${k}" style="--from:${p.from};--via:${p.via}">
    <span class="face">
      <b class="wm">${WATERMARK[k]}</b><i class="play">▶</i>
      <small>EPISODE 0${i + 1}</small><strong>${m.card}</strong><em>${m.meta}</em>
    </span>
    <span class="bar"><u style="width:12%"></u></span>
  </button>`;
}).join('');

const rail = $('#cont'), wrap = $('.c-wrap');
const step = () => rail.querySelector('.cc').offsetWidth + 20;
$('#cL').onclick = () => rail.scrollBy({ left: -step(), behavior: 'smooth' });
$('#cR').onclick = () => rail.scrollBy({ left: step(), behavior: 'smooth' });
function arrows() {
  wrap.classList.toggle('at-start', rail.scrollLeft < 10);
  wrap.classList.toggle('at-end', rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 10);
}
rail.addEventListener('scroll', arrows, { passive: true }); arrows();

$$('[data-go]').forEach(b => b.onclick = () => $('#' + b.dataset.go).scrollIntoView());

/* ---- 5. ABOUT ---- */
const ed = D.education[0], ex = D.experience[0];
$('#about').innerHTML = `<p class="quote">“${P.intro}”</p><div class="facts">
 <div><span>Now</span>${ed.degree.split('—').pop().trim()}<br>${ed.school} · ${ed.score}</div>
 <div><span>Training</span>${ex.role}, ${ex.company}<br>${ex.period}</div>
 <div><span>Focus</span>AWS, Linux & Automation</div><div><span>Based in</span>${P.location}</div></div>${tags(P.interests || [])}`;

/* ---- 6. JOURNEY (seasons & episodes) ---- */
$('#tabs').innerHTML = D.seasons.map((s, i) => `<button data-i="${i}">S0${s.number} · ${s.title}</button>`).join('');
function season(i) {
  const s = D.seasons[i]; $$('#tabs button').forEach((b, j) => b.classList.toggle('on', i == j));
  $('#season').innerHTML = `<h3>S0${s.number} · ${s.title} <small style="color:var(--mut)">${s.period}</small></h3><p class="syn">${s.synopsis}</p>
 <div class="eps">${s.episodes.map(e => `<article class="ep" style="background:${g(e.palette)}"><small>${e.code} · ${e.runtime}</small><h4>${e.title}</h4><p>${e.description}</p>${tags(e.tags)}</article>`).join('')}</div>`
}
$$('#tabs button').forEach(b => b.onclick = () => season(+b.dataset.i)); season(Math.min(3, D.seasons.length - 1));

/* ---- 7. ORIGINALS (projects) + PROJECT OVERLAY ---- */
$('#projects').innerHTML = D.projects.map((p, i) => `<article class="pc" style="background:${g(p.palette)}"><small>${p.genre.toUpperCase()} · ${p.year}</small><h3>${p.title}</h3><p>${p.logline}</p>






${tags(p.stack)}
<div class="project-card-buttons">
  <button class="btn" data-p="${i}">▶ View Project</button>
    <a class="btn github-btn" href="${p.github || P.links.github}"
     target="_blank" rel="noopener noreferrer">GitHub ↗</a>
</div>

</article>`).join('')


  + `<a class="more" href="${P.links.github}" target="_blank"><div>↗<br>More on GitHub<br><small>${P.links.github.replace('https://', '')}</small></div></a>`;
$$('[data-p]').forEach(b => b.onclick = () => {

  const p = D.projects[+b.dataset.p], m = $('#modal'), cs = getComputedStyle(b.closest('.pc'));
m.style.setProperty('background-color', cs.backgroundColor, 'important');
m.style.setProperty('background-image', cs.backgroundImage !== 'none' ? cs.backgroundImage : g(p.palette), 'important');



  $('#mbody').style.setProperty('--a', p.palette.accent);
  $('#mbody').innerHTML = `<small class="k" style="color:var(--a)">${p.genre} · ${p.year}</small><h2>${p.title}</h2><p>${p.logline}</p>
 <div class="mets">${(p.metrics || []).map(x => `<div><b>${x.value}</b><span>${x.label}</span></div>`).join('')}</div>
 <h4>WHAT I BUILT</h4><ul>${(p.build || []).map(x => `<li>${x}</li>`).join('')}</ul><h4>FEATURES</h4><ul>${(p.features || []).map(x => `<li>${x}</li>`).join('')}</ul>
 <h4>STACK</h4>${tags(p.stack)}<br><a class="btn" href="${p.github || P.links.github}" target="_blank">GitHub ↗</a>`; show('modal')
});
if (fine && !reduce) $$('.pc').forEach(c => { c.onmousemove = e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)` }; c.onmouseleave = () => c.style.transform = '' });

/* ---- 8. TOP PICKS ---- */
$('#picks').innerHTML = D.topPicks.map((t, i) => `<div class="tp"><span class="n">${i + 1}</span>
  <div class="tc" style="--from:${t.palette.from};--via:${t.palette.via}">
    <small>${t.label}</small>
    <div class="tx"><b>${t.title}</b><span>${t.detail}</span></div>
  </div></div>`).join('');

const pRail = $('#picks'), pWrap = $('#pkWrap');
const pStep = () => pRail.querySelector('.tp').offsetWidth;
$('#pL').onclick = () => pRail.scrollBy({ left: -pStep(), behavior: 'smooth' });
$('#pR').onclick = () => pRail.scrollBy({ left: pStep(), behavior: 'smooth' });
function pArrows() {
  pWrap.classList.toggle('at-start', pRail.scrollLeft < 10);
  pWrap.classList.toggle('at-end', pRail.scrollLeft + pRail.clientWidth >= pRail.scrollWidth - 10);
}
pRail.addEventListener('scroll', pArrows, { passive: true }); pArrows();

/* ---- 9. SKILLS (click a skill to see where it's used) ---- */
$('#cats').innerHTML = D.skillCategories.map((c, i) => `<button data-i="${i}">${c.title}<small>${c.subtitle}</small></button>`).join('');
function cat(i) {
  const c = D.skillCategories[i]; $$('#cats button').forEach((b, j) => b.classList.toggle('on', i == j));
  $('#tiles').innerHTML = c.skills.map(s => `<button data-n="${s.name}"><i>${s.mono}</i>${s.note ? `<em>${s.note.toUpperCase()}</em>` : ''}<br>${s.name}</button>`).join('');
  $('#ev').textContent = 'Tap a skill to see where it shows up.';
  $$('#tiles button').forEach(b => b.onclick = () => {
    $$('#tiles button').forEach(x => x.classList.remove('on')); b.classList.add('on');
    const e = D.skillEvidence[b.dataset.n]; $('#ev').innerHTML = e ? `<b style="color:#fff">${b.dataset.n}</b> appears in: ${e.join(' · ')}` : 'Currently learning.'
  })
}
$$('#cats button').forEach(b => b.onclick = () => cat(+b.dataset.i)); cat(0);

/* ---- 10. ACHIEVEMENTS & CERTIFICATIONS ---- */
$('#ach').innerHTML = D.achievements.map(a => `<article class="po"><small>${a.laurel}</small><h4>${a.title}</h4><b>${a.org}</b><p>${a.detail}</p>${a.link ? `<p><a href="${a.link}" target="_blank" style="color:#ffb547">View credential ↗</a></p>` : ''}</article>`).join('');
$('#certs').innerHTML = D.certifications.map(c => `<a href="${c.link || '#'}" target="_blank"><small>${c.issuer.toUpperCase()}</small><br>${c.name}</a>`).join('');

/* ---- 11. RESUME (The Full Story) + FINAL ---- */
const fullName = P.fullName.replace(/\s+/g, ' ').trim();

// certifications grouped by issuer:  NPTEL: a, b · AWS: c, d
const byIssuer = {};
D.certifications.forEach(c => (byIssuer[c.issuer] = byIssuer[c.issuer] || []).push(c.name));
const certText = Object.entries(byIssuer).map(([k, v]) => `${k}: ${v.join(', ')}`).join(' · ');

$('#story').innerHTML = `
<div class="rcard">
  <div class="rhead">
    <div><small>STARRING</small><h3>${fullName}</h3></div>
    <div class="rcontact">${P.email}<br><span><a href="${P.links.linkedin}" target="_blank">LinkedIn ↗</a> · <a href="${P.links.github}" target="_blank">GitHub ↗</a></span></div>
  </div>

  <div class="rcols">
    <div>
      <div class="rh">Education</div>
      ${D.education.map(e => `<div class="ri"><div class="rrow"><b>${e.school}</b><span>${e.period}</span></div><p>${e.degree} · <b>${e.score}</b></p></div>`).join('')}

      <div class="rh">Experience</div>
      <div class="ri"><div class="rrow"><b>${ex.company} — ${ex.role}</b><span>${ex.period}</span></div>
        <ul class="rbul">${ex.points.map(p => `<li>${p}</li>`).join('')}</ul></div>

      <div class="rh">Projects</div>
      ${D.projects.map(p => `<div class="ri"><div class="rrow"><b>${p.title}</b><span>${p.year}</span></div><p>${p.stack.join(', ')}</p></div>`).join('')}
    </div>

    <div>
      <div class="rh">Skills</div>
      ${D.skillCategories.map(c => `<p class="rtxt"><b>${c.title}:</b> ${c.skills.map(s => s.name).join(', ')}</p>`).join('')}

      <div class="rh">Achievements</div>
      ${D.achievements.map(a => `<p class="rtxt"><b>${a.title} — ${a.org}.</b> ${a.detail}</p>`).join('')}

      <div class="rh">Certifications</div>
      <p class="rtxt">${certText}</p>
    </div>
  </div>
</div>`;

/* ---- FOOTER: To Be Continued ---- */
$('#endName').textContent = P.displayName;
$('#endRole').textContent = P.role;
$('#endCopy').textContent = `© 2026 ${P.displayName}. A personal, streaming-inspired portfolio — not affiliated with any streaming service.`;

$('#contact').innerHTML =
  `<a class="pill primary" data-mail href="mailto:${P.email}">▶ LET'S BUILD</a>` +
  `<a class="pill" href="${P.links.linkedin}" target="_blank">LinkedIn ↗</a>` +
  `<a class="pill" href="${P.links.github}" target="_blank">GitHub ↗</a>` +
  `<a class="pill" data-mail href="mailto:${P.email}">Email ↗</a>`;

/* ---- 12. OVERLAYS + PLAY INTRO REEL ---- */
function show(id) {
  $('#' + id).classList.add('on');
  document.body.style.overflow = 'hidden';
  ['#app', '#nav', '#fx'].forEach(s => $(s).style.visibility = 'hidden');   // hide the website behind
}
function hide() {
  $$('.ov.on').forEach(o => o.classList.remove('on'));
  document.body.style.overflow = '';
  ['#app', '#nav', '#fx'].forEach(s => $(s).style.visibility = '');          // show the website again
  $('#pdf').src = 'about:blank';
}


$$('[data-close]').forEach(b => b.onclick = hide);
let ri = 0, prog = 0, paused = false; const S = D.introSlides;
$('#bars').innerHTML = S.map(() => '<i><b></b></i>').join('');
function go(i) {
  ri = (i + S.length) % S.length; prog = 0; const s = S[ri];
  $$('#bars b').forEach((b, j) => b.style.width = j < ri ? '100%' : '0');
  $('#slide').style.animation = 'none'; $('#slide').offsetHeight; $('#slide').style.animation = '';
  $('#slide').innerHTML = `<p class="k">${s.kicker}</p><h2>${s.title}</h2>${s.lines.map(l => `<p>${l}</p>`).join('')}${s.chips ? tags(s.chips) : ''}`
}
$('#play').onclick = () => { go(0); paused = false; show('reel') };
$('.zl').onclick = () => go(ri - 1); $('.zr').onclick = () => go(ri + 1);
setInterval(() => {
  if (!$('#reel').classList.contains('on') || paused) return; prog += 50; $$('#bars b')[ri].style.width = prog / 50 + '%';
  if (prog >= 5000) ri === S.length - 1 ? hide() : go(ri + 1)
}, 50);
addEventListener('keydown', e => {
  if ($('#reel').classList.contains('on')) {
    if (e.key === ' ') { e.preventDefault(); paused = !paused }
    if (e.key === 'ArrowRight') go(ri + 1); if (e.key === 'ArrowLeft') go(ri - 1)
  }
  if (e.key === 'Escape') hide(); if (e.key === 'Enter' && !open.classList.contains('gone')) toWho()
});

/* ---- 13. SCROLL EFFECTS: reveal, progress bars, nav ---- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('show');
  const u = $(`[data-go="${e.target.id}"] u`); if (u) u.style.width = '100%'
}), { threshold: .2 });
$$('.rv').forEach(s => io.observe(s));
let last = 0; const nav = $('#nav');
addEventListener('scroll', () => {
  nav.classList.toggle('solid', scrollY > 40); nav.classList.toggle('hide', scrollY > last && scrollY > 300); last = scrollY;
  let cur = 'home'; $$('main>section[id]').forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .4) cur = s.id });
  $$('#links a').forEach(a => a.classList.toggle('on', a.dataset.id === cur))
}, { passive: true });

/* ---- 14. PARTICLES + CUSTOM CURSOR ---- */
const cv = $('#fx'), cx = cv.getContext('2d'), ps = []; const rs = () => { cv.width = innerWidth; cv.height = innerHeight }; rs(); addEventListener('resize', rs);
for (let i = 0; i < 50; i++)ps.push({ x: Math.random() * cv.width, y: Math.random() * cv.height, r: Math.random() * 1.8 + .4, v: Math.random() * .4 + .1 });
(function f() {
  cx.clearRect(0, 0, cv.width, cv.height);
  if (!reduce && document.body.classList.contains('ready') && scrollY < innerHeight) ps.forEach(p => { p.y -= p.v; if (p.y < 0) p.y = cv.height; cx.fillStyle = 'rgba(255,60,80,.7)'; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill() });
  requestAnimationFrame(f)
})();
if (fine) addEventListener('mousemove', e => { const c = $('#cur'); c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; c.classList.toggle('big', !!e.target.closest('a,button')) });

/* ---- 15. FOOTER: watch again, replay opening, particles ---- */
$('#watchAgain').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

$('#replayOpening').onclick = () => {
  scrollTo(0, 0);
  document.body.classList.remove('ready');
  playOpening();
};

(function () {
  const sec = $('#final'), c = $('#fxEnd'), x = c.getContext('2d'); let W, H, dots = [];
  function size() {
    W = c.width = sec.offsetWidth; H = c.height = sec.offsetHeight;
    dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + .4,
      vx: (Math.random() - .5) * .15, vy: -Math.random() * .25 - .05,
      a: Math.random() * .6 + .2, red: Math.random() < .5
    }));
  }
  (function tick() {
    x.clearRect(0, 0, W, H);
    if (!reduce) dots.forEach(p => {
      p.x += p.vx; p.y += p.vy; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W }
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7);
      x.fillStyle = p.red ? `rgba(229,19,43,${p.a})` : `rgba(255,255,255,${p.a * .5})`; x.fill();
    });
    requestAnimationFrame(tick);
  })();
  size(); addEventListener('resize', size);
})();

/* ---- Mobile menu (hamburger) ---- */
const navBtn = $('#navToggle'), navLinks = $('#links');
function menu(open) {
  navLinks.classList.toggle('is-open', open);
  nav.classList.toggle('menu-open', open);
  navBtn.setAttribute('aria-expanded', open);
}
navBtn.onclick = e => { e.stopPropagation(); menu(!navLinks.classList.contains('is-open')); };
navLinks.addEventListener('click', e => { if (e.target.closest('a')) menu(false); });
document.addEventListener('click', e => { if (!e.target.closest('#nav')) menu(false); });
addEventListener('keydown', e => { if (e.key === 'Escape') menu(false); });
addEventListener('resize', () => { if (innerWidth > 768) menu(false); });

/* ---- Email menu (Gmail / mail app / copy) ---- */
const mailMenu = document.createElement('div');
mailMenu.id = 'mailMenu';
mailMenu.innerHTML = `
  <p class="mm-title">${P.email}</p>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(P.email)}&su=${encodeURIComponent('Hello')}" target="_blank" rel="noopener">Open Gmail</a>
  <a href="mailto:${P.email}">Open mail app</a>
  <button type="button" id="mmCopy">Copy email address</button>`;
document.body.appendChild(mailMenu);

let mailY = 0;
function closeMail() { mailMenu.classList.remove('on'); }
function openMail(btn) {
  const r = btn.getBoundingClientRect();
  mailMenu.classList.add('on'); mailY = scrollY;
  const w = mailMenu.offsetWidth, h = mailMenu.offsetHeight;
  mailMenu.style.left = Math.max(10, Math.min(innerWidth - w - 10, r.left + r.width / 2 - w / 2)) + 'px';
  mailMenu.style.top = (r.top - h - 12 > 10 ? r.top - h - 12 : r.bottom + 12) + 'px';
}
$$('[data-mail]').forEach(b => b.addEventListener('click', e => {
  if (!fine) return;                         // phones: open the mail app directly
  e.preventDefault(); e.stopPropagation();
  mailMenu.classList.contains('on') ? closeMail() : openMail(b);
}));
$('#mmCopy').onclick = () => {
  const done = () => { $('#mmCopy').textContent = 'Copied ✓'; setTimeout(() => { $('#mmCopy').textContent = 'Copy email address'; closeMail(); }, 1200); };
  const old = () => { const t = document.createElement('textarea'); t.value = P.email; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); };
  if (navigator.clipboard) navigator.clipboard.writeText(P.email).then(done).catch(old); else old();
};
mailMenu.addEventListener('click', e => { if (e.target.closest('a')) closeMail(); });
document.addEventListener('click', e => { if (!e.target.closest('#mailMenu')) closeMail(); });
addEventListener('scroll', () => { if (Math.abs(scrollY - mailY) > 60) closeMail(); }, { passive: true });
addEventListener('resize', closeMail);
addEventListener('keydown', e => { if (e.key === 'Escape') closeMail(); });

/* ---- Projects: next arrow ---- */
const prRail = $('#projects'), prWrap = $('.project-wrap');
const prStep = () => (prRail.querySelector('.pc')?.offsetWidth || 400) + 18;
$('#projectNext').onclick = () => prRail.scrollBy({ left: prStep(), behavior: 'smooth' });
function prArrows() { prWrap.classList.toggle('at-end', prRail.scrollLeft + prRail.clientWidth >= prRail.scrollWidth - 10); }
prRail.addEventListener('scroll', prArrows, { passive: true }); prArrows();


/* ---- Technologies strip ---- */
$('#techRow').innerHTML = (D.techStrip || []).map(t =>
  `<div class="tech-item"><span class="tech-ico"><img src="assets/tech/${t.icon}" alt="" loading="lazy" width="40" height="40"></span><span class="tech-name">${t.name}</span></div>`
).join('');