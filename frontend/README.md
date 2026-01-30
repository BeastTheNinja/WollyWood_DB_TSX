# WollyWood Frontend

React + TypeScript + Vite frontend til WollyWood plakat-webshop.

## Tech Stack

- **React 18** med TypeScript
- **Vite** som build tool og dev server
- **Tailwind CSS** til styling
- **React Router** til client-side routing

## Funktioner

### Plakat Browse

- Grid-layout med responsive design
- Lazy loading af data via custom `useFetchData` hook
- Loading states og error handling

### Filtrering & Sortering

- Genre-filter via sidebar navigation
- Pris-sortering (stigende/faldende)
- Random sortering som default
- Dynamisk URL query params

### Komponenter

#### Pages

- `Posters.tsx` - Hovedside med grid, filter og sortering
- `PosterDetails.tsx` - Detaljevisning af enkelt plakat

#### Components

- `PostersGrid` - Grid layout til plakater
- `SideNav` - Genre filter sidebar
- `Dropdown` - Sorterings dropdown
- `Header` / `Footer` - Layout komponenter

## Scripts

```bash
# Development server (port 5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint kode
npm run lint
```

## Projekt Struktur

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   └── pages/           # Side-specifikke komponenter
│       └── PostersComponent/
│           ├── PostersGrid.tsx
│           ├── SideNav.tsx
│           └── Dropdown.tsx
├── pages/               # Route komponenter
│   ├── Posters.tsx
│   └── PosterDetails.tsx
├── types/               # TypeScript interfaces
│   └── movieType.d.ts
├── data/                # Data fetching
│   └── useFetchData.ts
└── App.tsx              # Root komponent med routing
```

## TypeScript Types

### Moviedata

```typescript
interface Moviedata {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    genres: Genre[];
}
```

### SortOption

```typescript
type SortOption = "price_asc" | "price_desc";
```

## API Integration

Frontend kommunikerer med backend API på `http://localhost:3000`:

```typescript
// Eksempel: Hent plakater med sortering
const params = new URLSearchParams({
    limit: "9",
    attributes: "id,name,image,price",
    sort_key: "price",
    sort_direction: "asc"
});

const url = `http://localhost:3000/posters?${params}`;
```

## Styling

Projektet bruger Tailwind CSS med custom configuration:

- Primary color: `#D97852` (orange)
- Responsive breakpoints
- Custom spacing og border radius

## Browser Support

- Chrome/Edge (seneste 2 versioner)
- Firefox (seneste 2 versioner)
- Safari (seneste 2 versioner)

## Vite Configuration

Template bruger:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) med Babel til Fast Refresh
- Hot Module Replacement (HMR)
- ESLint integration
