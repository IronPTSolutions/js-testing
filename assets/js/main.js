
function min(n1, n2) {
  if (n1 < n2) {
    return n1;
  } else if (n2 < n1) {
    return n2;
  } else {
    return n1;
  }
}

function join(elements, separator = '') {
  let word;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (!word) {
      word = element;
    } else {
      word = `${word}${separator}${element}`;
    }
  }
  return word;
}
