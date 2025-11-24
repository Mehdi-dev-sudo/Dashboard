const themeBtn = document.getElementById('themeSwitcher');

const icons = {
  dark: `
    <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2a10 10 0 0 0 0 20a9 9 0 0 1 0-18Zm0 18a8 8 0 1 1 0-16a10 10 0 0 0 0 16Z"/>
    </svg>`,
  light: `
    <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 3a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm0 16a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm8-8a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1ZM3 11H1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm16.07-6.07a1 1 0 0 0 .29-.71a1 1 0 0 0-.29-.7l-1.42-1.42a1 1 0 0 0-1.42 1.42l1.42 1.42a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29ZM6.34 16.95a1 1 0 1 0-1.42 1.42l1.42 1.42a1 1 0 0 0 1.42-1.42ZM17.66 16.95l-1.42 1.42a1 1 0 1 0 1.42 1.42l1.42-1.42a1 1 0 0 0-1.42-1.42ZM4.93 4.93a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L4.93 2.07a1 1 0 0 0-1.42 1.42ZM19 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" />
    </svg>`,
};

function getUserTheme() {
  return localStorage.getItem('theme');
}

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isDarkTheme() {
  return document.body.classList.contains('dark');
}

function setBodyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  document.body.classList.toggle('light', !dark);
}

function setTheme(dark) {
  setBodyTheme(dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  updateBtnIcon(dark);
  updateChartImage();
}

function updateBtnIcon(dark = isDarkTheme()) {
  if (themeBtn) {
    themeBtn.innerHTML = dark ? icons.dark : icons.light;
    themeBtn.setAttribute(
      'aria-label',
      dark ? 'Activate light theme' : 'Activate dark theme'
    );
    themeBtn.setAttribute('title', dark ? 'Light theme' : 'Dark theme');
  }
}

(function initTheme() {
  const userSet = getUserTheme();
  const dark = userSet ? userSet === 'dark' : systemPrefersDark();
  setTheme(dark);
})();

if (themeBtn) {
  themeBtn.onclick = () => setTheme(!isDarkTheme());
}

window.addEventListener('storage', function (e) {
  if (e.key === 'theme') updateBtnIcon();
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    if (!getUserTheme()) setTheme(e.matches);
  });

function updateChartImage() {
  const chartImg = document.getElementById('btc-chart');
  if (chartImg) {
    chartImg.src = isDarkTheme() ? 'btc_dark.png' : 'btc_light.png';
  }
}

document.body.classList.add('global-loading');

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', function () {
    setTimeout(() => {
      const loader = document.getElementById('global-loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.remove();
          document.body.classList.remove('global-loading');
        }, 420);
      }
    }, 900);
  });
});

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    // Remove active class from all buttons
    document
      .querySelectorAll('.nav-btn')
      .forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
  });
});
