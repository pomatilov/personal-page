export const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  }

  return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
};

export default getNavigatorLanguage;
