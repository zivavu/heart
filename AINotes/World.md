# WIZJA: World – Meta-Architektura Narzędzia

Projekt opiera się na wielopoziomowej, elastycznej architekturze:

- **World** to najwyższy poziom abstrakcji, agregujący wiele **Country** (np. heart, brain, ...), z których każdy odpowiada za inną globalną domenę (struktura, logika, AI, itd.).
- Każdy Country może zarządzać własnymi Organisms, Molecules, Atoms itd., zgodnie z modelem Atomic Design.
- Wszystko dzieje się w ramach jednego, wielkiego, interaktywnego canvasu, gdzie użytkownik operuje na bardzo wysokim poziomie abstrakcji.

## AI jako uniwersalny router komunikacji

- Komunikacja pomiędzy wszystkimi poziomami hierarchii (World, Country, Organism, Molecule, Atom, Quark, String) obsługiwana jest przez jeden, reużywalny komponent AI (InterHierarchyAICommunicator).
- AI pełni rolę tłumacza, koordynatora i interpretatora intencji oraz danych – wybiera model, system prompt, strategię na podstawie parametrów komunikatu.
- Możliwość podłączania różnych backendów AI (LangChainJS, OpenRouter, Ollama, lokalne modele, własne endpointy).
- Komunikacja w obrębie tego samego poziomu (np. Country ↔ Country) odbywa się bezpośrednio przez kod (API, eventy, store).

## Elastyczność, bezpieczeństwo, skalowalność

- Architektura jest otwarta na rozbudowę o kolejne Country (np. security, analytics, user management) i metapoziomy (Universe – federacja wielu World).
- Każda komunikacja z AI jest walidowana, sandboxowana, logowana i audytowana.
- System jest smart: AI może się uczyć, optymalizować wybory, automatyzować i refaktoryzować kod oraz strukturę projektu.

## Podsumowanie

- World to meta-warstwa, która spina całość narzędzia i zarządza komunikacją oraz logiką na wszystkich poziomach.
- AI jest sercem komunikacji i logiki narzędzia – umożliwia semantyczną, kontekstową, elastyczną współpracę wszystkich warstw.
- Użytkownik korzysta z jednego, potężnego canvasu, gdzie może tworzyć, modyfikować i eksplorować projekty na niespotykanym dotąd poziomie abstrakcji.

# Notatka: Poziom World

- **World** to najwyższy poziom abstrakcji w architekturze narzędzia.
- Agreguje wiele "Country" – każda z nich odpowiada za inną globalną domenę (np. "heart" – struktura, "brain" – logika/interakcje).
- "World" zarządza komunikacją, synchronizacją i meta-konfiguracją całego narzędzia.
- Pozwala na dalszą rozbudowę architektury o kolejne "Country" w przyszłości.
- "World" jest globalnym kontekstem, w którym współistnieją i współpracują wszystkie główne mechanizmy narzędzia.

Przykład:

- World
  - Country: heart (struktura, konfiguracja)
  - Country: brain (logika, requesty, AI)
  - ... (inne globalne domeny w przyszłości)

# Komunikacja w architekturze World

- Komunikacja między różnymi poziomami hierarchii (World ↔ Country, Country ↔ Organism, itd.) odbywa się za pośrednictwem warstwy AI.
- AI pełni rolę tłumacza, koordynatora i interpretatora intencji oraz danych.
- Komunikacja w obrębie tego samego poziomu (np. Country ↔ Country) odbywa się bezpośrednio przez kod (API, eventy, store).
- Do obsługi AI wykorzystywany jest open source'owy klient obsługujący wiele modeli (np. LangChainJS).

# Przykładowy flow komunikacji World ↔ AI ↔ Country

1. Użytkownik wykonuje akcję na canvasie (np. rysuje, klika, wpisuje prompt).
2. World przekazuje intencję/zdarzenie do warstwy AI.
3. AI interpretuje intencję, generuje odpowiedź lub plan działania.
4. Odpowiedź AI trafia do odpowiedniego Country (np. heart – zmiana struktury, brain – obsługa logiki).
5. Country wykonuje akcję, aktualizuje stan, ewentualnie przekazuje wynik z powrotem do World.

# Przykładowe scenariusze użycia AI w komunikacji

- Tłumaczenie promptów użytkownika na konkretne akcje w narzędziu (np. "dodaj stronę główną", "zmień kolor tła na niebieski").
- Automatyczne generowanie kodu, struktur, komponentów na podstawie opisu użytkownika.
- Synchronizacja i rozwiązywanie konfliktów między różnymi Country (np. heart i brain mają różne wersje tej samej strony – AI decyduje, jak je połączyć).
- Propozycje optymalizacji, refaktoryzacji lub automatyczne naprawianie błędów.

# Przykładowe modele AI i frameworki klienckie

- LangChainJS (obsługuje OpenAI, HuggingFace, TogetherAI, Ollama, Mistral, lokalne modele przez API)
- OpenRouter (agregator wielu modeli przez jedno API)
- Ollama (prosty interfejs do lokalnych modeli LLM)
- Llama.cpp (lokalne modele, integracja przez API)
- Możliwość podpięcia własnych endpointów AI (np. self-hosted, chmurowe, hybrydowe)

# Wskazówki dotyczące bezpieczeństwa i elastyczności

- Każda komunikacja z AI powinna być walidowana i sandboxowana, by uniknąć niepożądanych efektów ubocznych.
- Możliwość wyboru i podmiany backendu AI przez użytkownika (np. lokalny vs chmurowy model, różne API).
- Logowanie i audytowanie decyzji AI dla przejrzystości działania narzędzia.

# Możliwość rozbudowy architektury

- World może agregować kolejne Country (np. security, analytics, user management) – architektura jest otwarta na rozbudowę.
- Możliwość wprowadzenia kolejnych metapoziomów (np. Universe – agregacja wielu World, federacja narzędzi).

# Uniwersalny komponent komunikacji między rzędami

- Komunikacja pomiędzy wszystkimi poziomami hierarchii (World, Country, Organism, Molecule, Atom, Quark, String) obsługiwana jest przez jeden, reużywalny komponent AI (np. InterHierarchyAICommunicator).
- Każde wywołanie przekazuje parametry:
  - poziom ważności/prioritet,
  - typ komunikacji (np. synchronizacja, generacja, walidacja, konflikt),
  - kontekst źródłowy i docelowy (np. World → Country, Organism → Molecule),
  - dodatkowe dane (np. system prompt, user prompt, historia).
- Router AI na podstawie tych parametrów wybiera odpowiedni model, system prompt i strategię obsługi.
- Komponent jest smart: może logować, uczyć się, optymalizować wybory, audytować komunikację.
- Dzięki temu architektura jest elastyczna, skalowalna i łatwa do rozbudowy o nowe poziomy lub typy komunikacji.
