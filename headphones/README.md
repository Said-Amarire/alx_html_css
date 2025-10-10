# Headphones - Implementation from scratch

This project implements a landing page from scratch using **HTML** and **CSS** (no CSS frameworks). A small JavaScript file is used only for the hamburger menu (task 8).

## Requirements implemented

- Responsive layout: switches to mobile layout when screen width is **480px or less**.
- Links hover/active color: `#FF6565`.
- Buttons hover/active: `opacity: 0.9`.
- Maximum content width: **1000px**, centered in the page.
- No external CSS frameworks.
- No JavaScript except the hamburger menu (task 8).
- The "Our results" pentagons are drawn using **CSS only** (clip-path).
- Animations added to "What we do" and "Our results".

## Files

headphones/
├── README.md
├── 8-index.html --> final page that includes all sections
├── 8-styles.css --> stylesheet (variables, responsive rules, animations)
└── 8-script.js --> hamburger toggle script


## How to test locally

1. Open `8-index.html` in your browser (double-click the file).
2. Resize the browser window: at **≤480px** the mobile layout should activate.
3. Hover over links -> color should change to `#FF6565`.
4. Hover on buttons -> opacity should change to `0.9`.
5. Open developer tools and toggle mobile size to verify hamburger menu and stacked nav.

## Accessibility notes

- Semantic HTML tags are used (`header`, `main`, `section`, `footer`, `form`).
- Buttons and nav controls include `aria` attributes and keyboard focus styles.
- Colors have sufficient contrast on large text. Adjust if needed for strict WCAG.

---

Good luck — upload these files into `alx_html_css/headphones`, then request review.
