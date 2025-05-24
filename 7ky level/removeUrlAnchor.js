// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor(url){
  // TODO: complete
  let i= url.indexOf('#');
  return i>0 ? url.substring(0,i) : url
}