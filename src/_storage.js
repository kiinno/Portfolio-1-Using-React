export function loadSettings() {
  const storage = window.localStorage;
  const rootDocument = document.documentElement;
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (key.startsWith("css_")) {
      rootDocument.style.setProperty(
        key.replace("css_", ""),
        storage.getItem(key)
      );
    }
  }
}

export function resetSettings() {
  const storage = window.localStorage;
  const rootDocument = document.documentElement;
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (key.startsWith("css_")) {
      rootDocument.style.removeProperty(key.replace("css_", ""));
    }
  }
  storage.clear();
}
