// Write your code here
function urlify(urlTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;

  const urlSafeTitle = urlTitle.replace(punctuation, "");
  return urlSafeTitle.toLowerCase().trim().replaceAll(" ", "-");
};

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));