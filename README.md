# WollyWood DB TSX

Et fullstack webshop-projekt bygget med React, TypeScript, Vite og Tailwind CSS.

## Projektbeskrivelse

WollyWood er en online plakat-webshop hvor brugere kan browse, sortere og filtrere filmplakater efter genre og pris.

## Teknologier

### Frontend

- **React 18** med TypeScript
- **Vite** som build tool
- **Tailwind CSS** til styling
- **React Router** til navigation

### Backend

- Node.js REST API (port 3000)
- Endpoints til plakater, genrer og sortering

## Funktioner

- 📋 Browse plakater med paginering
- 🎭 Filtrer efter genre
- 💰 Sortér efter pris (lav→høj / høj→lav)
- 🎲 Random sortering som default
- 📱 Responsiv design

## Installation

```bash
# Klon repository
git clone https://github.com/BeastTheNinja/WollyWood_DB_TSX.git

# Installer frontend dependencies
cd frontend
npm install

# Start frontend
npm run dev
```

Backend skal køre på `http://localhost:3000`

## Projekt Struktur

```
WollyWood_DB_TSX/
├── frontend/           # React frontend applikation
│   ├── src/
│   │   ├── components/ # Genbrugelige komponenter
│   │   ├── pages/      # Side-komponenter
│   │   ├── types/      # TypeScript type definitions
│   │   └── data/       # Data fetching hooks
│   └── ...
└── README.md
```

## API Endpoints

- `GET /posters` - Hent alle plakater
- `GET /posters/list_by_genre/:id` - Filtrer efter genre
- Query params: `sort_key`, `sort_direction`, `limit`, `attributes`
