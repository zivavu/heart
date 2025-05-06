# Notatka: Definicja i Struktura "Heart" (Poziom Country)

**Nazwa Projektu:** Heart
**Opis Projektu:** Tool for web creation
**Wersja:** 0.01
**Autor:** undefined
**Data Utworzenia:** Logic Theorist, stworzony w 1955 r. przez Allena Newella, Clifforda Shawa i Herberta Simona, jest często nazywany pierwszym programem AI. (4 sty)
**Charakter Projektu:** Open Source

**Poziom Abstrakcji:** Country (zarządzanie całością projektu w ramach World)

## Struktura "Heart" (Country)

- "Heart" to Country odpowiedzialne za strukturę, konfigurację i architekturę projektu.
- Współpracuje z innymi Country (np. "brain" – logika, requesty, AI) poprzez uniwersalny router AI.
- Komunikacja z innymi poziomami (Organism, Molecule, ...) odbywa się przez InterHierarchyAICommunicator.
- Elastyczność: "Heart" może być rozbudowywany o nowe funkcje, a jego komunikacja z innymi Country jest parametryzowana i bezpieczna.
- Bezpieczeństwo: każda wymiana danych z AI jest walidowana i logowana.

## Kluczowe elementy:
- Podstawowe informacje (nazwa, opis, wersja, autor, data)
- Lista Organizmów (strony, sekcje)
- Routing (mapowanie URL na Organisms)
- Ustawienia globalne (style, zasoby)
- Globalne zasoby niższego rzędu (Quarks, Atoms)

## Współpraca z AI i innymi Country
- "Heart" korzysta z AI do interpretacji poleceń użytkownika, generowania struktury, synchronizacji z "brain" i innymi Country.
- Komunikacja jest elastyczna, kontekstowa i oparta o parametry przekazywane do routera AI.

## Struktura "Heart" (Kluczowe Elementy Konfiguracji na Poziomie Country):

- **Podstawowe Informacje:** (jak wyżej - Nazwa, Opis, Wersja, Autor, Data Utworzenia)
- **Lista Organizmów:** Tablica obiektów, gdzie każdy obiekt reprezentuje główny "Organizm" projektu (np. pojedynczą stronę, główną sekcję aplikacji). Każdy obiekt Organism będzie przechowywał:
  - Unikalne ID (UUID lub podobne)
  - Nazwę wyświetlaną (np. "Strona Główna", "O Nas")
  - Odniesienie do szczegółowej definicji tego Organismu (która będzie przechowywana w innym miejscu, "heart" tylko nim zarządza na wysokim poziomie)
- **Routing:** Obiekt mapujący ścieżki URL na konkretne ID Organizmów z listy. Definiuje, który Organizm ma być wyświetlony pod danym adresem. Przykład: `{"/": "id-organizmu-strony-glownej", "/o-nas": "id-organizmu-strony-o-nas"}`.
- **Ustawienia Globalne Projektu:**
  - Podstawowe ustawienia wyglądu/stylów (np. zmienne CSS definiujące paletę kolorów, typografię - jeśli mają być globalne).
  - Globalne zasoby (np. ścieżki do globalnych plików CSS, JS, ikon, favikony).
  - (Na tym etapie nie uwzględniamy ustawień SEO).
- **Globalnie Dostępne Zasoby Niższego Rzędu:** Odniesienia do "Quarks" i "Atoms", które są zdefiniowane jako globalne i mogą być używane w dowolnym miejscu projektu (w dowolnym Organismie, Molecule itp.). "Heart" może przechowywać listę ID tych globalnych elementów.

**Zasada Hierarchii:** Zachowujemy ścisłą hierarchię Atomic Design, gdzie tylko elementy niższego rzędu mogą wchodzić w skład elementów wyższego rzędu. "Heart" na poziomie "Country" zarządza jedynie listami i powiązaniami elementów z niższych poziomów (głównie Organisms), ale sam nie jest częścią żadnego z nich, ani nie zawiera bezpośrednio ich szczegółowych definicji (przechowuje jedynie do nich odniesienia).

Ta notatka definiuje początkową strukturę danych, którą "heart" będzie musiał przechowywać i przetwarzać. Daje nam to solidną podstawę do dalszego planowania implementacji.

## Terminale w architekturze

- Terminal to specjalny punkt wejścia (interfejs) do wybranego organizmu (Organism) lub wyższego poziomu (np. World).
- Terminal może być przypisany do konkretnego organizmu (np. edytor sekcji, panel zarządzania stroną) lub mieć charakter globalny (terminal world).
- Przykład: terminal world o nazwie "front end canvas" będzie globalnym punktem wejścia do tworzenia stron internetowych front end.
- Terminale są rozszerzalne – można dodawać kolejne typy terminali dla różnych warstw i zastosowań.
