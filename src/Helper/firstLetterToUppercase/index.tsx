const firstLetterUppercase = (string: string) => {
  if (string !== '' && string !== undefined) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return '';
  }
};

export default firstLetterUppercase;
