# WollyWood DB TSX

Et fullstack webshop-projekt til filmplakater bygget med React, TypeScript, Vite, Tailwind CSS og Node.js.

## Projektbeskrivelse

WollyWood er en online plakat-webshop hvor brugere kan browse, filtrere og købe filmplakater. Projektet omfatter en fuldt funktionel backend API og en responsiv frontend med dark mode support.

## Teknologier

### Frontend

- **React 19** med TypeScript
- **Vite** som build tool og dev server
- **Tailwind CSS 4** til styling
- **React Router 7** til client-side routing
- **React Icons** til UI ikoner
- **html-react-parser** til rendering af HTML indhold

### Backend

- **Node.js** med Express
- **Sequelize** som ORM
- **MySQL** database
- **JWT** til autentifikation
- **bcrypt** til password hashing
- **CORS** support
- Port: 3000

## Funktioner

- 🎬 Browse filmplakater med detaljevisning
- 🎭 Filtrer efter genre
- 💰 Prisfiltrering og sortering
- 🌙 Dark mode support
- 👤 Brugeradministration (Login/Sign up)
- 🛒 Shopping cart funktionalitet
- 📱 Fuldt responsiv design
- 🔐 JWT autentifikation
- 📊 Admin datavurdering

## Installation & Setup

### Backend

```bash
cd Backend/wallywood_api
npm install
npm run dev  # Starter med nodemon på port 3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev  # Starter Vite dev server på port 5173
```

Backend skal køre på `http://localhost:3000` for at frontend kan fetche data.

## Projekt Struktur

```
WollyWood_DB_TSX/
├── README.md
├── Backend/
│   └── wallywood_api/
│       ├── Controllers/        # API request handlers
│       │   ├── cartline.controller.js
│       │   ├── genre.controller.js
│       │   ├── poster.controller.js
│       │   ├── userpost.controller.js
│       │   ├── Seeder/        # Database seed data
│       │   └── System/        # User, org, group management
│       ├── Models/             # Sequelize database models
│       ├── Routes/             # API endpoints
│       ├── Middleware/         # Auth, helpers
│       ├── Data/               # CSV seed files
│       ├── Config/             # Database config
│       ├── index.js
│       └── package.json
└── frontend/
    ├── README.md
    ├── src/
    │   ├── components/         # React komponenter
    │   │   ├── context/       # React Context (Dark mode, Auth)
    │   │   ├── pages/         # Side-komponenter
    │   │   │   ├── HomeComponent/
    │   │   │   ├── PostersComponent/
    │   │   │   ├── DetailsComponent/
    │   │   │   ├── ContactComponent/
    │   │   │   ├── AboutUsComponent/
    │   │   │   └── LogInComponent/
    │   │   ├── Header/
    │   │   ├── Footer/
    │   │   └── Nav/
    │   ├── pages/              # Route pages
    │   ├── router/             # React Router config
    │   ├── data/               # Fetch hooks
    │   ├── types/              # TypeScript definitions
    │   ├── style/              # Global styles
    │   ├── assets/             # Images, icons
    │   └── main.tsx
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

## API Endpoints

### Plakater

- `GET /posters` - Alle plakater
- `GET /posters/:slug` - Enkelt plakat

### Genrer

- `GET /genres` - Alle genrer

### Brugere

- `POST /auth/login` - Login
- `POST /auth/register` - Registrering

### Kurv

- `POST /cart` - Tilføj til kurv
- `GET /cart` - Se kurv

## Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build til production
npm run preview      # Preview production build
npm run lint         # Lint kode
```└── README.md
```

## API Endpoints

- `GET /posters` - Hent alle plakater
- `GET /posters/list_by_genre/:id` - Filtrer efter genre
- Query params: `sort_key`, `sort_direction`, `limit`, `attributes`
