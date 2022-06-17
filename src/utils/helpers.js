export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

export const camelCaseToSentence = (text) => {
  return text.replace(/^[a-z]|[A-Z]/g, (v, i) => {
    return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
  })
}

export const sentenceToCamelCase = (text) => {
  return text.replace(/\s+(.)/g, function (match, group) {
    return group.toUpperCase()
  })
}