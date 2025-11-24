# 💰 Modern Financial Dashboard

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

A responsive financial dashboard with glassmorphic design and dark/light theme switching.

[Live Demo](#) · [Report Bug](#)

</div>

---

## ✨ Features

- 🌓 **Auto Theme Detection** - Syncs with system preferences
- 💳 **Card Management** - Virtual card display with balance
- 📊 **Statistics Overview** - Income, expenses, and balance tracking
- 📱 **Fully Responsive** - Works on all devices (320px - 4K)
- ⚡ **Fast & Lightweight** - Pure HTML/CSS/JS, no frameworks

---

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/Mehdi-dev-sudo/financial-dashboard.git
cd financial-dashboard

# Run local server (choose one)
python -m http.server 8000
# or
npx http-server -p 8000

# Open browser
http://localhost:8000
```
**Or** just open `index.html` in your browser.

---

## 🎨 Customization

### Change Colors

css
/* style.css */
:root {
  --accent: #38e1ff;        /* Primary color */
  --accent-gradient: linear-gradient(135deg, #38e1ff, #8767ff, #ff75d1);
}

### Modify Theme Toggle

javascript
/* script.js */
function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

---

## 📂 Structure


financial-dashboard/
├── index.html          # Main structure
├── style.css           # Glassmorphic styling
├── script.js           # Theme logic
└── imgs/
├── btc_dark.png    # Dark mode chart
└── btc_light.png   # Light mode chart

---

## 🗺️ Roadmap

- [ ] Add CRUD for transactions (LocalStorage)
- [ ] Integrate Chart.js for real-time charts
- [ ] Form validation
- [ ] Export data (CSV/PDF)
- [ ] PWA support

---

## 🤝 Contributing

1. Fork the project
2. Create your branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add: Amazing feature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

## 👤 Author

**Mehdi Khorshidi**
- GitHub: [@Mehdi-dev-sudo](https://github.com/Mehdi-dev-sudo)
- Telegram: [@Mehdi_ds_KH](https://t.me/Mehdi_ds_KH)

---

<div align="center">

⭐ **Star this repo if you find it useful!**

</div>
