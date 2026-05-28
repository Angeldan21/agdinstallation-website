# AGD Installation Website

This is a static website for **AGD Installation**, a commercial furniture moving and installation company based in Hayward, California. The site showcases their services, previous projects, company details, and provides a contact form for obtaining quotes.

## Features

- **Clean & Modern Design:** Dark bold hero sections combined with cream and white contrasting blocks.
- **Responsive Navigation & Footer:** Injected dynamically using vanilla JavaScript (`assets/partials.js`).
- **Functional Quote Request Form:** Integrates with [Web3Forms](https://web3forms.com/) for form submissions without needing a backend.
- **Service Categories:** Moving, Relocation, Assembly/Install, Cubicle Systems, and Decommissioning.
- **Project Portfolios:** Filterable showcase of past office installations and moves.

## Project Structure

```
.
├── index.html        # Home page
├── about.html        # About us & company values
├── contact.html      # Contact information and Quote Request Form
├── projects.html     # Featured projects and case studies
├── services.html     # Detailed breakdown of capabilities
└── assets/
    ├── styles.css    # Central stylesheet with variables & responsive layout
    └── partials.js   # Logic to inject Navigation & Footer across all pages
```

## How to Setup & Run

This is a completely static site and does not require a build step or server. You can run it easily on your local machine using any simple HTTP server.

**Option 1: Using Node.js/npx**
```bash
npx serve .
```
or
```bash
npx http-server .
```

**Option 2: Using Python**
```bash
python3 -m http.server 8000
```

After starting the server, open `http://localhost:8000` (or the port specified by your server) in your web browser.

## Form Integration Details

The form in `contact.html` is configured to send emails using **Web3Forms**.
- The form `<form action="https://api.web3forms.com/submit" method="POST">` works natively with an `access_key`.
- An existing access key is included: `a7dd3b3a-5300-4824-b50a-11b3226d8d4d`. If deploying for a real client, replace this with your own Web3Forms key.
- It includes client-side validation logic and handles the success/error states natively via `fetch` API.

## Customization

- **Colors & Typography:** You can modify the global CSS variables located at the top of `assets/styles.css` (e.g. `--ink`, `--safety`, `--accent`).
- **Global Nav/Footer:** Edit `assets/partials.js` to change navigation links or footer text across the entire site.
- **Fonts:** The site uses *Inter* for body text, *Sora* for headings, and *JetBrains Mono* for accent typography, all loaded via Google Fonts.
