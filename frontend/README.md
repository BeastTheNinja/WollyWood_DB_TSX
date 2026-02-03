# WollyWood Frontend

React 19 + TypeScript + Vite frontend til WollyWood plakat-webshop.

## Tech Stack

- **React 19** med TypeScript
- **Vite** som build tool og dev server
- **Tailwind CSS 4** til styling
- **React Router 7** til client-side routing
- **React Icons** til UI ikoner
- **html-react-parser** til rendering af HTML indhold
- **Custom Hooks** til data fetching (useFetchData)

## Funktioner

### Plakat Browse

- Grid-layout med responsive design
- Lazy loading af data via custom `useFetchData` hook
- Loading states og error handling
- Detaljeret produktside med HTML-parseret beskrivelser

### Dark Mode

- Global dark mode context
- Persistent dark mode preference
- Alle komponenter understøtter dark/light mode

### Autentifikation

- Login/Sign up komponent
- JWT-baseret autentifikation
- Auth context for globale brugertilstande

### UI Komponenter

- **Header** - Navigation og branding
- **Footer** - Footer sektion
- **Nav** - Navigation menu
- **MovieCardHome** - Plakat kort på forside
- **Details** - Detaljeret produktside
- **Title** - Sidehoveder

## Projekt Struktur

```
src/
├── components/
│   ├── context/              # React Context (Dark mode, Auth)
│   │   ├── AuthContext.tsx
│   │   ├── AuthContextProvider.tsx
│   │   ├── darkmodeContext.tsx
│   │   └── darkmodeContextProvider.tsx
│   ├── pages/                # Side-specifikke komponenter
│   │   ├── HomeComponent/
│   │   │   └── MovieCardHome.tsx
│   │   ├── PostersComponent/
│   │   │   ├── PostersGrid.tsx
│   │   │   ├── MovieCard.tsx
│   │   │   ├── SideNav.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── PriceFilter.tsx
│   │   ├── DetailsComponent/
│   │   │   └── Details.tsx
│   │   ├── ContactComponent/
│   │   │   └── Contact.tsx
│   │   ├── AboutUsComponent/
│   │   │   └── FigureCard.tsx
│   │   └── LogInComponent/
│   │       └── Login.tsx
│   ├── Header/
│   │   └── Header.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   ├── Nav/
│   │   └── Nav.tsx
│   └── Title.tsx
├── pages/                     # Route pages
│   ├── HomeView.tsx
│   ├── PostersView.tsx
│   ├── DetailsView.tsx
│   ├── ContactView.tsx
│   ├── AboutUsView.tsx
│   ├── LogInView.tsx
│   ├── NotFoundView.tsx
│   └── DataGrid.tsx
├── router/
│   └── Routes.tsx             # React Router konfiguration
├── data/
│   └── useFetchData.ts        # Custom hook til data fetching
├── types/
│   ├── movieType.d.ts         # Movie/Poster TypeScript types
│   └── userType.d.ts          # User TypeScript types
├── Layout/
│   └── Layout.tsx
├── style/
│   ├── Fonts.css
│   └── tailwind.css
├── assets/
│   ├── icons/
│   └── images/
└── main.tsx
```

## TypeScript Types

### movieType.d.ts

```typescript
type Moviedata = {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  genres: Genre[];
}

type Genre = {
  id: number;
  title: string;
}
```

### userType.d.ts

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  // Andre brugerfelt...
}
```

## Custom Hooks

### useFetchData

Generisk hook til data fetching fra API.

```typescript
const { data, loading, error } = useFetchData<T>(url);
```

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

## Environment Setup

Backend skal køre på `http://localhost:3000` for at frontend kan fetche data korrekt.

```bash
# Start backend først (fra Backend/wallywood_api)
npm run dev

# Derefter start frontend (fra frontend)
npm run dev
```

## Styling

Projektet bruger Tailwind CSS 4 med custom farvepalette:

- Primær farve: `#D1B3A7`
- Tekst: `#524641`
- Grøn: `#006F00`, `#006600`
- Dark mode: Gray-scale (`gray-800`, `gray-700` osv.)

## API Integration

Alle API kald går gennem `useFetchData` hooken som handler loading/error states:

```typescript
const { data, loading, error } = useFetchData<Moviedata>(
  `http://localhost:3000/posters/${params.slug}`
);
```

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
