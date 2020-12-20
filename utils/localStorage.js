export const setItem = (key, data) => {
  if (process.browser) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getItem = (key) => {
  if (process.browser) {
    return JSON.parse(window.localStorage.getItem(key));
  }
};

export const removeItem = (key) => {
  if (process.browser) {
    return window.localStorage.removeItem(key);
  }
};
