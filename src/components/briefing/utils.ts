let counter = 0;

export function generateId(): string {
  counter++;
  return `eq-${Date.now()}-${counter}`;
}

export function saveToStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erro ao salvar no localStorage", error);
  }
}

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Erro ao carregar do localStorage", error);
    return defaultValue;
  }
}
