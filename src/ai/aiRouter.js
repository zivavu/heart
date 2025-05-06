/**
 * @typedef {Object} InterHierarchyMessage
 * @property {string} fromLevel - Poziom źródłowy (np. 'World', 'Country', 'Organism')
 * @property {string} toLevel - Poziom docelowy
 * @property {string} type - Typ komunikacji (np. 'sync', 'generate', 'validate')
 * @property {number} priority - Ważność komunikatu (np. 1-10)
 * @property {string} systemPrompt - System prompt dla AI
 * @property {string} userPrompt - Prompt użytkownika (jeśli dotyczy)
 * @property {Object} [payload] - Dodatkowe dane
 */

/**
 * @typedef {Object} AIRoute
 * @property {string} id - Unikalny identyfikator trasy/modelu
 * @property {function(InterHierarchyMessage): boolean} match - Funkcja sprawdzająca, czy trasa pasuje do komunikatu
 * @property {function(InterHierarchyMessage): Promise<any>} handler - Funkcja obsługująca komunikat (np. wywołanie modelu AI)
 */

/**
 * Tablica tras/modeli AI
 * @type {AIRoute[]}
 */
const aiRoutes = [
  // Przykład: ważne komunikaty World->Country obsługuje model X
  {
    id: 'world-country-priority-high',
    match: (msg) => msg.fromLevel === 'World' && msg.toLevel === 'Country' && msg.priority > 7,
    handler: async (msg) => {
      // TODO: Integracja z wybranym modelem AI (np. LangChainJS, OpenRouter)
      return { result: 'Obsłużono przez model X (priorytet wysoki)', message: msg };
    }
  },
  // Przykład: domyślna trasa
  {
    id: 'default',
    match: () => true,
    handler: async (msg) => {
      // TODO: Integracja z domyślnym modelem AI
      return { result: 'Obsłużono przez domyślny model', message: msg };
    }
  }
];

/**
 * Router AI – wybiera trasę na podstawie komunikatu i wywołuje odpowiedni handler.
 * @param {InterHierarchyMessage} message
 * @returns {Promise<any>}
 */
async function aiRouter(message) {
  const route = aiRoutes.find(r => r.match(message));
  if (!route) throw new Error('No matching AI route found');
  // Można dodać logowanie, audyt, itp.
  return await route.handler(message);
}

module.exports = { aiRouter, aiRoutes }; 