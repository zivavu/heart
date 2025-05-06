# Terminal Selector (Home)

- Ekran startowy wyświetla listę dostępnych terminali (np. Front End Canvas, API Playground, Data Modeler, ...).
- Każdy terminal ma nazwę, opis, ikonę.
- Użytkownik wybiera terminal i przechodzi do jego dedykowanego interfejsu.
- Możliwość powrotu do listy terminali w dowolnym momencie (np. przycisk "Zmień terminal").
- Terminale są modularne, łatwo dodawać kolejne.
- Lista terminali może być generowana dynamicznie (np. na podstawie plików konfiguracyjnych, API, uprawnień użytkownika).
- Każdy terminal może mieć własny layout, funkcje, integracje z AI, własny routing.

## Szkic UI/UX ekranu wyboru terminala

- Lista lub siatka kart terminali:
  - Ikona terminala
  - Nazwa terminala (np. "Front End Canvas")
  - Krótki opis (np. "Tworzenie stron internetowych na canvasie")
  - Przycisk "Wybierz" lub kliknięcie w kartę
- Pasek nawigacji/menu z opcją powrotu do wyboru terminala ("Zmień terminal")
- Możliwość wyszukiwania/filtracji terminali (przy większej liczbie)
- Responsywny układ (lista pionowa na mobile, siatka na desktop)

### Przykładowe dane terminali (JS/JSON):

```js
const terminals = [
  {
    id: 'frontend-canvas',
    name: 'Front End Canvas',
    description: 'Tworzenie stron internetowych na interaktywnym canvasie',
    icon: '🖌️'
  },
  {
    id: 'api-playground',
    name: 'API Playground',
    description: 'Eksperymentuj z API i integracjami',
    icon: '🔌'
  },
  {
    id: 'data-modeler',
    name: 'Data Modeler',
    description: 'Projektuj modele danych i relacje',
    icon: '🗄️'
  }
];
```

# Interaktywny Kompas Terminali (Uniwersum)

- Zamiast klasycznej listy terminali, użytkownik porusza się po interaktywnym uniwersum/kompasie.
- W różnych "krainach"/obszarach pojawiają się napisy, emocje, przymiotniki, rzeczowniki – generowane przez proste AI (np. "wymyśl 5 inspirujących nazw krain dla narzędzi webowych").
- Każda kraina to inny terminal/projekt (np. Front End Canvas, Data Modeler, API Playground).
- Użytkownik wybiera terminal, "lądując" w danej krainie (np. klik, drag, animacja).
- Możliwość odświeżenia/wylosowania nowego uniwersum (AI generuje nowe inspiracje).

## Struktura monorepo
- Każdy terminal to osobny folder/projekt (np. `packages/frontend-canvas`, `packages/api-playground`).
- Całość zarządzana jako monorepo (np. przez Bun workspaces).
- Terminale mogą być rozwijane niezależnie, ale korzystają ze wspólnych narzędzi, AI-routera, itd.

## UX/UI
- Kompas/uniwersum jako interaktywny canvas (drag, zoom, klik na krainę).
- Każda kraina/terminal ma swój styl, kolor, animację, opis.
- Po wejściu do terminala – dedykowany interfejs (np. Front End Canvas).

## AI
- Prosty AI generuje napisy, emocje, przymiotniki, rzeczowniki dla krain.
- Przykładowy prompt: "Wymyśl 5 inspirujących nazw krain dla narzędzi do tworzenia stron internetowych. Dodaj do każdej emocję i przymiotnik."

## Rozbudowa
- Łatwo dodawać nowe terminale/krainy (nowy folder, nowy wpis w AI, nowa karta na kompasie).
- Możliwość rozwoju uniwersum o kolejne warstwy, animacje, AI.

# Kompas 3D – Fraktalny, AI-generowany wszechświat terminali

- Kompas to centralny, interaktywny element narzędzia – eksploracja uniwersum terminali/projektów w 3D.
- Każda płaszczyzna kompasu jest generowana przez AI (np. tematy, emocje, wspomnienia, inspiracje, stany umysłu, przymiotniki, relacje).
- Użytkownik może eksplorować różne płaszczyzny, znajdować swoje miejsce, odkrywać nowe krainy i terminale.
- Struktura kompasu jest fraktalna – każda płaszczyzna może zawierać kolejne pod-płaszczyzny, stany, emocje, wspomnienia, które tworzą człowieka i jego projekty.
- AI generuje jak najwięcej elementów projektu: nazwy, opisy, emocje, płaszczyzny, relacje, inspiracje, nawet układ przestrzenny.
- Kompas to nie tylko wybór terminala, ale inspirująca podróż po uniwersum możliwości, stanów i kreatywności.
- Każde miejsce na kompasie może być punktem startu do nowego projektu, terminala lub eksploracji.
- Kompas jest otwarty na rozbudowę o kolejne warstwy, animacje, AI, personalizację. 