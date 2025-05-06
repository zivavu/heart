# Notatka: Środowisko deweloperskie projektu Heart

**System operacyjny:** Windows 10 Home, wersja 22H2, kompilacja 19045.5737
**Sprzęt:** AMD Ryzen 5 1600 Six-Core Processor 3.20 GHz, 32 GB RAM
**Powłoka terminala:** PowerShell

**Stack technologiczny:**

- Monorepo (zarządzanie workspace, np. pnpm workspaces)
- Bun (jako runtime, bundler, narzędzie developerskie)
- JSDoc (dokumentacja typów, brak transpilacji TypeScript)
- AI-router jako kluczowy komponent komunikacji między warstwami
- Wsparcie dla różnych backendów AI (LangChainJS, OpenRouter, Ollama, lokalne modele)

**Architektura:**

- Projekt rozwijany w architekturze World/Country, z AI jako sercem komunikacji i logiki
- Elastyczność, bezpieczeństwo, możliwość rozbudowy o kolejne warstwy i backendy

**Uwagi:**

- W razie problemów z PowerShellem, środowisko będzie naprawiane lub dostosowywane.
- Projekt jest open source.

Ta notatka dokumentuje wyjściowe środowisko, w którym rozpoczynamy budowę narzędzia Heart.
