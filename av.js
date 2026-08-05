/* ACROVAULT core behaviors — nav, reveals, scramble, counters, FAQ */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Nav scroll state */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 12); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* Mobile menu */
  var burger = document.getElementById('burger'), mMenu = document.getElementById('mMenu');
  if (burger && mMenu) {
    burger.addEventListener('click', function () {
      var open = mMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mMenu.classList.remove('open'); burger.classList.remove('open'); document.body.style.overflow = '';
      });
    });
  }

  /* Scroll reveal */
  var rvs = document.querySelectorAll('.rv');
  if (rvs.length && !reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = Math.min((i % 6) * 60, 300) + 'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    rvs.forEach(function (el) { io.observe(el); });
  } else { rvs.forEach(function (el) { el.classList.add('in'); }); }

  /* Scramble-decode */
  var GLYPHS = '!<>-_\\/[]{}=+*^?#$%&@';
  function scramble(el) {
    var final = el.getAttribute('data-text') || el.textContent.trim();
    el.setAttribute('data-text', final);
    if (reduced) { el.textContent = final; return; }
    var frame = 0, total = Math.max(24, final.length * 2);
    (function tick() {
      var out = '';
      for (var i = 0; i < final.length; i++) {
        if (final[i] === ' ') { out += ' '; continue; }
        var reveal = (frame / total) * final.length * 1.4;
        out += i < reveal ? final[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out; frame++;
      if (frame <= total) requestAnimationFrame(tick); else el.textContent = final;
    })();
  }
  document.querySelectorAll('[data-scramble]').forEach(function (el, i) {
    setTimeout(function () { scramble(el); }, 300 + i * 350);
  });

  /* Count-up */
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduced || target === 0) { el.textContent = target + suffix; return; }
    var start = null, dur = 1500;
    (function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step); else el.textContent = target + suffix;
    })(performance.now());
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: .5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(countUp); }

  /* FAQ accordion */
  document.querySelectorAll('.acc-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var acc = head.parentElement, body = acc.querySelector('.acc-body');
      var isOpen = acc.classList.contains('open');
      document.querySelectorAll('.acc.open').forEach(function (o) {
        o.classList.remove('open'); o.querySelector('.acc-body').style.maxHeight = '0px';
      });
      if (!isOpen) { acc.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });

  /* TOC active highlight (legal pages) */
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var secs = [];
    tocLinks.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href')); if (s) secs.push([a, s]);
    });
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove('active'); });
          var match = secs.find(function (p) { return p[1] === e.target; });
          if (match) match[0].classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    secs.forEach(function (p) { tio.observe(p[1]); });
  }
})();
