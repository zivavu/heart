# Notatka: Model Atomic Design w Projekcie "Heart"

W kontekście naszego narzędzia do tworzenia stron internetowych, adaptujemy koncepcję Atomic Design, rozszerzając ją o dodatkowe poziomy abstrakcji, aby lepiej odwzorować strukturę i organizację projektów. Każde Country (np. heart, brain) zarządza własną hierarchią Atomic Design.

**Nowość:** Komunikacja między poziomami (np. Organism ↔ Molecule, Molecule ↔ Atom) jest obsługiwana przez uniwersalny AI-router (InterHierarchyAICommunicator), co zapewnia elastyczność, kontekstowość i możliwość rozwoju.

Kluczową zasadą jest ścisła hierarchia: elementy niższego rzędu mogą być używane do budowania elementów wyższego rzędu, ale element wyższego rzędu nigdy nie może być częścią elementu niższego rzędu.

## Elastyczność i współpraca
- Każde Country może mieć własną hierarchię Atomic Design, ale komunikacja i synchronizacja między Country (np. heart ↔ brain) odbywa się przez AI-router.
- Pozwala to na rozbudowę narzędzia o nowe Country i warstwy bez naruszania spójności architektury.

Oto definicja poszczególnych poziomów:

**Strings (Struny)**
Opis: Najniższy poziom abstrakcji. Pojedyncze linie kodu, podstawowe instrukcje, deklaracje, wartości. To surowy materiał, z którego budowane są wyższe poziomy.
Zawartość: Nie zawiera nic poza pojedynczą linią/fragmentem kodu.

**Quarks (Kwarki)**
Opis: Pomocnicze funkcje, małe fragmenty logiki, stałe, lub inne proste, niezależne jednostki kodu, które same w sobie nie stanowią pełnego komponentu, ale są użyteczne dla wyższych poziomów.
Zawartość: Może zawierać Strings.

**Atoms (Atomy)**
Opis: Samodzielne, stabilne, najmniejsze możliwe jednostki interfejsu użytkownika lub logiki biznesowej, które mają swoje własne znaczenie i funkcję. Przykłady to przycisk, pole tekstowe, nagłówek. Atomy są "czyste" i nie zależą od kontekstu większych kompozycji.
Zawartość: Może zawierać Strings i Quarks. Nie może zawierać Molecules, Organisms, ani Country.

**Molecules (Molekuły)**
Opis: Kompozycje kilku Atomów (i/lub niższych poziomów) połączonych w celu stworzenia bardziej złożonej, ale wciąż prostej jednostki interfejsu lub logiki. Przykład: etykieta + pole tekstowe + przycisk tworzące formularz wyszukiwania. Molekuły mają swoje właściwości, ale są nadal stosunkowo proste.
Zawartość: Może zawierać Atoms, Quarks i Strings. Nie może zawierać Organisms, ani Country.

**Organisms (Organizmy)**
Opis: Bardziej złożone sekcje interfejsu lub fragmenty logiki biznesowej, zbudowane z Molecules (i/lub niższych poziomów). Stanowią samodzielne, znaczące części strony lub aplikacji. Przykład: nagłówek strony (logo, nawigacja, przycisk), sekcja "o nas", stopka strony. W tym modelu Organismem może być też cała pojedyncza strona lub nawet serwer/mikroserwis rozumiany jako spójna jednostka funkcjonalna.
Zawartość: Może zawierać Molecules, Atoms, Quarks i Strings. Nie może zawierać Country.

**Country (Kraj)**
Opis: Najwyższy poziom abstrakcji, reprezentujący całość systemu lub projektu. Zespół powiązanych Organisms (i/lub niższych poziomów), które tworzą kompletną aplikację, zestaw stron, lub powiązanych serwisów. W Country zarządzamy globalną konfiguracją, routingiem między stronami/organizmami, wspólnymi zasobami itp. (to jest poziom, na którym operuje główne "heart").
Zawartość: Może zawierać Organisms, Molecules, Atoms, Quarks i Strings.

**Zasada Hierarchii:**
Ściśle przestrzegamy zasady, że element na danym poziomie może zawierać jedynie elementy z tego samego poziomu lub poziomów niższych. Jest absolutnie zabronione, aby element niższego rzędu zawierał element wyższego rzędu. Np. Molecule nie może zawierać Organismu, a Atom nie może zawierać Molecule czy Organismu. Ta zasada zapewnia czystość, spójność i przewidywalność struktury projektu.
