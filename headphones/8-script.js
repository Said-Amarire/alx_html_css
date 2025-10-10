// hamburger toggle
document.addEventListener('DOMContentLoaded', function () {
  var ham = document.getElementById('hamburger');
  var nav = document.getElementById('main-nav');

  ham.addEventListener('click', function () {
    var expanded = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Close nav when focus out or link clicked (good mobile behavior)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });
});
