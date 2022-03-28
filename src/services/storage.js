export function getItem(key) {
  return localStorage.getItem(key);
}

export function setItem(key, value) {
  return localStorage.setItem(key, value);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}

export function isItem(key, value) {
  const values = JSON.parse(getItem(key));

  if (values) {
    const isRegistered = values.some((v) => v === value);

    if (isRegistered) {
      return true;
    }
    return false;
  }
}
